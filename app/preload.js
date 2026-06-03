/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/*!************************!*\
  !*** ./src/preload.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);


electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld("electron", {
  // MISC
  openURL: async (target) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send("openURL", target), // Links to explorers
  notify: async (msg) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send("notify", msg), // Triggering an electron notification prompt
  registerFaucetAccount: async (args) =>
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("faucetRegistration", args),
  genKey: async () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("genKey"),
  genAccount: async (args) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("genAccount", args),
  // REST queries
  fetchTopMarkets: async (args) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("fetchTopMarkets", args),
  fetchAccountHistory: async (args) =>
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("fetchAccountHistory", args),
  // WS queries
  requestBlocks: async (args) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send("requestBlocks", args),
  onBlockResponse: (func) => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on("blockResponse", (event, data) => {
      func(data);
    });
  },
  stopBlocks: async () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send("stopBlocks", args),
  // API queries
  generateDeepLink: async (args) =>
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("generateDeepLink", args),
  generateQRContents: async (args) =>
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("generateQRContents", args),
  calculateOperationFees: async (args) =>
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("calculateOperationFees", args),
  // Ping a node URL from the main process. Returns an object { ok: boolean, status?: number, error?: string }
  ping: async (url) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke("ping", url),
});

})();

/******/ })()
;
//# sourceMappingURL=preload.js.map