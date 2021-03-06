/* eslint-disable */
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".main-content {\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 80px;\\n}\\n\\n.img-size {\\n  width: 150px;\\n  height: 90px;\\n}\\n\\n.transparent {\\n  background-color:rgba(0, 0, 0, 0.1);\\n}\\n\\n.icon-size {\\n  font-size: 20px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a4511d949bea987abe94779c63626220.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg?");

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c0ee160447c5a96bc118b0296c44cb6a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg?");

/***/ }),

/***/ "./src/assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7b38c6b21715d37b176421c9dfdb226e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg?");

/***/ }),

/***/ "./src/assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2fbddd74a5b2fa8b5b5be1e1af60f2f4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/*! exports provided: render, getElement, addClass, removeClass, setEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setEventHandler\", function() { return setEventHandler; });\nfunction render(element, content) {\n  element.innerHTML = content;\n}\n\nfunction getElement(element, target) {\n  return element.querySelector(target);\n}\n\nfunction addClass(element, theClass) {\n  element.classList.add(theClass);\n}\nfunction removeClass(element, theClass) {\n  element.classList.remove(theClass);\n}\n\nfunction setEventHandler(selector, event, handler) {\n  const items = [...document.querySelectorAll(selector)];\n  items.forEach((item) => {\n    item.addEventListener(event, handler);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts */ \"./src/layouts.js\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n// Render main layout\nlet container = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '#content');\nObject(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(container, Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"navbar\"])() + Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"main\"])());\n\ncontainer = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '.main-content');\nObject(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(container, Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"home\"])());\n\n// Add event handler to each tab\nconst mapperFuntions = {\n  Home: Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"home\"])(),\n  Menu: Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"menu\"])(),\n  Contact: Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"contact\"])(),\n};\n\nconst tabHandler = (event) => {\n  const current = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '.active');\n  if (current) {\n    Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"removeClass\"])(current, 'active');\n  }\n\n  const { target } = event;\n  Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(target, 'active');\n  const container = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '.main-content');\n  Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(container, mapperFuntions[target.textContent]);\n};\n\nObject(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"setEventHandler\"])('.nav-link', 'click', tabHandler);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts.js":
/*!************************!*\
  !*** ./src/layouts.js ***!
  \************************/
/*! exports provided: navbar, main, home, menu, contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navbar\", function() { return navbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony import */ var _assets_images_tai_s_captures_JiRSy0GfqPA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg */ \"./src/assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg\");\n/* harmony import */ var _assets_images_amie_watson_2hBUvhe81mU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg */ \"./src/assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg\");\n/* harmony import */ var _assets_images_jarritos_mexican_soda_bA3VwdUYduY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg */ \"./src/assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg\");\n/* harmony import */ var _assets_images_krisztian_tabori_ZQf4jzkpz1k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg */ \"./src/assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg\");\n\n\n\n\n\nfunction navbar() {\n  return `\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">    \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Menu</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </nav>`;\n}\n\nfunction main() {\n  return `\n    <main class=\"position-relative\">\n      <img src=\"${_assets_images_tai_s_captures_JiRSy0GfqPA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\" class=\"img-fluid\" alt=\"Responsive image\">\n      <div class=\"main-content position-absolute\">\n      </div>\n    </main>\n  `;\n}\n\nfunction home() {\n  return `\n    <div class=\"jumbotron jumbotron-fluid transparent p-3\">\n      <h1 class=\"display-4 d-flex justify-content-center\">Chilango Taco</h1>\n      <p class=\"lead\">The right place to eat mexican tacos, come with your family.</p>\n    </div>\n  `;\n}\n\nfunction menu() {\n  return `\n    <ul class=\"list-unstyled transparent p-3\">\n      <li class=\"media\">\n        <div class=\"img-size mr-3\">\n          <img src=\"${_assets_images_amie_watson_2hBUvhe81mU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" class=\"img-fluid\" alt=\"...\">\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"mt-0 mb-1\">Campechano</h5>\n          A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling\n        </div>\n      </li>\n      <li class=\"media mt-4\">\n        <div class=\"img-size mr-3\">\n          <img src=\"${_assets_images_jarritos_mexican_soda_bA3VwdUYduY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" class=\"img-fluid\" alt=\"...\">\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"mt-0 mb-1\">Cochinita pibil</h5>\n          Cochinita pibil (also puerco pibil or cochinita con achiote) is a traditional Mexican slow-roasted pork dish from the Yucatán Peninsula.\n        </div>\n      </li>\n      <li class=\"media mt-4\">\n        <div class=\"img-size mr-3\">\n          <img src=\"${_assets_images_krisztian_tabori_ZQf4jzkpz1k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\" class=\"img-fluid\" alt=\"...\">\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"mt-0 mb-1\">Al pastor</h5>\n          Al pastor, also known as tacos al pastor, is a taco made with spit-grilled pork.\n        </div>\n      </li>\n    </ul>\n  `;\n}\n\nfunction contact() {\n  return `\n  <div class=\"jumbotron jumbotron-fluid transparent p-3\">\n    <h1 class=\"display-4\">Chilango Taco</h1>\n    <p class=\"lead\">Fell free to contact us for info or place location</p>\n    <hr class=\"my-4\">\n    <div>\n      <i class=\"fas fa-phone-square-alt icon-size\"></i>   555-44-23-10\n    </div>\n    <div>\n      <i class=\"fas fa-envelope-square icon-size\"></i>    info@chilangotaco.com\n    </div>\n    <div>\n      <i class=\"fas fa-map-marker-alt icon-size\"></i>     Wall street #5 Chilangolandia, CDMX.\n    </div>\n    <hr class=\"my-4\">\n    <div>\n      <i class=\"fab fa-facebook-square icon-size\"></i>\n      <i class=\"fab fa-twitter icon-size\"></i>\n      <i class=\"fab fa-instagram-square icon-size\"></i>\n    </div>\n  </div>\n  `;\n}\n\n\n\n//# sourceURL=webpack:///./src/layouts.js?");

/***/ })

/******/ });