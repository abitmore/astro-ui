/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/applicationMenu.js":
/*!************************************!*\
  !*** ./src/lib/applicationMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApplicationMenu: () => (/* binding */ initApplicationMenu)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);


/**
 * For configuring the electron window menu
 */
function initApplicationMenu(mainWindow) {
  const template = [
    {
      label: "View",
      submenu: [
        {
          label: "Send to tray",
          click() {
            mainWindow.minimize();
          },
        },
        { label: "Reload", role: "reload" },
        { label: "Dev tools", role: "toggleDevTools" },
      ],
    },
  ];
  const menu = electron__WEBPACK_IMPORTED_MODULE_0__.Menu.buildFromTemplate(template);
  electron__WEBPACK_IMPORTED_MODULE_0__.Menu.setApplicationMenu(menu);
}


/***/ }),

/***/ "./src/lib/deeplink.js":
/*!*****************************!*\
  !*** ./src/lib/deeplink.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDeepLink: () => (/* binding */ generateDeepLink)
/* harmony export */ });
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitsharesjs-ws */ "bitsharesjs-ws");
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bitsharesjs */ "bitsharesjs");
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);




const chains = {
  bitshares: {
    nodeList: [
      {
        url: "wss://node.xbts.io/ws",
      },
      {
        url: "wss://api.bts.mobi/ws",
      },
      {
        url: "wss://btsws.roelandp.nl/ws",
      },
    ],
  },
  bitshares_testnet: {
    nodeList: [
      {
        url: "wss://testnet.dex.trading/",
      },
      {
        url: "wss://testnet.xbts.io/ws",
      },
      {
        url: "wss://api-testnet.61bts.com/ws",
      },
    ],
  },
};

async function generateDeepLink(chain, nodeURL, opTypes, operations) {
  return new Promise(async (resolve, reject) => {
    const _node =
      nodeURL && nodeURL.length ? nodeURL : chains[chain].nodeList[0].url;

    try {
      await bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis.instance(
        _node,
        true,
        4000,
        { enableCrypto: false, enableOrders: true },
        (error) => console.log({ error })
      ).init_promise;
    } catch (error) {
      console.log({ error, location: "api instance failed" });
      return reject(error);
    }

    let includesMemos = false;
    const tr = new bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.TransactionBuilder();
    for (let i = 0; i < operations.length; i++) {
      // Convert the memo message to bytes
      if (operations[i].memo && operations[i].memo.message) {
        let encodedMessage;
        try {
          encodedMessage = Buffer.from(operations[i].memo.message, "utf-8");
        } catch (error) {
          console.log({ error, location: "encode memo failed" });
          return reject(error);
        }
        includesMemos = true;
        operations[i].memo.message = encodedMessage;
      }
      tr.add_type_operation(opTypes[i], operations[i]);
    }

    try {
      await tr.update_head_block();
    } catch (error) {
      console.log({ error, location: "update head block failed" });
      reject(error);
      return;
    }

    try {
      await tr.set_required_fees();
    } catch (error) {
      console.log({ error, location: "set required fees failed" });
      reject(error);
      return;
    }

    try {
      tr.set_expire_seconds(7200);
    } catch (error) {
      console.log({ error, location: "set expire seconds failed" });
      reject(error);
      return;
    }

    try {
      tr.finalize();
    } catch (error) {
      console.log({ error, location: "finalize failed" });
      reject(error);
      return;
    }

    let id;
    try {
      id = await (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
    } catch (error) {
      console.log({ error, location: "uuid generation failed" });
      reject(error);
      return;
    }

    const request = {
      type: "api",
      id: id,
      payload: {
        method: "injectedCall",
        params: ["signAndBroadcast", JSON.stringify(tr.toObject()), []],
        appName: "Bitshares Astro UI",
        chain: chain === "bitshares" ? "BTS" : "BTS_TEST",
        browser: "web browser",
        origin: "localhost",
        memo: includesMemos,
      },
    };

    let encodedPayload;
    try {
      encodedPayload = encodeURIComponent(JSON.stringify(request));
    } catch (error) {
      console.log({ error, location: "encode payload failed" });
      reject(error);
      return;
    }

    resolve(encodedPayload);
  });
}




/***/ }),

