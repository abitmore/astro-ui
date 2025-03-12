import React, { useState, useEffect, useSyncExternalStore, useMemo } from "react";
import { useStore } from "@nanostores/react";
import { FixedSizeList as List } from "react-window";
import { sha256 } from '@noble/hashes/sha2';
import { bytesToHex as toHex } from '@noble/hashes/utils';

import { useTranslation } from "react-i18next";
import { i18n as i18nInstance, locale } from "@/lib/i18n.js";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { humanReadableFloat } from "@/lib/common";

import { $currentUser } from "@/stores/users.ts";
import { $currentNode } from "@/stores/node.ts";
import { $poolTrackers, updateTrackers } from '@/stores/poolTracker';

import { useInitCache } from "@/nanoeffects/Init.ts";
import { createObjectStore } from "@/nanoeffects/Objects.js";
import { createUserBalancesStore } from "@/nanoeffects/UserBalances.ts";
import { createEveryLiquidityPoolStore } from "@/nanoeffects/LiquidityPools.js";

import { createTickerStore, createMarketTradeHistoryStore, createMultipleTickerStore } from "@/nanoeffects/MarketTradeHistory.js";
import { createAssetCallOrdersStore } from "@/nanoeffects/AssetCallOrders.ts";

const convertToSatoshis = (value) => value.toString().includes('e-') ? `${(value * 1e8).toFixed(0)} sats` : value.toString();

const calculateSmartcoinPrice = (smartcoin, usdPrice, quotePrecision, basePrecision) => {
  if (!smartcoin) {
    return 0.0;
  }

  const _debt = smartcoin.individual_settlement_debt
    ? humanReadableFloat(parseInt(smartcoin.individual_settlement_debt), basePrecision)
    : 0;

  const _price = parseFloat(
    (
      humanReadableFloat(
        parseInt(
          _debt && _debt > 0
            ? smartcoin.median_feed.settlement_price.quote.amount
            : smartcoin.current_feed.settlement_price.quote.amount
        ),
        quotePrecision
      ) /
      humanReadableFloat(
        parseInt(
          _debt && _debt > 0
            ? smartcoin.median_feed.settlement_price.base.amount
            : smartcoin.current_feed.settlement_price.base.amount
        ),
        basePrecision
      )
    ).toFixed(quotePrecision)
  );

  return usdPrice ? (_price / usdPrice).toFixed(4) : _price;
};

const calculateStaked = (pools, ownerships, assetId) => {
  if (!pools || !ownerships || !assetId) {
    return 0;
  }

  let _calculated = pools.reduce((acc, val) => {
    const ownership = ownerships[`ownership${val.share_asset.replace("1.3.", "")}`];
    return ownership
      ? acc + parseInt(val.asset_a === assetId ? val.balance_a : val.balance_b) * ownership
      : acc;
  }, 0);

  return _calculated;
};

