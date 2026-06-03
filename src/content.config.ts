import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

import bts_assetIssuers from "@/data/bitshares/assetIssuers.json";
import test_assetIssuers from "@/data/bitshares_testnet/assetIssuers.json";

const feeSchema = z.any();

const btsFeeSchedule = defineCollection({
  loader: file("./src/data/bitshares/fees.json", {
    parser: (text) => {
      try {
        const data = JSON.parse(text);
        const preprocessedData = data.map((x: any) => {
          return {
            id: x[0],
            data: x[1],
          };
        });
        console.log(
          "Successfully parsed and preprocessed fees:",
          preprocessedData.length,
        );
        return preprocessedData;
      } catch (error) {
        console.error("Error parsing JSON from fees.json:", error);
        throw error;
      }
    },
  }),
  schema: feeSchema,
});

const testFeeSchedule = defineCollection({
  loader: file("./src/data/bitshares_testnet/fees.json", {
    parser: (text) => {
      try {
        const data = JSON.parse(text);
        const preprocessedData = data.map((x: any) => {
          return {
            id: x[0],
            data: x[1],
          };
        });
        console.log(
          "Successfully parsed and preprocessed fees:",
          preprocessedData.length,
        );
        return preprocessedData;
      } catch (error) {
        console.error("Error parsing JSON from fees.json:", error);
        throw error;
      }
    },
  }),
  schema: feeSchema,
});

const minBitassetSchema = z.object({
  id: z.string(),
  assetID: z.string(),
  issuer: z.object({
    id: z.string(),
    ltm: z.boolean(),
    name: z.string(),
  }),
  feeds: z.array(z.unknown()), // Assuming feeds is an array of unknown objects
  collateral: z.string(),
  mcr: z.number(),
  mssr: z.number(),
  icr: z.number(),
});

const btsMinBitassets = defineCollection({
  loader: file("./src/data/bitshares/minBitassetData.json"),
  schema: minBitassetSchema,
});

const testMinBitassets = defineCollection({
  loader: file("./src/data/bitshares_testnet/minBitassetData.json"),
  schema: minBitassetSchema,
});

const assetSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  precision: z.number(),
  issuer: z.string(),
  market_fee_percent: z.number(),
  max_market_fee: z.union([z.number(), z.string()]),
  max_supply: z.union([z.number(), z.string()]),
  bitasset_data_id: z.string().optional(),
});

const btsAllAssets = defineCollection({
  loader: file("./src/data/bitshares/allAssets.json", {
    parser: (text) => {
      try {
        const assets = JSON.parse(text);
        console.log("Successfully parsed assets:", assets.length);
        return assets;
      } catch (error) {
        console.error("Error parsing JSON from allAssets.json:", error);
        throw error;
      }
    },
  }),
  schema: assetSchema,
});

const testAllAssets = defineCollection({
  loader: file("./src/data/bitshares_testnet/allAssets.json", {
    parser: (text) => {
      try {
        const assets = JSON.parse(text);
        console.log("Successfully parsed assets:", assets.length);
        return assets;
      } catch (error) {
        console.error("Error parsing JSON from allAssets.json:", error);
        throw error;
      }
    },
  }),
  schema: assetSchema,
});

const marketDataSchema = z.object({
  id: z.string(),
  s: z.string(),
  u: z.string(),
  p: z.number(),
});

const compressMarketData = (assets: any, issuers: any) => {
  return assets.map((asset: any) => {
    const thisIssuer = issuers.find(
      (issuer: any) => issuer.id === asset.issuer,
    );
    const issuerString = `${thisIssuer?.name ?? "???"} (${asset.issuer}) ${
      thisIssuer?.ltm ? "(LTM)" : ""
    }`;
    return {
      id: asset.id,
      s: asset.symbol,
      u: issuerString,
      p: asset.precision,
    };
  });
};

const btsMarketData = defineCollection({
  loader: file("./src/data/bitshares/allAssets.json", {
    parser: (text) => {
      try {
        const assets = JSON.parse(text);
        console.log(
          "Successfully parsed assets for btsMarketData:",
          assets.length,
        );
        return compressMarketData(assets, bts_assetIssuers);
      } catch (error) {
        console.error(
          "Error parsing JSON from allAssets.json for btsMarketData:",
          error,
        );
        throw error;
      }
    },
  }),
  schema: marketDataSchema,
});

const testMarketData = defineCollection({
  loader: file("./src/data/bitshares_testnet/allAssets.json", {
    parser: (text) => {
      try {
        const assets = JSON.parse(text);
        console.log(
          "Successfully parsed assets for testMarketData:",
          assets.length,
        );
        return compressMarketData(assets, test_assetIssuers);
      } catch (error) {
        console.error(
          "Error parsing JSON from allAssets.json for testMarketData:",
          error,
        );
        throw error;
      }
    },
  }),
  schema: marketDataSchema,
});

const minAssetSchema = z.object({
  id: z.string(),
  s: z.string(),
  p: z.number(),
  i: z.string(),
  mfp: z.number(),
  mmf: z.union([z.number(), z.string()]),
  ms: z.union([z.number(), z.string()]),
  bdi: z.string().optional(),
});

const btsMinAssets = defineCollection({
  loader: file("./src/data/bitshares/minAssets.json"),
  schema: minAssetSchema,
});

const testMinAssets = defineCollection({
  loader: file("./src/data/bitshares_testnet/minAssets.json"),
  schema: minAssetSchema,
});

const dynamicDataSchema = z.object({
  id: z.string(),
  current_supply: z.union([z.number(), z.string()]),
  confidential_supply: z.union([z.number(), z.string()]),
  accumulated_fees: z.union([z.number(), z.string()]),
  accumulated_collateral_fees: z.union([z.number(), z.string()]),
  fee_pool: z.union([z.number(), z.string()]),
});

const btsAllDynamicData = defineCollection({
  loader: file("./src/data/bitshares/dynamicData.json"),
  schema: dynamicDataSchema,
});

const testAllDynamicData = defineCollection({
  loader: file("./src/data/bitshares_testnet/dynamicData.json"),
  schema: dynamicDataSchema,
});

const assetIssuerSchema = z.object({
  id: z.string(),
  ltm: z.boolean(),
  name: z.string(),
});

const btsAssetIssuers = defineCollection({
  loader: file("./src/data/bitshares/assetIssuers.json"),
  schema: assetIssuerSchema,
});

const testAssetIssuers = defineCollection({
  loader: file("./src/data/bitshares_testnet/assetIssuers.json"),
  schema: assetIssuerSchema,
});

export const collections = {
  btsFeeSchedule,
  testFeeSchedule,
  btsMinBitassets,
  testMinBitassets,
  btsAllAssets,
  testAllAssets,
  btsMarketData,
  testMarketData,
  btsMinAssets,
  testMinAssets,
  btsAllDynamicData,
  testAllDynamicData,
  btsAssetIssuers,
  testAssetIssuers
};