/***/ "./src/lib/qr.js":
/*!***********************!*\
  !*** ./src/lib/qr.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQRContents: () => (/* binding */ generateQRContents)
/* harmony export */ });
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitsharesjs-ws */ "bitsharesjs-ws");
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bitsharesjs */ "bitsharesjs");
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Generate a transaction object suitable for QR encoding.
 * @param {"bitshares"|"bitshares_testnet"} chain
 * @param {string} nodeURL - WebSocket endpoint to use; may be undefined/empty
 * @param {string[]} opTypes - Operation type strings (e.g., ["transfer"]) aligned with operations
 * @param {object[]} operations - Operation payload objects
 * @returns {Promise<object>} Transaction object
 */
async function generateQRContents(chain, nodeURL, opTypes, operations) {
  return new Promise(async (resolve, reject) => {
    // If nodeURL is falsy, we'll pick a sensible default by chain
    const defaultNodes = {
      bitshares: [
        "wss://node.xbts.io/ws",
        "wss://api.bts.mobi/ws",
        "wss://btsws.roelandp.nl/ws",
      ],
      bitshares_testnet: [
        "wss://testnet.dex.trading/",
        "wss://testnet.xbts.io/ws",
        "wss://api-testnet.61bts.com/ws",
      ],
    };

    const _node =
      nodeURL && nodeURL.length ? nodeURL : defaultNodes[chain]?.[0];

    try {
      await bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis.instance(
        _node,
        true,
        4000,
        { enableCrypto: false, enableOrders: true },
        (error) => console.log({ error })
      ).init_promise;
    } catch (error) {
      console.log({ error, location: "api instance failed (QR)" });
      return reject(error);
    }

    const tr = new bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.TransactionBuilder();

    // Add all operations (encode memo message if string)
    for (let i = 0; i < operations.length; i++) {
      const op = { ...operations[i] };
      if (op.memo && typeof op.memo.message === "string") {
        try {
          op.memo.message = Buffer.from(op.memo.message, "utf-8");
        } catch (error) {
          console.log({ error, location: "encode memo failed (QR)" });
          return reject(error);
        }
      }
      tr.add_type_operation(opTypes[i], op);
    }

    try {
      await tr.set_required_fees();
    } catch (error) {
      console.error(error);
      reject(error);
      return;
    }

    try {
      await tr.update_head_block();
    } catch (error) {
      console.error(error);
      reject(error);
      return;
    }

    try {
      await tr.set_expire_seconds(4000);
    } catch (error) {
      console.error(error);
      reject(error);
      return;
    }

    resolve(tr.toObject());
  });
}




/***/ }),

/***/ "bitsharesjs":
/*!******************************!*\
  !*** external "bitsharesjs" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("bitsharesjs");

/***/ }),

/***/ "bitsharesjs-ws":
/*!*********************************!*\
  !*** external "bitsharesjs-ws" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("bitsharesjs-ws");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:perf_hooks":
/*!**********************************!*\
  !*** external "node:perf_hooks" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:perf_hooks");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:url */ "node:url");
/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_net__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:net */ "node:net");
/* harmony import */ var node_net__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_net__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_perf_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:perf_hooks */ "node:perf_hooks");
/* harmony import */ var node_perf_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_perf_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mime-types */ "mime-types");
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bitsharesjs */ "bitsharesjs");
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bitsharesjs-ws */ "bitsharesjs-ws");
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_applicationMenu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/applicationMenu.js */ "./src/lib/applicationMenu.js");
/* harmony import */ var _lib_deeplink_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/deeplink.js */ "./src/lib/deeplink.js");
/* harmony import */ var _lib_qr_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/qr.js */ "./src/lib/qr.js");

















let mainWindow = null;
let tray = null;

