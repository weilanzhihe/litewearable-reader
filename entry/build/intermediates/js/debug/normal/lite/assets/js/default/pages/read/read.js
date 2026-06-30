/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../liteReader/entry/src/main/js/default/pages/read/read.hml?entry":
/*!****************************************************************************************!*\
  !*** ../../../../../../liteReader/entry/src/main/js/default/pages/read/read.hml?entry ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/json.js!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/template.js!./read.hml */ "./lib/json.js!./lib/template.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.hml")
var $app_style$ = __webpack_require__(/*! !!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/json.js!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/style.js!./read.css */ "./lib/json.js!./lib/style.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.css")
var $app_script$ = __webpack_require__(/*! !!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/script.js!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../../../../../../../hsdk/hmscore/3.0.0_7/js/build-tools/ace-loader/lib/resource-reference-script.js!./read.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.css":
/*!***************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.css ***!
  \***************************************************************************************************************/
/***/ (function(module) {

module.exports = {"classSelectors":{"container":{"flexDirection":"column","alignItems":"center","width":"100%","height":"100%","backgroundColor":0},"book-title":{"fontSize":18,"color":9079434,"textAlign":"center","marginTop":20,"height":30,"width":"100%"},"content-box":{"width":"100%","height":280,"paddingTop":10,"paddingRight":35,"paddingBottom":10,"paddingLeft":35,"justifyContent":"center","alignItems":"center"},"content-text":{"fontSize":22,"color":16777215,"textAlign":"center","width":"100%"},"action-box":{"width":"100%","height":60,"justifyContent":"space-around","alignItems":"center","paddingTop":0,"paddingRight":20,"paddingBottom":0,"paddingLeft":20},"btn":{"width":120,"height":40,"backgroundColor":3355443,"color":16777215,"fontSize":18,"borderRadius":10}}}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.hml":
/*!******************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.hml ***!
  \******************************************************************************************************************/
/***/ (function(module) {

module.exports = function (vm) { var _vm = vm || this; return _c('div', {'staticClass' : ["container"],'onBubbleEvents' : {'swipe' : _vm.handleSwipe}} , [_c('text', {'attrs' : {'value' : function () {return (_vm.bookName) + decodeURI('%20(%E7%AC%AC') + (_vm.currentPage) + decodeURI('%E9%A1%B5)')}},'staticClass' : ["book-title"]} ),_c('div', {'staticClass' : ["content-box"]} , [_c('text', {'attrs' : {'value' : function () {return _vm.visibleText}},'staticClass' : ["content-text"]} )] ),_c('div', {'staticClass' : ["action-box"]} , [_c('input', {'attrs' : {'type' : "button",'value' : "上一页"},'staticClass' : ["btn"],'onBubbleEvents' : {'click' : _vm.showPrevPage}} ),_c('input', {'attrs' : {'type' : "button",'value' : "下一页"},'staticClass' : ["btn"],'onBubbleEvents' : {'click' : _vm.showNextPage}} )] )] ) }

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\hsdk\\hmscore\\3.0.0_7\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\hsdk\hmscore\3.0.0_7\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../liteReader/entry/src/main/js/default/pages/read/read.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _system = _interopRequireDefault(requireModule("@system.file"));
var _system2 = _interopRequireDefault(requireModule("@system.router"));
var _default = exports.default = {
  data: {
    bookName: '',
    fullText: '',
    visibleText: '正在加载中...',
    currentPage: 1,
    pageSize: 120
  },
  onInit: function onInit() {
    if (!this.bookName) {
      this.bookName = '未知书籍';
    }
  },
  onShow: function onShow() {
    this.loadBookContent();
  },
  loadBookContent: function loadBookContent() {
    var that = this;
    var fileUri = 'internal://app/' + that.bookName;
    try {
      _system["default"].readText({
        uri: fileUri,
        success: function success(data) {
          var content = '';
          if (data && data.text) {
            content = data.text;
          } else if (typeof data === 'string') {
            content = data;
          }
          if (content) {
            that.fullText = content;
            that.currentPage = 1;
            that.updatePageText();
          } else {
            that.visibleText = '文件内容为空';
          }
        },
        fail: function fail(err, code) {
          that.visibleText = '读取失败，错误码: ' + code;
        }
      });
    } catch (e) {
      that.visibleText = '发生异常: ' + e.message;
    }
  },
  updatePageText: function updatePageText() {
    var startIdx = (this.currentPage - 1) * this.pageSize;
    var endIdx = startIdx + this.pageSize;
    if (startIdx >= this.fullText.length) {
      this.visibleText = "=== 全剧终 ===";
      return;
    }
    this.visibleText = this.fullText.substring(startIdx, endIdx);
  },
  showNextPage: function showNextPage() {
    var totalPages = Math.ceil(this.fullText.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updatePageText();
    } else {
      console.info('=== [阅读页] 已经到最后一页了 ===');
    }
  },
  showPrevPage: function showPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageText();
    }
  },
  handleSwipe: function handleSwipe(e) {
    if (e.direction === 'right') {
      _system2["default"].replace({
        uri: 'pages/index/index'
      });
    }
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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../liteReader/entry/src/main/js/default/pages/read/read.hml?entry");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;