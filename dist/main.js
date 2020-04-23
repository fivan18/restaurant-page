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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts */ \"./src/layouts.js\");\n\n\n\n// Render main layout\nlet container = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '#content');\nObject(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(container, Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"navbar\"])() + Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"main\"])());\n\ncontainer = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '.main-content');\nObject(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(container, Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"home\"])());\n\n// Add event handler to each tab\nconst mapperFuntions = {\n  Home: Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"home\"])(),\n  Menu: Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"menu\"])(),\n  Contact: Object(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"contact\"])(),\n};\n\nconst tabHandler = (event) => {\n  const current = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '.active');\n  if (current) {\n    Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"removeClass\"])(current, 'active');\n  }\n\n  const { target } = event;\n  Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(target, 'active');\n  const container = Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])(document, '.main-content');\n  Object(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(container, mapperFuntions[target.textContent]);\n};\n\nObject(_domManipulation__WEBPACK_IMPORTED_MODULE_0__[\"setEventHandler\"])('.nav-link', 'click', tabHandler);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts.js":
/*!************************!*\
  !*** ./src/layouts.js ***!
  \************************/
/*! exports provided: navbar, main, home, menu, contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navbar\", function() { return navbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nfunction navbar() {\n  return `\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">    \n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Menu</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </nav>`;\n}\n\nfunction main() {\n  return `\n    <main class=\"position-relative\">\n      <img src=\"assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n      <div class=\"main-content position-absolute\">\n      </div>\n    </main>\n  `;\n}\n\nfunction home() {\n  return `\n    <div class=\"jumbotron jumbotron-fluid transparent p-3\">\n      <h1 class=\"display-4 d-flex justify-content-center\">Chilango Taco</h1>\n      <p class=\"lead\">The right place to eat mexican tacos, come with your family.</p>\n    </div>\n  `;\n}\n\nfunction menu() {\n  return `\n    <ul class=\"list-unstyled transparent p-3\">\n      <li class=\"media\">\n        <div class=\"img-size mr-3\">\n          <img src=\"assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg\" class=\"img-fluid\" alt=\"...\">\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"mt-0 mb-1\">Campechano</h5>\n          A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling\n        </div>\n      </li>\n      <li class=\"media mt-4\">\n        <div class=\"img-size mr-3\">\n          <img src=\"assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg\" class=\"img-fluid\" alt=\"...\">\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"mt-0 mb-1\">Cochinita pibil</h5>\n          Cochinita pibil (also puerco pibil or cochinita con achiote) is a traditional Mexican slow-roasted pork dish from the Yucatán Peninsula.\n        </div>\n      </li>\n      <li class=\"media mt-4\">\n        <div class=\"img-size mr-3\">\n          <img src=\"assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg\" class=\"img-fluid\" alt=\"...\">\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"mt-0 mb-1\">Al pastor</h5>\n          Al pastor, also known as tacos al pastor, is a taco made with spit-grilled pork.\n        </div>\n      </li>\n    </ul>\n  `;\n}\n\nfunction contact() {\n  return `\n  <div class=\"jumbotron jumbotron-fluid transparent p-3\">\n    <h1 class=\"display-4\">Chilango Taco</h1>\n    <p class=\"lead\">Fell free to contact us for info or place location</p>\n    <hr class=\"my-4\">\n    <div>\n      <i class=\"fas fa-phone-square-alt icon-size\"></i>   555-44-23-10\n    </div>\n    <div>\n      <i class=\"fas fa-envelope-square icon-size\"></i>    info@chilangotaco.com\n    </div>\n    <div>\n      <i class=\"fas fa-map-marker-alt icon-size\"></i>     Wall street #5 Chilangolandia, CDMX.\n    </div>\n    <hr class=\"my-4\">\n    <div>\n      <i class=\"fab fa-facebook-square icon-size\"></i>\n      <i class=\"fab fa-twitter icon-size\"></i>\n      <i class=\"fab fa-instagram-square icon-size\"></i>\n    </div>\n  </div>\n  `;\n}\n\n\n\n//# sourceURL=webpack:///./src/layouts.js?");

/***/ })

/******/ });