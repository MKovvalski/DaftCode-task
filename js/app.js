/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);


//imports



document.addEventListener("DOMContentLoaded", () => {});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve './images/jpg-files/bg_image.jpg' in '/Users/Coding/Desktop/DaftCode-task/src'\n    at factoryCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/webpack/lib/Compilation.js:276:40)\n    at factory (/Users/Coding/Desktop/DaftCode-task/node_modules/webpack/lib/NormalModuleFactory.js:237:20)\n    at resolver (/Users/Coding/Desktop/DaftCode-task/node_modules/webpack/lib/NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (/Users/Coding/Desktop/DaftCode-task/node_modules/webpack/lib/NormalModuleFactory.js:127:20)\n    at /Users/Coding/Desktop/DaftCode-task/node_modules/async/dist/async.js:3874:9\n    at /Users/Coding/Desktop/DaftCode-task/node_modules/async/dist/async.js:473:16\n    at iteratorCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/async/dist/async.js:1048:13)\n    at /Users/Coding/Desktop/DaftCode-task/node_modules/async/dist/async.js:958:16\n    at /Users/Coding/Desktop/DaftCode-task/node_modules/async/dist/async.js:3871:13\n    at resolvers.normal.resolve (/Users/Coding/Desktop/DaftCode-task/node_modules/webpack/lib/NormalModuleFactory.js:119:22)\n    at onError (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:65:10)\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/Coding/Desktop/DaftCode-task/node_modules/tapable/lib/Tapable.js:252:11)\n    at /Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/Coding/Desktop/DaftCode-task/node_modules/tapable/lib/Tapable.js:252:11)\n    at innerCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:144:11)\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/Coding/Desktop/DaftCode-task/node_modules/tapable/lib/Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/Resolver.js:168:10)\n    at loggingCallbackWrapper (/Users/Coding/Desktop/DaftCode-task/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/Coding/Desktop/DaftCode-task/node_modules/tapable/lib/Tapable.js:252:11)");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map