export default function CustomPoolTracker(properties) {
  const { t, i18n } = useTranslation(locale.get(), { i18n: i18nInstance });
  const currentNode = useStore($currentNode);
  const trackers = useStore($poolTrackers);

  const usr = useSyncExternalStore($currentUser.subscribe, $currentUser.get, () => true);

  const {
    _assetsBTS,
    _assetsTEST,
    _poolsBTS,
    _poolsTEST,
    _marketSearchBTS,
    _marketSearchTEST
  } = properties;

  const _chain = useMemo(() => {
    if (usr && usr.chain) {
      return usr.chain;
    }
    return "bitshares";
  }, [usr]);

  useInitCache(_chain ?? "bitshares", []);

  const [lpTradingVolumes, setLPTradingVolumes] = useState();
  useEffect(() => {
    let unsubscribeStore;

    if (usr && usr.id && currentNode) {
      const lpVolumeStore = createEveryLiquidityPoolStore([
        usr.chain,
        currentNode.url
      ]);

      unsubscribeStore = lpVolumeStore.subscribe(({ data, error, loading }) => {
        if (data && !error && !loading) {
          setLPTradingVolumes(data);
        }
      });
    }

    return () => {
      if (unsubscribeStore) unsubscribeStore();
    }
  }, [usr, currentNode]);

  const assets = useMemo(() => {
    if (!_chain || (!_assetsBTS && !_assetsTEST)) {
      return [];
    }

    if (_chain !== "bitshares") {
      return _assetsTEST;
    }

    return _assetsBTS;
  }, [_assetsBTS, _assetsTEST, _chain]);
  
  const [usrBalances, setUsrBalances] = useState();
  useEffect(() => {
    let unsubscribeUserBalances;

    if (usr && usr.id && assets && assets.length && currentNode) {
      const userBalancesStore = createUserBalancesStore([
        usr.chain,
        usr.id,
        currentNode.url
      ]);

      unsubscribeUserBalances = userBalancesStore.subscribe(({ data, error, loading }) => {
        if (data && !error && !loading) {
          const filteredData = data.filter((balance) =>
            assets.find((x) => x.id === balance.asset_id)
          );
          setUsrBalances(filteredData);
        }
      });
    }

    return () => {
      if (unsubscribeUserBalances) unsubscribeUserBalances();
    };
  }, [usr, assets]);

  /*
  const marketSearch = useMemo(() => {
      if (usr && usr.chain && (_marketSearchBTS || _marketSearchTEST)) {
          return usr.chain === "bitshares" ? _marketSearchBTS : _marketSearchTEST;
      }
      return [];
  }, [_marketSearchBTS, _marketSearchTEST, usr]);
  */

  const pools = useMemo(() => {
      if (!_chain || (!_poolsBTS && !_poolsTEST)) {
          return [];
      }

      if (_chain !== "bitshares") {
          return _poolsTEST;
      }
      
      const relevantPools = _poolsBTS.filter((pool) => {
          const poolShareAsset = assets.find((asset) => asset.id === pool.share_asset_id);
          if (!poolShareAsset) return false;
          return !blocklist.users.includes(toHex(sha256(poolShareAsset.issuer)));
      });
      
      return relevantPools;
  }, [assets, _poolsBTS, _poolsTEST, _chain]);

  const [poolId, setPoolId] = useState();
  useEffect(() => {
    async function parseUrlAssets() {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const id = params.id;

      if (!id) {
        console.log("Credit offer parameter not found");
        return;
      }

      setPoolId(id);
    }
    
    if (_chain) {
      parseUrlAssets()
    }
  }, [_chain]);

  const [storedTracker, setStoredTracker] = useState();
  useEffect(() => {
    if (poolId) {
      const chainTrackers = trackers[_chain];
      setStoredTracker(chainTrackers.find((x) => x.id === poolId));
    }
  }, [_chain, poolId, trackers]);

  const [chosenPools, setChosenPools] = useState([]);
  const filteredLPTradingVolumes = useMemo(() => {
    if (!lpTradingVolumes || !chosenPools) {
      return null;
    }
    const _ids = chosenPools.map((x) => x.id);
    return lpTradingVolumes.filter((x) => _ids.includes(x.id));
  }, [lpTradingVolumes, chosenPools]);

  const [swappableAssets, setSwappableAssets] = useState([]);
  const [poolShareAssets, setPoolShareAssets] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    if (storedTracker) {
      const _chosenPools = pools.filter((pool) => storedTracker.includes(pool.id));
      setChosenPools(_chosenPools);

      const _swappableAssetSymbol = [];
      const _swappableAssets = [];
      const _poolShareAssets = [];

      chosenPools.forEach((pool) => {
          const assetA = assets.find((asset) => asset.id === pool.asset_a_id);
          const assetB = assets.find((asset) => asset.id === pool.asset_b_id);
          const poolShareAsset = assets.find((asset) => asset.id === pool.share_asset_id);
          if (poolShareAsset) {
              _poolShareAssets.push(poolShareAsset);
          }
          if (assetA && !_swappableAssetSymbol.includes(assetA.symbol)) {
              _swappableAssetSymbol.push(assetA.symbol);
              _swappableAssets.push(assetA);
          }
          if (assetB && !_swappableAssetSymbol.includes(assetB.symbol)) {
              _swappableAssetSymbol.push(assetB.symbol);
              _swappableAssets.push(assetB);
          }
      });

      setSwappableAssets(_swappableAssets);
      setPoolShareAssets(_poolShareAssets);
      setName(storedTracker.name);
    }
  }, [storedTracker]);

  // liquidity pool data
  const [liquidityPools, setLiquidityPools] = useState();

  // dynamic data 
  const [dynamicData, setDynamicData] = useState();

  // smartcoin data
  const [smartcoinData, setSmartcoinData] = useState();
  const [backingAssets, setBackingAssets] = useState();
 
  useEffect(() => {
    if (assets && assets.length) {
      const _chosenPoolIDs = chosenPools.map((x) => x.id);
      const _swappableAssetDDID = swappableAssets.map((x) => x.id.replace("1.3.", "2.3."));
      const _poolShareAssetDDID = poolShareAssets.map((x) => x.id.replace("1.3.", "2.3."));
      const _smartcoinIDs = swappableAssets.filter((x) => x.bitasset_data_id);

      const objStore = createObjectStore([
        _chain,
        JSON.stringify([
          // liquidity pool data
          ..._chosenPoolIDs,
          // dynamic data (main assets)
          ..._swappableAssetDDID,
          // dynamic data (pool share assets)
          ..._poolShareAssetDDID,
          // smartcoin data
          ...[...new Set([
            ..._smartcoinIDs, // user-configured
            "2.4.294" // always include honest.usd for USD price references
          ])]
        ]),
        currentNode ? currentNode.url : null,
      ]);
      objStore.subscribe(({ data, error, loading }) => {
        if (data && !error && !loading) {
          // liquidity pool data
          const lpLength = chosenPools.length;
          setLiquidityPools(data.slice(0, lpLength));

          // dynamic asset data
          const maddLength = swappableAssets.length;
          const psaLength = poolShareAssets.length;
          let _dd = {};
          data.slice(lpLength, lpLength + maddLength).forEach((x) => {
            // main assets
            const _key = x.id.replace("2.3.", "1.3.");
            const _asset = assets.find((x) => x.id === _key);
            _dd[_asset.symbol] = x;
          });
          data.slice(lpLength + maddLength, lpLength + maddLength + psaLength).forEach((x) => {
            // pool share assets
            const _key = x.id.replace("2.3.", "1.3.");
            const _asset = assets.find((x) => x.id === _key);
            _dd[_asset.symbol] = x;
          });
          setDynamicData(_dd);

          // smartcoin data
          const scLength = [...new Set([..._smartcoinIDs, "2.4.294"])].length; // always include honest.usd for price reference points
          const _sc = {};
          const _smartcoinData = data.slice(
            lpLength + maddLength + psaLength,
            lpLength + maddLength + psaLength + scLength
          );
          _smartcoinData.forEach((x) => {
            const _asset = assets.find((x) => x.id === x.asset_id);
            _sc[_asset.symbol] = x;
          });
          setSmartcoinData(_sc);

          const _backingAssetIDs = [...new Set(_smartcoinData.map((x) => x.options.short_backing_asset))];
          setBackingAssets(assets.filter((x) => _backingAssetIDs.includes(x.id)));
        }
      });
    }
  }, [assets]);

  const [backingAssetDD, setBackingAssetDD] = useState();
  useEffect(() => {
    if (backingAssets && backingAssets.length) {
      const objStore = createObjectStore([
        _chain,
        JSON.stringify([
          ...backingAssets.map((x) => x.id.replace("1.3.", "2.3.")),
        ]),
        currentNode ? currentNode.url : null,
      ]);
      objStore.subscribe(({ data, error, loading }) => {
        if (data && !error && !loading) {
          const _backingAssets = {};
          data.forEach((x) => {
            const _refID = x.id.replace("2.3.", "1.3.");
            const _symbol = backingAssets.find((x) => x.id === _refID).symbol;
            _backingAssets[_symbol] = x;
          });
          setBackingAssetDD(_backingAssets);
        }
      });
    }
  }, [backingAssets]);

  // dynamic data for:
  //    swappable assets, pool share assets, backing assets
  const combinedAssetDynamicData = useMemo(() => {
    if (!dynamicData || !backingAssetDD) {
      return null;
    }

    let _combined = {};
    Object.keys(dynamicData).forEach((key) => {
      _combined[key] = dynamicData[key];
    });
    Object.keys(backingAssetDD).forEach((key) => {
      _combined[key] = backingAssetDD[key];
    });

    return _combined;
  }, [dynamicData, backingAssetDD]);

  const balances = useMemo(() => {
    if (!usrBalances || !usrBalances.length) {
      return null;
    }

    const _ids = [...new Set([
      ...swappableAssets.map((x) => x.id),
      ...poolShareAssets.map((x) => x.id),
      ...backingAssets.map((x) => x.id)
    ])];

    let _result = {};
    _ids.forEach((id) => {
      const balance = usrBalances.find((x) => x.asset_id === id);
      if (balance) {
        const key = `balance${id.replace("1.3.", "")}`;
        _result[key] = balance;
      }
    });

    return _result;
  }, [usrBalances, swappableAssets, poolShareAssets, backingAssets]);

  const ownerships = useMemo(() => {
    if (!combinedAssetDynamicData) {
      return null;
    }
    
    const calculateOwnership = (supply, balance) => {
      return supply && balance && balance.amount ? parseInt(balance.amount) / supply : 0;
    };

    let ownerships = {};
    // iterate over keys
    Object.keys(combinedAssetDynamicData).forEach((key) => {
      ownerships[`ownership${key.replace("2.3.", "")}`] = calculateOwnership(
        parseInt(combinedAssetDynamicData[key].current_supply),
        balances[`balance${key.replace("2.3.", "")}`] ?? null
      );
    });

    return ownerships;
  }, [combinedAssetDynamicData, balances]);

  // Summarizing the amount of each swappable asset staked in many pools
  const stakedAssets = useMemo(() => {
    if (!liquidityPools || !swappableAssets || !ownerships) {
      return null;
    }

    let _stakedAssets = {};
    swappableAssets.forEach((asset) => {
      _stakedAssets[`staked${asset.id.replace("1.3.", "")}`] = humanReadableFloat(
        calculateStaked(
          liquidityPools.filter((x) => x.asset_a === asset.id || x.asset_b === asset.id),
          ownerships,
          asset.id
        ),
        asset.precision
      );
    });

    return _stakedAssets;
  }, [liquidityPools, swappableAssets, ownerships]);

  const psaDD = useMemo(() => {
    if (!combinedAssetDynamicData || !poolShareAssets) {
      return null;
    }
    return poolShareAssets.map(x => x.symbol).map((x) => combinedAssetDynamicData[x]);
  }, [combinedAssetDynamicData, poolShareAssets]);

  const [smartcoinCallOrders, setSmartcoinCallOrders] = useState();
  useEffect(() => {
    async function fetching() {
      const _assetStore = createAssetCallOrdersStore([
        _chain,
        JSON.stringify(swappableAssets.filter((x) => x.bitasset_data_id).map((x) => x.id)),
        currentNode.url,
      ]);

      _assetStore.subscribe(({ data, error, loading }) => {
        if (data && !error && !loading) {
          const userCallOrders = {};
          data.forEach((x) => {
            const _callOrders = Object.values(x)[0];
            const userCallOrders = _callOrders.find((y) => y.borrower === usr.id);
            
            const _key = Object.keys(data[0])[0];
            const _refAsset = assets.find((x) => x.id === _key);
            userCallOrders[_refAsset.symbol] = userCallOrders;
          });
          setSmartcoinCallOrders(userCallOrders);
          console.log({ userCallOrders });
        }
      });
    }

    if (currentNode && usr && usr.id) {
      fetching();
    }
  }, [currentNode, usr]);

  const [allAssetsMarketTickers, setAllAssetsMarketTickers] = useState();
  useEffect(() => {
    if (usr && usr.id && assets && assets.length && currentNode) {
      const assetTradingPairs = swappableAssets.map((x) => {
        const _coreAsset = usr.chain === "bitshares" ? "BTS" : "TEST";
        const _coreTradeAsset = usr.chain === "bitshares" ? "HONEST.USD" : "NFTEA"; // TODO: Replace with other assets?
        return `${x.symbol}_${x.symbol !== _coreAsset ? _coreAsset : _coreTradeAsset}`;
      });
      const poolTradingPairs = poolShareAssets.map((x) => `${x.symbol}_${usr.chain === "bitshares" ? "BTS" : "TEST"}`);
      const backingAssetPairs = backingAssets.map((x) => {
        const _coreAsset = usr.chain === "bitshares" ? "BTS" : "TEST";
        const _coreTradeAsset = usr.chain === "bitshares" ? "HONEST.USD" : "NFTEA"; // TODO: Replace with other assets?
        return `${x.symbol}_${x.symbol !== _coreAsset ? _coreAsset : _coreTradeAsset}`;
      });
      const assetTickerStore = createMultipleTickerStore([
        usr.chain,
        [...new Set([
          ...assetTradingPairs,
          ...poolTradingPairs,
          ...backingAssetPairs
        ])],
        currentNode.url
      ]);

      assetTickerStore.subscribe(({ data, error, loading }) => {
        if (data && !error && !loading) {
          // { "BTS_HONEST.USD": { tickerdata } }
          setAllAssetsMarketTickers(data);
        }
      });
    }
  }, [usr, swappableAssets, poolShareAssets , currentNode]);

  const allAssetPrices = useMemo(() => {
    if (!allAssetsMarketTickers) {
      return null;
    }

    const honestUSDPrice = calculateSmartcoinPrice( // honest settlement price in bts
      smartcoinData["HONEST.USD"], // smartcoin
      null,               // usd price
      5,                  // quote precision
      4,                  // base precision
    );

    let _prices = {};
    let _settlementPrices = {};
    Object.keys(allAssetsMarketTickers).forEach((key) => {
      const _ticker = allAssetsMarketTickers[key];
      const _asset = assets.find((x) => x.symbol === key.split("_")[0]);
      if (_asset.bitasset_data_id) {
        // smartcoin
        const _bitassetData = smartcoinData[_asset.symbol];
        const _backingAssetID = _bitassetData.options.short_backing_asset;
        const _backingAsset = backingAssets.find((x) => x.id === _backingAssetID);
        _settlementPrices[_asset.symbol] = calculateSmartcoinPrice(
          _bitassetData,            // smartcoin
          null,
          _backingAsset.precision,  // quote precision (backing | trading pair)
          _asset.precision,         // base precision (smartcoin)
        )

        _prices[_asset.symbol] = calculateSmartcoinPrice( // honest settlement price in bts
          smartcoinData[_asset.symbol],       // smartcoin
          _asset.symbol !== "HONEST.USD"
            ? honestUSDPrice                  // usd price
            : null,                           
          _backingAsset.precision,            // quote precision
          _asset.precision,                   // base precision
        )
      } else {
        // non smartcoin
        if (_asset.symbol === "BTS") {
          _prices["BTS"] = (1 / honestUSDPrice).toFixed(4);
        } else {
          _prices[key] = (_ticker.latest * (1 / honestUSDPrice)).toFixed(_asset.precision);
        }
      }
    });

    return _prices;
  }, [allAssetsMarketTickers, swappableAssets, poolShareAssets, backingAssets]);

  let [totalBalances, setTotalBalances] = useState();
  useEffect(() => {
    let allAssetIDs = [...new Set([
      ...swappableAssets.map((x) => x.id),
      ...poolShareAssets.map((x) => x.id),
      ...backingAssets.map((x) => x.id)
    ])];

    let _totalBalances = {};
    allAssetIDs.forEach((id) => {
      const _asset  = assets.find((x) => x.id === id);
      const key = `balance${id.replace("1.3.", "")}`;
      if (balances && balances[key]) {
        _totalBalances[_asset.symbol] = balances[key];
      }
      if (stakedAssets && stakedAssets[`staked${id.replace("1.3.", "")}`]) {
        const _stakedAmount = stakedAssets[`balance${id.replace("1.3.", "")}`]
        _totalBalances[_asset.symbol] = _totalBalances[_asset.symbol]
          ? _totalBalances[_asset.symbol] + _stakedAmount
          : _stakedAmount;
      }
      if (smartcoinCallOrders && smartcoinCallOrders[_asset.symbol]) {
        const smartcoinCollateral = humanReadableFloat(
          smartcoinCallOrders[_asset.symbol]
            ? smartcoinCallOrders[_asset.symbol].collateral
            : 0,
          _precision
        );
        _totalBalances[_asset.symbol] = _totalBalances[_asset.symbol]
          ? _totalBalances[_asset.symbol] + smartcoinCollateral
          : smartcoinCollateral;
      }
    });
    setTotalBalances(_totalBalances);
  }, [balances, stakedAssets, smartcoinCallOrders]);

  /*
  const finalUSD = useMemo(() => {
    let _total = 0;

    if (totalBTS && btsPrice) {
      _total += totalBTS * btsPrice;
    }
    if (totalHonestMoney && honestMoneyPrice && honestMoneyPrice.latest && btsPrice) {
      _total += totalHonestMoney * honestMoneyPrice.latest * btsPrice;
    }
    if (totalHonestUSD) {
      _total += totalHonestUSD;
    }
    if (totalHonestBTC && honestBTCPrice) {
      _total += totalHonestBTC * honestBTCPrice;
    }
    if (totalHonestXAU && honestXAUPrice) {
      _total += totalHonestXAU * honestXAUPrice;
    }

    return _total.toFixed(4);
  }, [
    totalBalances,
    btsPrice,
    totalHonestMoney,
    honestMoneyPrice,
    totalHonestUSD,
    totalHonestBTC,
    honestBTCPrice,
    totalHonestXAU,
    honestXAUPrice
  ]);
  */
  
  const featuredPoolRow = ({ index, style }) => {
    if (!liquidityPools || !dynamicData || !psaDD) {
      return null;
    }

    let res = liquidityPools[index];

    if (!res) {
      return null;
    }

    const _currentPSA = poolShareAssets.find((x) => x.id === res.share_asset);
    const _psaDD = psaDD.find((x) => x.id === res.share_asset.replace("1.3.", "2.3."));
    const _psaBalance = usrBalances && usrBalances.length
      ? usrBalances.find((x) => x.asset_id === res.share_asset)
      : null;

    const _poolAssetA = swappableAssets.find((x) => x.id === res.asset_a);
    const _poolAssetB = swappableAssets.find((x) => x.id === res.asset_b);

    const _assetAPrice = allAssetPrices[_poolAssetA.symbol];
    const _assetBPrice = allAssetPrices[_poolAssetB.symbol];

    const _amountA = humanReadableFloat(res.balance_a, _poolAssetA.precision);
    const _amountB = humanReadableFloat(res.balance_b, _poolAssetB.precision);

    const foundTradingVolume = lpTradingVolumes && lpTradingVolumes.length
      ? lpTradingVolumes.find((x) => x.id === res.id)
      : null;

    const _24hVolumeA = foundTradingVolume
      ? humanReadableFloat(
          parseInt(foundTradingVolume.statistics._24h_exchange_a2b_amount_a) + parseInt(foundTradingVolume.statistics._24h_exchange_b2a_amount_a),
          _poolAssetA.precision
        )
      : "0.00";

    const _24hVolumeB = foundTradingVolume
      ? humanReadableFloat(
          parseInt(foundTradingVolume.statistics._24h_exchange_a2b_amount_b) + parseInt(foundTradingVolume.statistics._24h_exchange_b2a_amount_b),
          _poolAssetB.precision
        )
      : "0.00";

    const _24hFeeA = foundTradingVolume
      ? humanReadableFloat(
          parseInt(foundTradingVolume.statistics._24h_exchange_fee_a) + parseInt(foundTradingVolume.statistics._24h_withdrawal_fee_a),
          _poolAssetA.precision
        )
      : "0.00";
    
    const _24hFeeB = foundTradingVolume
      ? humanReadableFloat(
          parseInt(foundTradingVolume.statistics._24h_exchange_fee_b) + parseInt(foundTradingVolume.statistics._24h_withdrawal_fee_b),
          _poolAssetB.precision
        )
      : "0.00";

    const poolOwnershipPercentage = _psaBalance && _psaBalance.amount
      ? _psaBalance.amount / _psaDD.current_supply
      : 0;

    const smartcoinSymbols = swappableAssets.filter((x) => x.bitasset_data_id).map((x) => x.symbol);

    return (
      <div style={{ ...style }} key={`poolRow-${res.id}`} className="grid grid-cols-12 text-xs border border-gray-300">
        <div className="grid grid-cols-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="hover:text-purple-500 text-md ml-1 mr-1 mt-1 mb-1">🏦 {res.id}</Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>🏦 {t("PoolTracker:pool")} {res.id}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                  <a href={`/swap/index.html?pool=${res.id}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:simpleSwap")}
                    </Button>
                  </a>
                  <a href={`/pool/index.html?pool=${res.id}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:normalSwap")}
                    </Button>
                  </a>
                  <a href={`/stake/index.html?pool=${res.id}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:stakeAssets")}
                    </Button>
                  </a>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="hover:text-purple-500 text-md ml-1 mr-1">🪙 {_currentPSA.id}</Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>🪙 {t("PoolTracker:psa")} {_currentPSA.id}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                  <a href={`/dex/index.html?market=${res.share_asset}_BTS`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:buy")}
                    </Button>
                  </a>
                  <a href={`/borrow/index.html?tab=searchOffers&searchTab=borrow&searchText=${_currentPSA.symbol ?? ""}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:borrow")}
                    </Button>
                  </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="hover:text-purple-500 text-md m-1">{_poolAssetA.symbol}</Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>A: {_poolAssetA.symbol} {_poolAssetA.id}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                  <a href={`/dex/index.html?market=${_poolAssetA.symbol}_${_poolAssetA.symbol === "BTS" ? "HONEST.USD" : "BTS"}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:buyAsset", { asset: _poolAssetA.symbol })}
                    </Button>
                  </a>
                  <a href={`/borrow/index.html?tab=searchOffers&searchTab=borrow&searchText=${_poolAssetA.symbol}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:borrowAsset", { asset: _poolAssetA.symbol })}
                    </Button>
                  </a>
                  {
                    smartcoinSymbols.includes(_poolAssetA.symbol)
                      ? <a href={`/smartcoin/index.html?id=${_poolAssetA.id}`}>
                          <Button variant="outline" className="w-full">
                            {t("PoolTracker:createDebt")}
                          </Button>
                        </a>
                      : null
                  }
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="hover:text-purple-500 text-md m-1">{_poolAssetB.symbol}</Button>
            </DialogTrigger>
            <DialogContent className="bg-white sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>B: {_poolAssetB.symbol} {_poolAssetB.id}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                  <a href={`/dex/index.html?market=${_poolAssetB.symbol}_${_poolAssetB.symbol === "BTS" ? "HONEST.USD" : "BTS"}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:buyAsset", { asset: _poolAssetB.symbol })}
                    </Button>
                  </a>
                  <a href={`/borrow/index.html?tab=searchOffers&searchTab=borrow&searchText=${_poolAssetB.symbol}`}>
                    <Button variant="outline" className="w-full">
                      {t("PoolTracker:borrowAsset", { asset: _poolAssetB.symbol })}
                    </Button>
                  </a>
                  {
                    smartcoinSymbols.includes(_poolAssetB.symbol)
                      ? <a href={`/smartcoin/index.html?id=${_poolAssetB.id}`}>
                          <Button variant="outline" className="w-full">
                            {t("PoolTracker:createDebt")}
                          </Button>
                        </a>
                      : null
                  }
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="ml-1 text-center">
          <span className="grid grid-cols-1">
            <span className="m-4">
              ${_assetAPrice}
            </span>
            <span className="m-4">
              ${_assetBPrice}
            </span>
          </span>
        </div>
        <div className="ml-1 border-l border-gray-300 flex items-center justify-center">
          {humanReadableFloat(_psaDD.current_supply, _currentPSA.precision)}
        </div>
        <div className="ml-1 border-l border-gray-300 flex items-center justify-center">
          {
            _psaBalance && _psaBalance.amount
              ? <>
                  {humanReadableFloat(_psaBalance.amount, _currentPSA.precision)}<br/>
                  {(poolOwnershipPercentage * 100).toFixed(2)}%
                </>
              : <>0<br/>0%</>
          }
        </div>
        <div className="ml-2 border-l border-gray-300 flex items-center justify-center">
          {
            _poolAssetA.id === "1.3.0"
              ? <>
                🌐 {_amountA}<br/>
                📊 {(_amountA * poolOwnershipPercentage).toFixed(5)}
              </>
              : null
          }
          {
            _poolAssetB.id === "1.3.0"
              ? <>
                🌐 {_amountB}<br/>
                📊 {(_amountB * poolOwnershipPercentage).toFixed(5)}
              </>
              : null
          }
        </div>
        <div className="ml-2 text-center flex items-center justify-center">
          {
            _poolAssetA.id === "1.3.6301"
              ? <>
              🌐 {_amountA.toFixed(5)}<br/>
              📊 {(_amountA * poolOwnershipPercentage).toFixed(5)}
            </>
              : null
          }
          {
            _poolAssetB.id === "1.3.6301"
              ? <>
                🌐 {_amountB.toFixed(5)}<br/>
                📊 {(_amountB * poolOwnershipPercentage).toFixed(5)}
              </>
              : null
          }
        </div>
        <div className="ml-2 text-center flex items-center justify-center">
          {
            _poolAssetA.id === "1.3.5649"
              ? <>
                🌐 {_amountA}<br/>
                📊 {(_amountA * poolOwnershipPercentage).toFixed(4)}
              </>
              : null
          }
          {
            _poolAssetB.id === "1.3.5649"
              ? <>
                🌐 {_amountB}<br/>
                📊 {(_amountB * poolOwnershipPercentage).toFixed(4)}
              </>
              : null
          }
        </div>
        <div className="ml-2 text-center flex items-center justify-center">
          {
            _poolAssetA.id === "1.3.5650"
              ? <>
                🌐 {_amountA}<br/>
                📊 {(_amountA * poolOwnershipPercentage).toFixed(8)}
              </>
              : null
          }
          {
            _poolAssetB.id === "1.3.5650"
              ? <>
                🌐 {_amountB}<br/>
                📊 {(_amountB * poolOwnershipPercentage).toFixed(8)}
              </>
              : null
          }
        </div>
        <div className="ml-2 text-center flex items-center justify-center">
          {
            _poolAssetA.id === "1.3.5651"
              ? <>
                🌐 {_amountA}<br/>
                📊 {(_amountA * poolOwnershipPercentage).toFixed(8)}
              </>
              : null
          }
          {
            _poolAssetB.id === "1.3.5651"
              ? <>
                🌐 {_amountB}<br/>
                📊 {(_amountB * poolOwnershipPercentage).toFixed(8)}
              </>
              : null
          }
        </div>
        <div className="ml-3 border-l border-gray-300 mt-3 ml-1">
          A: {_24hVolumeA}<br/>
          B: {_24hVolumeB}<br/>
          <Separator />
          {t("PoolTracker:fees")}:<br/>
          A: {convertToSatoshis(_24hFeeA)}<br/>
          B: {convertToSatoshis(_24hFeeB)}
        </div>
        <div className="ml-3">
          💱 {res.taker_fee_percent / 100} %<br/>
          💸 {res.withdrawal_fee_percent / 100} %<br/>
          <Separator />
          A: {
            _psaBalance && _psaBalance.amount
              ? (((_24hFeeA / _amountA) * 100) * 30).toFixed(3)
              : "0.00"
          } % ~30d<br/>
          B: {
            _psaBalance && _psaBalance.amount
              ? (((_24hFeeB / _amountB) * 100) * 30).toFixed(3)
              : "0.00"
          } % ~30d<br/>
          A: {
            _psaBalance && _psaBalance.amount
              ? (((_24hFeeA / _amountA) * 100) * 365).toFixed(3)
              : "0.00"
          } % ~1yr<br/>
          B: {
            _psaBalance && _psaBalance.amount
              ? (((_24hFeeB / _amountB) * 100) * 365).toFixed(3)
              : "0.00"
          } % ~1yr
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto mt-5 mb-5">
        <div className="grid grid-cols-1 gap-3">
          <Card className="p-2">
            <CardHeader>
              <CardTitle>{t("PoolTracker:title")}</CardTitle>
              <CardDescription>{t("PoolTracker:description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`grid grid-cols-${swappableAssets.length + 7} text-xs`}>
                <div className="text-center">{t("PoolTracker:pool")}</div>
                <div className="text-center">{t("PoolTracker:assetPair")}</div>
                <div className="text-center">{t("PoolTracker:value")}</div>
                <div className="text-center">{t("PoolTracker:poolTotal")}</div>
                <div className="text-center">{t("PoolTracker:balance")}</div>
                {
                  swappableAssets && swappableAssets.length
                    ? swappableAssets.map((x) => (
                        <div
                          key={`swappable${x.id.replaceAll(".", "_")}`}
                          className="text-center"
                        >
                          {x.symbol}
                        </div>
                      ))
                    : <div className="col-span-5"></div>
                }
                <div>{t("PoolTracker:24hVolume")}</div>
                <div>{t("PoolTracker:fees")}</div>
              </div>
              <List
                height={500}
                itemCount={10}
                itemSize={110}
                className="w-full"
              >
                {featuredPoolRow}
              </List>
              <div className="grid grid-cols-12 text-xs">
                <div className="col-span-4"></div>
                <div className="col-span-6 text-center border border-gray-300">
                  <div className="grid grid-cols-6">
                    <div></div>
                    <div>
                      <b>{t("PoolTracker:inPool")}</b><br/>
                      {stakedBTS}<br/>
                      ${(stakedBTS * btsPrice).toFixed(4)}
                    </div>
                    <div>
                      <b>{t("PoolTracker:inPool")}</b><br/>
                      {stakedHonestMoney}<br/>
                      ${
                        honestMoneyPrice && honestMoneyPrice.latest
                          ? (stakedHonestMoney * honestMoneyPrice.latest * btsPrice).toFixed(4)
                          : 0
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:inPool")}</b>
                      <br/>
                      <br/>
                      ${stakedHonestUSD}
                    </div>
                    <div>
                      <b>{t("PoolTracker:inPool")}</b><br/>
                      {stakedHonestBTC}<br/>
                      ${
                        honestBTCPrice
                          ? (stakedHonestBTC * honestBTCPrice).toFixed(4)
                          : 0
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:inPool")}</b><br/>
                      {stakedHonestXAU}<br/>
                      ${
                        honestXAUPrice
                          ? (stakedHonestXAU * honestXAUPrice).toFixed(4)
                          : 0
                      }
                    </div>
                  </div>
                  <div className="grid grid-cols-6 mt-2">
                    <div></div>
                    <div>
                      <b>{t("PoolTracker:liquid")}</b><br/>
                      {
                        balances && balances.balance0
                          ? humanReadableFloat(balances.balance0.amount, 5)
                          : 0
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:liquid")}</b><br/>
                      {
                        balances && balances.balance6301
                          ? humanReadableFloat(balances.balance6301.amount, 8)
                          : 0
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:liquid")}</b><br/>
                      {
                        balances && balances.balance5649
                          ? humanReadableFloat(balances.balance5649.amount, 4)
                          : 0
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:liquid")}</b><br/>
                      {
                        balances && balances.balance5650
                          ? humanReadableFloat(balances.balance5650.amount, 8)
                          : 0
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:liquid")}</b><br/>
                      {
                        balances && balances.balance5651
                          ? humanReadableFloat(balances.balance5651.amount, 8)
                          : 0
                      }
                    </div>
                  </div>
                  <div className="grid grid-cols-6 mt-3">
                    <div></div>
                    <div className="col-span-2"></div>
                    <div>
                      <b>{t("PoolTracker:debt")}</b><br/>
                      {
                        callOrdersHonestUSD
                          ? humanReadableFloat(callOrdersHonestUSD.debt, 4)
                          : null
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:debt")}</b><br/>
                      {
                        callOrdersHonestBTC
                          ? humanReadableFloat(callOrdersHonestBTC.debt, 8)
                          : null
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:debt")}</b><br/>
                      {
                        callOrdersHonestXAU
                          ? humanReadableFloat(callOrdersHonestXAU.debt, 8)
                          : null
                      }
                    </div>
                  </div>
                  <div className="grid grid-cols-6 mt-2">
                    <div></div>
                    <div>
                      <b>{t("PoolTracker:totalCollateral")}</b><br/>
                      <b>{btsTotalCollateral}</b><br/>BTS (1.3.0)
                    </div>
                    <div></div>
                    <div>
                      <b>{t("PoolTracker:totalCollateral")}</b><br/>
                      {
                        callOrdersHonestUSD
                          ? humanReadableFloat(callOrdersHonestUSD.collateral, 5)
                          : null
                      }<br/>
                      {
                        callOrdersHonestUSD && honestUSDPrice && callOrdersHonestUSD.collateral && callOrdersHonestUSD.debt
                          ? (humanReadableFloat(callOrdersHonestUSD.collateral, 5) / (humanReadableFloat(callOrdersHonestUSD.debt, 4) * honestUSDPrice)).toFixed(3)
                          : null
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:totalCollateral")}</b><br/>
                      {
                        callOrdersHonestBTC
                          ? humanReadableFloat(callOrdersHonestBTC.collateral, 5)
                          : null
                      }<br/>
                      {
                        callOrdersHonestBTC && honestBTCPrice && callOrdersHonestBTC.collateral && callOrdersHonestBTC.debt
                          ? (humanReadableFloat(callOrdersHonestBTC.collateral, 5) / (humanReadableFloat(callOrdersHonestBTC.debt, 8) * honestBTCSettlementPrice)).toFixed(3)
                          : null
                      }
                    </div>
                    <div>
                      <b>{t("PoolTracker:totalCollateral")}</b><br/>
                      {
                        callOrdersHonestXAU
                          ? humanReadableFloat(callOrdersHonestXAU.collateral, 5)
                          : null
                      }<br/>
                      {
                        callOrdersHonestXAU && honestXAUPrice
                          ? (humanReadableFloat(callOrdersHonestXAU.collateral, 5) / (humanReadableFloat(callOrdersHonestXAU.debt, 8) * honestXAUSettlementPrice)).toFixed(3)
                          : null
                      }
                    </div>
                  </div>
                  <div className="grid grid-cols-6 mt-3">
                    <div className="mt-4">
                      {t("PoolTracker:total")}<br/>
                      {t("PoolTracker:circulating")}<br/>
                      {t("PoolTracker:supplyPercent")}
                    </div>
                    <div>
                      <b>{t("PoolTracker:total")}</b><br/>
                      <b>{totalBTS}</b>
                      <br/>
                      {
                        dynamicData
                          ? humanReadableFloat(dynamicData.BTS.current_supply, 5)
                          : null
                      }<br/>
                      <b>
                        {
                          dynamicData
                            ? ((totalBTS / humanReadableFloat(dynamicData.BTS.current_supply, 5)) * 100).toFixed(3)
                            : null
                        }
                      </b>%
                    </div>
                    <div>
                      <b>{t("PoolTracker:total")}</b><br/>
                      <b>{totalHonestMoney}</b><br/>
                      {
                        dynamicData
                          ? humanReadableFloat(dynamicData.HonestMoney.current_supply, 8)
                          : null
                      }<br/>
                      <b>
                        {
                          dynamicData
                            ? ((totalHonestMoney / humanReadableFloat(dynamicData.HonestMoney.current_supply, 8)) * 100).toFixed(3)
                            : null
                        }
                      </b>%
                    </div>
                    <div>
                      <b>{t("PoolTracker:total")}</b><br/>
                      <b>{totalHonestUSD}</b><br/>
                      {
                        dynamicData
                          ? humanReadableFloat(dynamicData.HonestUSD.current_supply, 4)
                          : null
                      }<br/>
                      <b>
                        {
                          dynamicData
                            ? ((totalHonestUSD / humanReadableFloat(dynamicData.HonestUSD.current_supply, 4)) * 100).toFixed(3)
                            : null
                        }
                      </b>%
                    </div>
                    <div>
                      <b>{t("PoolTracker:total")}</b><br/>
                      <b>{totalHonestBTC}</b><br/>
                      {
                        dynamicData
                          ? humanReadableFloat(dynamicData.HonestBTC.current_supply, 8)
                          : null
                      }<br/>
                      <b>
                        {
                          dynamicData
                            ? ((totalHonestBTC / humanReadableFloat(dynamicData.HonestBTC.current_supply, 8)) * 100).toFixed(3)
                            : null
                        }
                      </b>%
                    </div>
                    <div>
                      <b>{t("PoolTracker:total")}</b><br/>
                      <b>{totalHonestXAU}</b><br/>
                      {
                        dynamicData
                          ? humanReadableFloat(dynamicData.HonestXAU.current_supply, 8)
                          : null
                      }<br/>
                      <b>
                        {
                          dynamicData
                            ? ((totalHonestXAU / humanReadableFloat(dynamicData.HonestXAU.current_supply, 8)) * 100).toFixed(3)
                            : null
                        }
                      </b>%
                    </div>
                  </div>
                  <div className="grid grid-cols-6">
                    <div>
                      <span className="text-right"><b>USD</b></span><br/>
                    </div>
                    <div>
                      <b>
                        ${(totalBTS * btsPrice).toFixed(4)}
                      </b>
                    </div>
                    <div>
                      <b>
                        ${
                          honestMoneyPrice && honestMoneyPrice.latest && btsPrice
                            ? (totalHonestMoney * honestMoneyPrice.latest * btsPrice).toFixed(4)
                            : 0
                        }
                      </b>
                    </div>
                    <div>
                      <b>
                        ${(totalHonestUSD).toFixed(4)}
                      </b>
                    </div>
                    <div>
                      <b>
                        ${(totalHonestBTC * honestBTCPrice).toFixed(4)}
                      </b>
                    </div>
                    <div>
                      <b>
                        ${(totalHonestXAU * honestXAUPrice).toFixed(4)}
                      </b>
                    </div>
                  </div>
                  <div className="grid grid-cols-6">
                    <div>
                      <span className="text-right"><b>{t("PoolTracker:total")}</b></span>
                    </div>
                    <div className="col-span-1">
                      ${/*finalUSD*/}
                    </div>
                    <div className="col-span-4"></div>
                  </div>
                </div>
                <div className="col-span-2"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </>
  );
}
