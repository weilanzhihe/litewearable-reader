/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../liteReader/entry/src/main/js/default/app.js?entry":
/*!***************************************************************************!*\
  !*** ../../../../../../liteReader/entry/src/main/js/default/app.js?entry ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $app_script$ = __webpack_require__(/*! !!../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/script.js!../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/resource-reference-script.js!../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/manifest-loader.js?path=D:\project\liteReader\entry\src\main\js\default\app.js!./app.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=D:\\project\\liteReader\\entry\\src\\main\\js\\default\\app.js!../../../../../../liteReader/entry/src/main/js/default/app.js")
var options=$app_script$
 if ($app_script$.__esModule) {

        options = $app_script$.default;
 }
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=D:\\project\\liteReader\\entry\\src\\main\\js\\default\\app.js!../../../../../../liteReader/entry/src/main/js/default/app.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=D:\project\liteReader\entry\src\main\js\default\app.js!../../../../../../liteReader/entry/src/main/js/default/app.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = exports.default = {
  onCreate: function onCreate() {
    console.info("Application onCreate");
  },
  onDestroy: function onDestroy() {
    console.info("Application onDestroy");
  }
};
;
(exports["default"] || module.exports).manifest = __webpack_require__(/*! !!../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/manifest-plugin.js!../../../../build/intermediates/js/debug/jsManifest/default/manifest.json */ "./lib/manifest-plugin.js!../../../../../../liteReader/entry/build/intermediates/js/debug/jsManifest/default/manifest.json");

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./lib/manifest-plugin.js!../../../../../../liteReader/entry/build/intermediates/js/debug/jsManifest/default/manifest.json":
/*!*********************************************************************************************************************************!*\
  !*** ./lib/manifest-plugin.js!../../../../../../liteReader/entry/build/intermediates/js/debug/jsManifest/default/manifest.json ***!
  \*********************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"manifest.json":"content"}');

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../liteReader/entry/src/main/js/default/app.js?entry");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;