electron__WEBPACK_IMPORTED_MODULE_9__.protocol.registerSchemesAsPrivileged([
  {
    scheme: "file",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
    },
  },
]);

const createWindow = async () => {
  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_9__.BrowserWindow({
    minWidth: 540,
    minHeight: 100,
    maximizable: true,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: node_path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, "preload.js"),
    },
    icon: __dirname + "/img/taskbar.png",
  });

  (0,_lib_applicationMenu_js__WEBPACK_IMPORTED_MODULE_10__.initApplicationMenu)(mainWindow);

  // Load the local HTML file using the custom protocol
  mainWindow.loadURL("file://index.html");

  mainWindow.webContents.setWindowOpenHandler(() => {
    return { action: "deny" };
  });

  // Register global shortcut for "Alt + Left Arrow"
  electron__WEBPACK_IMPORTED_MODULE_9__.app.whenReady().then(() => {
    electron__WEBPACK_IMPORTED_MODULE_9__.globalShortcut.register("Alt+Left", () => {
      if (mainWindow && mainWindow.webContents.canGoBack()) {
        mainWindow.webContents.goBack();
      }
    });
  });

  // Unregister shortcut when app is closed
  electron__WEBPACK_IMPORTED_MODULE_9__.app.on("will-quit", () => {
    electron__WEBPACK_IMPORTED_MODULE_9__.globalShortcut.unregister("Alt+Left");
    electron__WEBPACK_IMPORTED_MODULE_9__.globalShortcut.unregisterAll();
  });

  tray = new electron__WEBPACK_IMPORTED_MODULE_9__.Tray(node_path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, "img", "tray.png"));
  const contextMenu = electron__WEBPACK_IMPORTED_MODULE_9__.Menu.buildFromTemplate([
    {
      label: "Show App",
      click: function () {
        mainWindow?.show();
      },
    },
    {
      label: "Quit",
      click: function () {
        tray = null;
        electron__WEBPACK_IMPORTED_MODULE_9__.app.quit();
      },
    },
  ]);

  tray.setToolTip("Bitshares Astro UI");

  tray.on("right-click", (event, bounds) => {
    tray?.popUpContextMenu(contextMenu);
  });

  let continueFetching = false;
  let latestBlockNumber = 0;
  let isFetching = false;
  let apisInstance = null;
  let fetchTimeout = null;

  const fetchBlocks = async () => {
    isFetching = true;
    while (continueFetching) {
      let currentBlock;
      try {
        currentBlock = await apisInstance
          .db_api()
          .exec("get_block", [latestBlockNumber]);
      } catch (error) {
        console.log({ error });
        continueFetching = false;
        isFetching = false;
        break;
      }
      mainWindow.webContents.send("blockResponse", {
        ...currentBlock,
        block: latestBlockNumber,
      });
      latestBlockNumber += 1;

      await new Promise((resolve) => {
        fetchTimeout = setTimeout(resolve, 4200);
      });
    }

    if (!continueFetching) {
      apisInstance.close();
      apisInstance = null;
    }
    isFetching = false;
  };

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.on("requestBlocks", async (event, arg) => {
    const { url } = arg;

    // Stop any ongoing fetching process
    if (isFetching) {
      continueFetching = false;
      clearTimeout(fetchTimeout); // Clear the timeout to stop the current fetching process immediately
      await new Promise((resolve) => setTimeout(resolve, 100)); // Short wait to ensure the current fetching process stops
    }

    // Reset state variables
    continueFetching = true;
    isFetching = false;

    // Create a new Apis instance
    try {
      apisInstance = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_8__.Apis.instance(url, true);
    } catch (error) {
      console.log({ error, location: "Apis.instance", url });
      continueFetching = false;
      isFetching = false;
      return;
    }

    try {
      await apisInstance.init_promise;
      console.log("connected to:", apisInstance.chain_id);
    } catch (err) {
      console.log({ err });
      continueFetching = false;
      isFetching = false;
      if (apisInstance) {
        apisInstance.close();
        apisInstance = null;
      }
      return;
    }

    let globalProperties;
    try {
      globalProperties = await apisInstance
        .db_api()
        .exec("get_dynamic_global_properties", []);
    } catch (error) {
      console.log({ error, location: "globalProperties", url });
      continueFetching = false;
      isFetching = false;
      return;
    }

    latestBlockNumber = globalProperties.head_block_number;

    const blockPromises = [];
    for (let i = latestBlockNumber - 1; i > latestBlockNumber - 31; i--) {
      blockPromises.push(apisInstance.db_api().exec("get_block", [i]));
    }

    let lastFewBlocks = [];
    try {
      lastFewBlocks = await Promise.all(blockPromises);
    } catch (error) {
      console.log({ error });
    }

    for (let i = lastFewBlocks.length - 1; i >= 0; i--) {
      mainWindow.webContents.send("blockResponse", {
        ...lastFewBlocks[i],
        block: latestBlockNumber - 1 - i,
      });
    }

    // Start fetching blocks continuously
    fetchBlocks();
  });

  // Handle the user navigating away from the page
  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.on("stopBlocks", () => {
    continueFetching = false;
    clearTimeout(fetchTimeout); // Clear the timeout to stop the current fetching process immediately
    if (apisInstance) {
      apisInstance.close();
      apisInstance = null;
    }
    isFetching = false;
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("genKey", async () => {
    return bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.key.get_random_key().toWif();
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("genAccount", async (event, arg) => {
    const { userID, username, password, method, nodeURL } = arg;

    let apiInstance;
    try {
      apiInstance = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_8__.Apis.instance(nodeURL, true);
    } catch (error) {
      console.log({ error, location: "Apis.instance", nodeURL });
      return;
    }

    try {
      await apiInstance.init_promise;
      console.log("connected to:", apiInstance.chain_id);
    } catch (err) {
      console.log({ err });
      return;
    }

    apiInstance.close();
    apiInstance = null;

    function _generateKeyFromPassword(accountName, role, password) {
      let seed = accountName + role + password;
      let privKey = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.PrivateKey.fromSeed(seed);
      let pubKey = privKey.toPublicKey().toPublicKeyString();
      return { privKey, pubKey };
    }

    if (!userID || !username || !password || !method) {
      console.log(`Missing required parameters for account generation`);
      return { success: false };
    }

    let { privKey: owner_private, pubKey: owner_public } =
      _generateKeyFromPassword(username, "owner", password);

    let { privKey: active_private, pubKey: active_public } =
      _generateKeyFromPassword(username, "active", password);

    let { privKey: memo_private, pubKey: memo_public } =
      _generateKeyFromPassword(username, "memo", password);

    if (method === "ltm") {
      // BeetEOS broadcast by LTM account creating premium account names

      if (!userID) {
        console.log(`User ID is required for this method`);
        return { success: false };
      }

      return {
        fee: {
          amount: 0,
          asset_id: "1.3.0",
        },
        registrar: userID,
        referrer: userID,
        referrer_percent: 100,
        name: username,
        owner: {
          weight_threshold: 1,
          account_auths: [],
          key_auths: [[owner_public, 1]],
          address_auths: [],
        },
        active: {
          weight_threshold: 1,
          account_auths: [],
          key_auths: [[active_public, 1]],
          address_auths: [],
        },
        options: {
          memo_key: memo_public,
          voting_account: "1.2.5", // proxy-to-self
          votes: [],
          num_witness: 0,
          num_committee: 0,
        },
      };
    } else {
      // Creating user with the public account faucet
      return {
        account: {
          name: username,
          owner_key: owner_public,
          active_key: active_public,
          memo_key: memo_public,
          refcode: "1.2.1803677",
          referrer: "1.2.1803677",
        },
      };
    }
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("fetchTopMarkets", async (event, arg) => {
    const { chain } = arg;

    let retrievedData;
    try {
      retrievedData = await fetch(
        chain === "bitshares"
          ? `https://api.bitshares.ws/openexplorer/top_markets?top_n=100`
          : `https://api.testnet.bitshares.ws/openexplorer/top_markets?top_n=50`
      );
    } catch (error) {
      console.log({ error });
    }

    if (!retrievedData || !retrievedData.ok) {
      console.log("Failed to fetch top markets");
      return;
    }

    const topMarkets = await retrievedData.json();
    return topMarkets ?? null;
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("fetchAccountHistory", async (event, arg) => {
    const { chain, accountID } = arg;

    const from = arg.from ?? 0;
    const size = arg.size ?? 100;
    const from_date = arg.from_date ?? "2015-10-10";
    const to_date = arg.to_date ?? "now";
    const sort_by = arg.sort_by ?? "-operation_id_num";
    const type = arg.type ?? "data";
    const agg_field = arg.agg_field ?? "operation_type";

    const url =
      `https://${
        chain === "bitshares" ? "api" : "api.testnet"
      }.bitshares.ws/openexplorer/es/account_history` +
      `?account_id=${accountID}` +
      `&from_=${from}` +
      `&size=${size}` +
      `&from_date=${from_date}` +
      `&to_date=${to_date}` +
      `&sort_by=${sort_by}` +
      `&type=${type}` +
      `&agg_field=${agg_field}`;

    let history;
    try {
      history = await fetch(url, { method: "GET" });
    } catch (error) {
      console.log({ error });
      return null;
    }

    if (!history || !history.ok) {
      console.log("Couldn't fetch account history.");
      return null;
    }

    const accountHistory = await history.json();
    return accountHistory ?? null;
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.on("notify", (event, arg) => {
    const NOTIFICATION_TITLE = "Error!";
    const NOTIFICATION_BODY = arg;

    if ((os__WEBPACK_IMPORTED_MODULE_1___default().platform) === "win32") {
      electron__WEBPACK_IMPORTED_MODULE_9__.app.setAppUserModelId(electron__WEBPACK_IMPORTED_MODULE_9__.app.name);
    }

    function showNotification() {
      new Notification({
        title: NOTIFICATION_TITLE,
        subtitle: "subtitle",
        body: NOTIFICATION_BODY,
        icon: __dirname + "/img/tray.png",
      }).show();
    }

    showNotification();
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("faucetRegistration", async (event, arg) => {
    const { chain, bodyParameters } = arg;

    function createAccountWithPassword(chain, bodyParameters) {
      return new Promise((resolve, reject) => {
        const faucetAddress =
          chain === "bitshares"
            ? "https://faucet.bitshares.eu/onboarding"
            : "https://faucet.testnet.bitshares.eu";

        fetch(faucetAddress + "/api/v1/accounts", {
          method: "post",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: bodyParameters,
        })
          .then((response) => response.json())
          .then((res) => {
            if (!res || (res && res.error)) {
              reject(res.error);
            } else {
              resolve(res);
            }
          })
          .catch(reject);
      });
    }

    try {
      const result = await createAccountWithPassword(chain, bodyParameters);
      return result;
    } catch (error) {
      console.error("Error during faucet registration:", error);
      return { error };
    }
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("calculateOperationFees", async (event, arg) => {
    const { nodeURL, trxJSON } = arg;

    let currentAPI;
    try {
      currentAPI = await bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_8__.Apis.instance(
        nodeURL.url,
        true,
        4000,
        { enableDatabase: true },
        (error) => console.log({ error })
      );
    } catch (error) {
      console.log({ error });
      return;
    }

    currentAPI.init_promise;

    let _op = {
      ...trxJSON,
    };

    delete _op.fee;

    let fee;
    try {
      fee = await currentAPI
        .db_api()
        .exec("get_required_fees", [[[_op]], "1.3.0"]);
    } catch (error) {
      console.log({ error });
    }

    console.log({ fee, nodeURL, _op });

    currentAPI.close();
    currentAPI = null;

    return fee && fee.length ? fee[0].amount : null;
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("generateDeepLink", async (event, arg) => {
    const { usrChain, nodeURL, operationNames, trxJSON } = arg;

    let deeplink;
    try {
      deeplink = await (0,_lib_deeplink_js__WEBPACK_IMPORTED_MODULE_11__.generateDeepLink)(
        usrChain,
        nodeURL,
        operationNames,
        trxJSON
      );
    } catch (error) {
      console.log({ error });
    }

    return deeplink ?? null;
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("generateQRContents", async (event, arg) => {
    const { usrChain, nodeURL, currentNode, operationNames, trxJSON } = arg;

    let qr;
    try {
      qr = await (0,_lib_qr_js__WEBPACK_IMPORTED_MODULE_12__.generateQRContents)(
        usrChain,
        nodeURL || currentNode,
        operationNames,
        trxJSON
      );
    } catch (error) {
      console.log({ error });
    }

    return qr ?? null;
  });

  // Ping handler: perform a TCP connect to the host/port to measure latency using node:net
  // Returns { ok: true, ms: <number> } on success, or { ok: false, error: <string> } on failure
  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.handle("ping", async (event, urlToPing) => {
    if (!urlToPing) return { ok: false, error: "missing_url" };

    let parsed;
    try {
      parsed = new (node_url__WEBPACK_IMPORTED_MODULE_2___default().URL)(urlToPing);
    } catch (err) {
      return { ok: false, error: `invalid_url: ${err && err.message}` };
    }

    // Determine host and port for the TCP connection. For ws/wss default to 80/443.
    const hostname = parsed.hostname;
    let port = parsed.port ? Number(parsed.port) : null;
    if (!port) {
      if (parsed.protocol === "wss:") port = 443;
      else if (parsed.protocol === "ws:") port = 80;
      else if (parsed.protocol === "https:") port = 443;
      else if (parsed.protocol === "http:") port = 80;
      else port = 80;
    }

    const timeoutMs = 5000; // 5s timeout as requested

    return new Promise((resolve) => {
      let settled = false;
      const start = node_perf_hooks__WEBPACK_IMPORTED_MODULE_4__.performance.now();

      let socket;
      try {
        socket = (0,node_net__WEBPACK_IMPORTED_MODULE_3__.createConnection)({ host: hostname, port }, () => {
          if (settled) return;
          settled = true;
          const ms = Math.round(node_perf_hooks__WEBPACK_IMPORTED_MODULE_4__.performance.now() - start);
          try {
            socket.end();
          } catch (e) {}
          resolve({ ok: true, ms });
        });
      } catch (err) {
        if (!settled) {
          settled = true;
          resolve({ ok: false, error: `connect_error: ${err && err.message}` });
        }
        return;
      }

      socket.setTimeout(timeoutMs);

      const cleanup = () => {
        try {
          socket.destroy();
        } catch (e) {}
      };

      socket.on("timeout", () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve({ ok: false, error: "timeout" });
      });

      socket.on("error", (err) => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve({ ok: false, error: `error: ${err && err.message}` });
      });
    });
  });

  const safeDomains = [
    "https://bts.exchange/",
    "https://ex.xbts.io/",
    "https://kibana.bts.mobi/",
    "https://www.electronjs.org/",
    "https://bitshareschain.com/",
    "https://react.dev/",
    "https://github.com/",
    "https://astro.build/",
    "https://www.pinata.cloud/",
    "https://nft.storage/",
    "https://web3.storage/",
    "https://fleek.co/ipfs-gateway/",
    "https://infura.io/product/ipfs",
    "https://landing.storj.io/permanently-pin-with-storj-dcs",
    "https://www.eternum.io/",
    "https://blog.ipfs.io/2021-04-05-storing-nfts-on-ipfs/",
  ];
  electron__WEBPACK_IMPORTED_MODULE_9__.ipcMain.on("openURL", (event, arg) => {
    try {
      const parsedUrl = new (node_url__WEBPACK_IMPORTED_MODULE_2___default().URL)(arg);
      const domain = parsedUrl.hostname;

      const isSafeDomain = safeDomains.some((safeDomain) => {
        const safeDomainHostname = new (node_url__WEBPACK_IMPORTED_MODULE_2___default().URL)(safeDomain).hostname;
        return safeDomainHostname === domain;
      });

      if (isSafeDomain) {
        electron__WEBPACK_IMPORTED_MODULE_9__.shell.openExternal(arg);
      } else {
        console.error(`Rejected opening URL with unsafe domain: ${domain}`);
      }
    } catch (err) {
      console.error(`Failed to open URL: ${err.message}`);
    }
  });

  tray.on("click", () => {
    mainWindow?.setAlwaysOnTop(true);
    mainWindow?.show();
    mainWindow?.focus();
    mainWindow?.setAlwaysOnTop(false);
  });

  tray.on("balloon-click", () => {
    mainWindow?.setAlwaysOnTop(true);
    mainWindow?.show();
    mainWindow?.focus();
    mainWindow?.setAlwaysOnTop(false);
  });
};

electron__WEBPACK_IMPORTED_MODULE_9__.app.disableHardwareAcceleration();

const currentOS = os__WEBPACK_IMPORTED_MODULE_1___default().platform();
if (currentOS === "win32" || currentOS === "linux") {
  // windows + linux setup phase
  const gotTheLock = electron__WEBPACK_IMPORTED_MODULE_9__.app.requestSingleInstanceLock();

  if (!gotTheLock) {
    electron__WEBPACK_IMPORTED_MODULE_9__.app.quit();
  }

  electron__WEBPACK_IMPORTED_MODULE_9__.app
    .whenReady()
    .then(() => {
      electron__WEBPACK_IMPORTED_MODULE_9__.protocol.handle("file", async (req) => {
        const { pathname } = new URL(req.url);
        if (!pathname) {
          return;
        }

        let fullPath =
           true
            ? node_path__WEBPACK_IMPORTED_MODULE_0___default().join("astroDist", pathname)
            : 0;

        if (pathname === "/") {
          fullPath = node_path__WEBPACK_IMPORTED_MODULE_0___default().join(fullPath, "index.html");
        }

        if (fullPath.includes("..") || fullPath.includes("~")) {
          return; // Prevent directory traversal attacks
        }

        let _res;
        try {
          _res = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_5__.readFile)(fullPath);
        } catch (error) {
          console.log({ error });
        }

        const mimeType = mime_types__WEBPACK_IMPORTED_MODULE_6___default().lookup(fullPath) || "application/octet-stream";

        return new Response(_res, {
          headers: { "content-type": mimeType },
        });
      });
    })
    .then(createWindow);
} else {
  electron__WEBPACK_IMPORTED_MODULE_9__.app
    .whenReady()
    .then(() => {
      electron__WEBPACK_IMPORTED_MODULE_9__.protocol.handle("file", async (req) => {
        const { pathname } = new URL(req.url);
        if (!pathname) {
          return;
        }

        let fullPath =
           true
            ? node_path__WEBPACK_IMPORTED_MODULE_0___default().join("astroDist", pathname)
            : 0;

        if (pathname === "/") {
          fullPath = node_path__WEBPACK_IMPORTED_MODULE_0___default().join(fullPath, "index.html");
        }

        if (fullPath.includes("..") || fullPath.includes("~")) {
          return; // Prevent directory traversal attacks
        }

        let _res;
        try {
          _res = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_5__.readFile)(fullPath);
        } catch (error) {
          console.log({ error });
        }

        const mimeType = mime_types__WEBPACK_IMPORTED_MODULE_6___default().lookup(fullPath) || "application/octet-stream";

        return new Response(_res, {
          headers: { "content-type": mimeType },
        });
      });
    })
    .then(createWindow);

  electron__WEBPACK_IMPORTED_MODULE_9__.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      electron__WEBPACK_IMPORTED_MODULE_9__.app.quit();
    }
  });

  electron__WEBPACK_IMPORTED_MODULE_9__.app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

})();

/******/ })()
;
//# sourceMappingURL=background.js.map