/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../liteReader/entry/src/main/js/default/pages/index/index.hml?entry":
/*!******************************************************************************************!*\
  !*** ../../../../../../liteReader/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/json.js!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/json.js!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/script.js!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.css ***!
  \*****************************************************************************************************************/
/***/ (function(module) {

module.exports = {"classSelectors":{"container":{"flexDirection":"column","justifyContent":"center","alignItems":"center","width":"100%","height":"100%","backgroundColor":0},"title":{"fontSize":24,"color":16777215,"textAlign":"center","marginTop":30,"height":40},"empty-box":{"width":"100%","height":260,"justifyContent":"center","alignItems":"center"},"empty-tip":{"fontSize":18,"color":9079434,"textAlign":"center","paddingTop":0,"paddingRight":20,"paddingBottom":0,"paddingLeft":20},"book-list":{"width":"100%","height":300},"book-item":{"width":"100%","height":70,"justifyContent":"center","alignItems":"center"},"book-name":{"fontSize":22,"color":15066597}}}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.hml":
/*!********************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.hml ***!
  \********************************************************************************************************************/
/***/ (function(module) {

module.exports = function (vm) { var _vm = vm || this; return _c('div', {'staticClass' : ["container"]} , [_c('text', {'attrs' : {'value' : "我的书架"},'staticClass' : ["title"]} ),_i((function () {return _vm.fileList.length===0}),function(){return _c('div', {'staticClass' : ["empty-box"]} , [_c('text', {'attrs' : {'value' : "暂无本地小说，请先导入"},'staticClass' : ["empty-tip"]} )] )}),_i((function () {return !(_vm.fileList.length===0)}),function(){return _c('list', {'staticClass' : ["book-list"]} , [_l((function () {return _vm.fileList}),function($item,$idx){return _c('list-item', {'staticClass' : ["book-item"],'onBubbleEvents' : {'click' : function (evt) {_vm.openBook($item,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return $item}},'staticClass' : ["book-name"]} )] )})] )})] ) }

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../liteReader/entry/src/main/js/default/pages/index/index.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _system = _interopRequireDefault(requireModule("@system.file"));
var _system2 = _interopRequireDefault(requireModule("@system.router"));
var _default = exports.default = {
  data: {
    fileList: []
  },
  onInit: function onInit() {
    this.scanLocalFiles();
  },
  scanLocalFiles: function scanLocalFiles() {
    var that = this;
    console.info('=== [小说阅读器] 开始扫描本地文件 ===');
    try {
      _system["default"].list({
        uri: 'internal://app',
        success: function success(data) {
          var sourceList = [];
          if (data && Array.isArray(data.fileList)) {
            sourceList = data.fileList;
          } else if (Array.isArray(data)) {
            sourceList = data;
          }
          var txtFiles = [];
          for (var i = 0; i < sourceList.length; i++) {
            var item = sourceList[i];
            var fileName = "";
            if (typeof item === 'string') {
              fileName = item;
            } else if (item && (0, _typeof2["default"])(item) === 'object') {
              if (item.name) {
                fileName = item.name;
              } else if (item.uri) {
                var fullPath = item.uri;
                var lastSlash = fullPath.lastIndexOf('/');
                var lastBackSlash = fullPath.lastIndexOf('\\');
                var maxIdx = lastSlash > lastBackSlash ? lastSlash : lastBackSlash;
                if (maxIdx !== -1) {
                  fileName = fullPath.substring(maxIdx + 1);
                } else {
                  fileName = fullPath;
                }
              }
            }
            if (fileName && fileName.length > 4) {
              var idx = fileName.toLowerCase().indexOf('.txt');
              if (idx !== -1 && idx === fileName.length - 4) {
                console.info('【成功匹配】: ' + fileName);
                txtFiles.push(fileName);
              }
            }
          }
          that.fileList = txtFiles;
          console.info('=== [小说阅读器] 最终过滤出的数量: ' + txtFiles.length);
        },
        fail: function fail(err, code) {
          console.error('扫描失败，代码: ' + code);
        }
      });
    } catch (e) {
      console.error('运行时异常: ' + e.message);
    }
  },
  openBook: function openBook(fileName) {
    _system2["default"].replace({
      uri: 'pages/read/read',
      params: {
        bookName: fileName
      }
    });
  }
};

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports.default = module.exports;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports.default = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports.default = module.exports;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../liteReader/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;