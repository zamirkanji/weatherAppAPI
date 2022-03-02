/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* .body-default {\n    background: url('./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: black;\n    padding: 50px;\n    backdrop-filter: blur(5px);\n} */\n\n/* .background-rain {\n    background: url('./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 25px;\n    backdrop-filter: blur(5px);\n} */\n\n\n.main-container {\n    height: 100%;\n    background-color: rgba(40, 50, 56, .8);\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    flex: .5;\n    display: flex;\n    width: 100%;\n    background-color: rgba(40, 50, 56, .8);\n    display: flex;\n    padding: 0 20px;\n    /* justify-content: space-evenly; */\n    /* align-items: center; */\n}\n\nmain {\n    flex: 2.5;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n    padding: 25px 0;\n}\n\n#form {\n    display: flex;\n    gap: 15px;\n}\n\n\n\n.ripple {\n    display: inline-block;\n    position: relative;\n    \n    width: 80px;\n    height: 80px;\n  }\n  .ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }\n  \n\n\n\n/* input:invalid {\n    border: 2px dashed red;\n  }\n  \ninput:valid {\nborder: 2px solid black;\n} */\n\n\n\n.main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.display {\n    display: none;\n}\n\n#city {\n    font-size: 26px;\n    font-weight: 400;\n    letter-spacing: .7px;\n    color: white;\n}\n\n/* #iconSVG {\n    background: url(./amcharts_weather_icons_1.0.0/animated/rainy-3.svg);\n} */\n\n\n\n#switch {\n    width: 60px;\n}\n\n\n/* .loader {\n    flex: .25;\n} */\n\n\n.info {\n    flex: 2;\n}\n\n/*switch*/\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n.title-container{\n    flex: 1;\n    /* background-color: white; */\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.search-bar {\n    flex: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* background-color: black; */\n}\n\n.switch-container {\n    flex: 1;\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n#weather-title {\n    font-size: 22px;\n    font-weight: 400;\n    letter-spacing: .7px;\n    color: white;\n}\n\n.data-color {\n    color: rgb(89, 189, 255)\n}\n\n.text {\n    color: black;\n    font-size: 18px;\n}\n\ninput {\n    border: none;\n    border-radius: 5px;\n    padding: 7px;\n    width: 100%;\n}\n\nbutton {\n    padding: 7px;\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(63, 93, 94);\n    color: white;\n}\n\n.city-container {\n    flex: .25\n}\n\n.info-container {\n    flex: .75;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n    gap: 12px;\n}\n\n#weather {\n    font-size: 22px;\n}\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;;;;;;;;GAQG;;AAEH;;;;;;;GAOG;;;AAGH;IACI,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,aAAa;IACb,WAAW;IACX,sCAAsC;IACtC,aAAa;IACb,eAAe;IACf,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;;AAIA;IACI,qBAAqB;IACrB,kBAAkB;;IAElB,WAAW;IACX,YAAY;EACd;EACA;IACE,kBAAkB;IAClB,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,0DAA0D;EAC5D;EACA;IACE,sBAAsB;EACxB;EACA;IACE;MACE,SAAS;MACT,UAAU;MACV,QAAQ;MACR,SAAS;MACT,UAAU;IACZ;IACA;MACE,QAAQ;MACR,SAAS;MACT,WAAW;MACX,YAAY;MACZ,UAAU;IACZ;EACF;;;;;AAKF;;;;;;GAMG;;;;AAIH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;;GAEG;;;;AAIH;IACI,WAAW;AACf;;;AAGA;;GAEG;;;AAGH;IACI,OAAO;AACX;;AAEA,SAAS;AACT;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA,+BAA+B;EAC/B;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA,eAAe;EACf;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;AAEF;IACI,OAAO;IACP,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* .body-default {\n    background: url('./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: black;\n    padding: 50px;\n    backdrop-filter: blur(5px);\n} */\n\n/* .background-rain {\n    background: url('./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 25px;\n    backdrop-filter: blur(5px);\n} */\n\n\n.main-container {\n    height: 100%;\n    background-color: rgba(40, 50, 56, .8);\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    flex: .5;\n    display: flex;\n    width: 100%;\n    background-color: rgba(40, 50, 56, .8);\n    display: flex;\n    padding: 0 20px;\n    /* justify-content: space-evenly; */\n    /* align-items: center; */\n}\n\nmain {\n    flex: 2.5;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n    padding: 25px 0;\n}\n\n#form {\n    display: flex;\n    gap: 15px;\n}\n\n\n\n.ripple {\n    display: inline-block;\n    position: relative;\n    \n    width: 80px;\n    height: 80px;\n  }\n  .ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }\n  \n\n\n\n/* input:invalid {\n    border: 2px dashed red;\n  }\n  \ninput:valid {\nborder: 2px solid black;\n} */\n\n\n\n.main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.display {\n    display: none;\n}\n\n#city {\n    font-size: 26px;\n    font-weight: 400;\n    letter-spacing: .7px;\n    color: white;\n}\n\n/* #iconSVG {\n    background: url(./amcharts_weather_icons_1.0.0/animated/rainy-3.svg);\n} */\n\n\n\n#switch {\n    width: 60px;\n}\n\n\n/* .loader {\n    flex: .25;\n} */\n\n\n.info {\n    flex: 2;\n}\n\n/*switch*/\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n.title-container{\n    flex: 1;\n    /* background-color: white; */\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.search-bar {\n    flex: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* background-color: black; */\n}\n\n.switch-container {\n    flex: 1;\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n#weather-title {\n    font-size: 22px;\n    font-weight: 400;\n    letter-spacing: .7px;\n    color: white;\n}\n\n.data-color {\n    color: rgb(89, 189, 255)\n}\n\n.text {\n    color: black;\n    font-size: 18px;\n}\n\ninput {\n    border: none;\n    border-radius: 5px;\n    padding: 7px;\n    width: 100%;\n}\n\nbutton {\n    padding: 7px;\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(63, 93, 94);\n    color: white;\n}\n\n.city-container {\n    flex: .25\n}\n\n.info-container {\n    flex: .75;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n    gap: 12px;\n}\n\n#weather {\n    font-size: 22px;\n}\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLoading": () => (/* binding */ displayLoading),
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading)
/* harmony export */ });
class Element {
    constructor() {
        
    }
}

const displayLoading = () => {
    const loader = document.querySelector('#loader');
    loader.classList.remove('display');
    loader.classList.add('ripple');
}

const hideLoading = () => {
    const loader = document.querySelector('#loader');
    const mainBody = document.querySelector('#main');
    loader.classList.remove('ripple');
    loader.classList.add('display');
    mainBody.classList.remove('display');
    mainBody.classList.add('main');
}



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue),
/* harmony export */   "displayLoading": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_1__.displayLoading),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_1__.hideLoading)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img */ "./src/img.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ "./src/class.js");





const getInputValue = async () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const mainBody = document.querySelector('#main');

    form.addEventListener('submit', async (e) => {
        if(mainBody.classList.contains('main')) {
            mainBody.classList.remove('main');
            mainBody.classList.add('display');
        }
        e.preventDefault();
        let v = input.value;
        dataAsync(v);
    })
}

const timeOut = () => {
    const timeOut = setTimeout((displayLoading) => {
       ;(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.hideLoading)();
    },1000)
    return timeOut
}

const clear = () => clearTimeout(timeOut);


const dataAsync = async (v) => {
    try {
        let c;
        (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getGeoLocation)(v).then(async geo => {
            c = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(geo['lat'], geo['lon']);
            console.log(c);
            return c;
        }).then(c => {
            const t = timeOut((0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayLoading)());
            getName(c.name);
            getTemp(Math.round(c.main.temp) + '°');
            // getWind(Math.round(c.wind.speed) +'mph');
            getWind(Math.round(c.wind.speed, c.wind.deg));
            getHumidity(c.main.humidity + '%');
            getFeelsLike(c.main.feels_like + '°');
            getWeatherType(c.weather[0].main);
            getVisibility(c.visibility);
            clear(t);
            // displaySVG(c);
            return c;
        })
    } catch (err) {
        console.log(err);
    }   
}


//USING CLASS WEATHER
// const dataAsync = async (v) => {
//     try {
//         let c;
//         getGeoLocation(v).then(async geo => {
//             c = await getData(geo['lat'], geo['lon']);
//             console.log(c);
//             return c;
//         }).then(c => {
//             const t = timeOut(displayLoading())
//             const weather = new Weather(c)
//             return c;
//         })
//     }catch (err) {
//         console.log(err);
//     }
    
// }


const getName = (name) => {
    const city = document.querySelector('#city');
    city.textContent = name;
    return name;
}

const getTemp = (t) => {
    const temp = document.getElementById('temp-span');
    temp.textContent = t;
    return t;
}

const getWind = (windSpeed, dir) => {
    console.log(dir);
    const wind = document.getElementById('wind-span');
    let direction;
    if (dir <= 11.25 && dir >= 348.75) {
        direction === 'N';
    } else if (dir <= 236.25 && dir >= 213.75) {
        direction === 'SW';
    } else {
        console.log(Error);
    }
    wind.textContent = windSpeed + direction;
    return windSpeed;
}
const getHumidity = (h) => {
    const humidity = document.getElementById('humidity-span');
    humidity.textContent = h;
    return h;
}
const getFeelsLike =(f) => {
    const feelsLike = document.getElementById('feels-like-span');
    feelsLike.textContent = f;
    return f;
}
const getWeatherType = (w) => {
    const weather = document.querySelector('#weather');
    weather.textContent = w;
    // displaySVG(w);
    (0,_img__WEBPACK_IMPORTED_MODULE_2__.showImg)(w);
    return w;
}

const getVisibility = (v) => {
    const visibility = document.querySelector('#visibility');
    const vMiles = 0.00062 / v;
    visibility.textContent = vMiles;
    return vMiles;
}



/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Weather {
    constructor({weather, name, wind, main, visibility}) {
        this.weather = weather,
        this.name = name, 
        this.wind = wind, 
        this.main = main,
        this.visibility = visibility
    }

    log() {
        console.log('test' + this.weather);
    }
    getName = (name) => {
        const city = document.querySelector('#city');
        city.textContent = name;
        return name;
    } 
    getTemp = (t) => {
        const temp = document.getElementById('temp-span');
        temp.textContent = t;
        return t;
    }
    getWind = (windSpeed) => {
        const wind = document.getElementById('wind-span');
        wind.textContent = windSpeed;
        return windSpeed;
    }
    getHumidity = (h) => {
        const humidity = document.getElementById('humidity-span');
        humidity.textContent = h;
        return h;
    }
    getFeelsLike = (f) => {
        const feelsLike = document.getElementById('feels-like-span');
        feelsLike.textContent = f;
        return f;
    }
    getWeatherType = (w) => {
        const weather = document.querySelector('#weather');
        weather.textContent = w;
        // displaySVG(w);
        showImg(w);
        return w;
    }
    getVisibility (v) {
        const visibility = document.querySelector('#visibility');
        const vMiles = v / 0.0006213712;
        visibility.textContent = vMiles;
        return vMiles;
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGeoLocation": () => (/* binding */ getGeoLocation),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");



const getData = async (lat, lon) => {
    let DATA;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=imperial`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            DATA = await response.json();
            const {weather, main, wind, name, visibility} = DATA;
            let weatherData = {weather, main, wind, name, visibility};
            return weatherData;
        }
    } catch (err) {
        console.log('rejected: ', err);
    }
};

const getGeoLocation = async (city) => {
    
    try {
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        const lat = GEO[0].lat;
        const lon = GEO[0].lon;
        return {lat, lon};
    } catch (e) {
        console.log(e, 'rejected');
        const newEl = document.createElement('p');
        const cityContainer = document.querySelector('.city-container');
        newEl.textContent = 'Please enter a valid City';
        cityContainer.appendChild(newEl);
    }
}





/***/ }),

/***/ "./src/img.js":
/*!********************!*\
  !*** ./src/img.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showImg": () => (/* binding */ showImg)
/* harmony export */ });
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_rainy_3_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/rainy-3.svg */ "./src/amcharts_weather_icons_1.0.0/animated/rainy-3.svg");
/* harmony import */ var _img_julien_flutto_ZEDjKAuS8u0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg */ "./src/img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg");
/* harmony import */ var _img_valentin_muller_bWtd1ZyEy6w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg */ "./src/img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg");







// const displaySVG = (weatherType) => {
//     console.log(weatherType);
//     // const iconSVG = document.querySelector('#iconSVG');
//     const imgSVG = document.querySelector('#iconSVG');
//     // const icon = new Image();
//     if (weatherType === 'Rain') {
//         imgSVG.src = rain;
//     }
//     // appendChild(icon);
// }



// export {displaySVG}


const showImg = (weatherType) => {
    const mainContainer = document.querySelector('.main-container');
    const sunnyImg = new Image();
    // if (weatherType === 'Rain') {
    //     sunnyImg.src = rainy;
    //     document.body.classList.remove('body-default');
    //     document.body.classList.add('background-rain');
    //     // document.body.style.background = 'url(./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg) no-repeat center cover';
    //     // document.body.classList.add('background');
    // }
    // // sunnyImg.src = sunny;
    mainContainer.appendChild(sunnyImg)
}



/***/ }),

/***/ "./src/amcharts_weather_icons_1.0.0/animated/rainy-3.svg":
/*!***************************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/rainy-3.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c33eccc717e097dc00a.svg";

/***/ }),

/***/ "./src/img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ed5227002aaefb6a559.jpg";

/***/ }),

/***/ "./src/img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78de501afa2c8dbbb2b8.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// import city from './cities/city.list.json'


(0,_app__WEBPACK_IMPORTED_MODULE_1__.getInputValue)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLFNBQVMsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxRQUFRLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUss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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ2E7QUFDeEI7QUFDckI7OztBQUdBLG1EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2ltZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogLmJvZHktZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWcvanVsaWVuLWZsdXR0by1aRURqS0F1Uzh1MC11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn0gKi9cXG5cXG4vKiAuYmFja2dyb3VuZC1yYWluIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltZy92YWxlbnRpbi1tdWxsZXItYld0ZDFaeUV5NnctdW5zcGxhc2guanBnJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn0gKi9cXG5cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDUwLCA1NiwgLjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZmxleDogLjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA1MCwgNTYsIC44KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDIuNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHggMDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcbi5yaXBwbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuICAucmlwcGxlIGRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xcbiAgfVxcbiAgLnJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgcmlwcGxlIHtcXG4gICAgMCUge1xcbiAgICAgIHRvcDogMzZweDtcXG4gICAgICBsZWZ0OiAzNnB4O1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDBweDtcXG4gICAgICB3aWR0aDogNzJweDtcXG4gICAgICBoZWlnaHQ6IDcycHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgfVxcbiAgXFxuXFxuXFxuXFxuLyogaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZWQ7XFxuICB9XFxuICBcXG5pbnB1dDp2YWxpZCB7XFxuYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufSAqL1xcblxcblxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC43cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogI2ljb25TVkcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL3JhaW55LTMuc3ZnKTtcXG59ICovXFxuXFxuXFxuXFxuI3N3aXRjaCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG5cXG4vKiAubG9hZGVyIHtcXG4gICAgZmxleDogLjI1O1xcbn0gKi9cXG5cXG5cXG4uaW5mbyB7XFxuICAgIGZsZXg6IDI7XFxufVxcblxcbi8qc3dpdGNoKi9cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICB9XFxuICBcXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciAqL1xcbiAgLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB9XFxuXFxuLnRpdGxlLWNvbnRhaW5lcntcXG4gICAgZmxleDogMTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiN3ZWF0aGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjdweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGF0YS1jb2xvciB7XFxuICAgIGNvbG9yOiByZ2IoODksIDE4OSwgMjU1KVxcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDkzLCA5NCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNpdHktY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuI3dlYXRoZXIge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHlDQUF5QztBQUM3Qzs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDs7Ozs7OztHQU9HOzs7QUFHSDtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOzs7O0FBSUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMERBQTBEO0VBQzVEO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFO01BQ0UsU0FBUztNQUNULFVBQVU7TUFDVixRQUFRO01BQ1IsU0FBUztNQUNULFVBQVU7SUFDWjtJQUNBO01BQ0UsUUFBUTtNQUNSLFNBQVM7TUFDVCxXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVU7SUFDWjtFQUNGOzs7OztBQUtGOzs7Ozs7R0FNRzs7OztBQUlIO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBOztHQUVHOzs7O0FBSUg7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBOztHQUVHOzs7QUFHSDtJQUNJLE9BQU87QUFDWDs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUEsK0JBQStCO0VBQy9CO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUEsZUFBZTtFQUNmO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwyQkFBMkI7RUFDN0I7O0FBRUY7SUFDSSxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiAuYm9keS1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltZy9qdWxpZW4tZmx1dHRvLVpFRGpLQXVTOHUwLXVuc3BsYXNoLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcbi8qIC5iYWNrZ3JvdW5kLXJhaW4ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1nL3ZhbGVudGluLW11bGxlci1iV3RkMVp5RXk2dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNTAsIDU2LCAuOCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDUwLCA1NiwgLjgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMi41O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAwO1xcbn1cXG5cXG4jZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuLnJpcHBsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5yaXBwbGUgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxuICB9XFxuICAucmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyByaXBwbGUge1xcbiAgICAwJSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMHB4O1xcbiAgICAgIHdpZHRoOiA3MnB4O1xcbiAgICAgIGhlaWdodDogNzJweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG5cXG5cXG4vKiBpbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcXG4gIH1cXG4gIFxcbmlucHV0OnZhbGlkIHtcXG5ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59ICovXFxuXFxuXFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjaXR5IHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjdweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiAjaWNvblNWRyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2FtY2hhcnRzX3dlYXRoZXJfaWNvbnNfMS4wLjAvYW5pbWF0ZWQvcmFpbnktMy5zdmcpO1xcbn0gKi9cXG5cXG5cXG5cXG4jc3dpdGNoIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcblxcbi8qIC5sb2FkZXIge1xcbiAgICBmbGV4OiAuMjU7XFxufSAqL1xcblxcblxcbi5pbmZvIHtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuLypzd2l0Y2gqL1xcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgc2xpZGVyICovXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIH1cXG5cXG4udGl0bGUtY29udGFpbmVye1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI3dlYXRoZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuN3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXRhLWNvbG9yIHtcXG4gICAgY29sb3I6IHJnYig4OSwgMTg5LCAyNTUpXFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgOTMsIDk0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2l0eS1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjVcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgZmxleDogLjc1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBcbiAgICB9XG59XG5cbmNvbnN0IGRpc3BsYXlMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXInKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdyaXBwbGUnKTtcbn1cblxuY29uc3QgaGlkZUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlcicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgncmlwcGxlJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBtYWluQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XG4gICAgbWFpbkJvZHkuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xufVxuXG5leHBvcnQge1xuICAgIGRpc3BsYXlMb2FkaW5nLFxuICAgIGhpZGVMb2FkaW5nXG59IiwiaW1wb3J0IHtnZXREYXRhLCBnZXRHZW9Mb2NhdGlvbn0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuaW1wb3J0IHsgZGlzcGxheUxvYWRpbmcsIGhpZGVMb2FkaW5nIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQge2Rpc3BsYXlTVkcsIHNob3dJbWd9IGZyb20gJy4vaW1nJztcbmltcG9ydCBXZWF0aGVyIGZyb20gXCIuL2NsYXNzXCI7XG5cbmNvbnN0IGdldElucHV0VmFsdWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1pbnB1dCcpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYobWFpbkJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluJykpIHtcbiAgICAgICAgICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4nKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGRhdGFBc3luYyh2KTtcbiAgICB9KVxufVxuXG5jb25zdCB0aW1lT3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVPdXQgPSBzZXRUaW1lb3V0KChkaXNwbGF5TG9hZGluZykgPT4ge1xuICAgICAgIGhpZGVMb2FkaW5nKCk7XG4gICAgfSwxMDAwKVxuICAgIHJldHVybiB0aW1lT3V0XG59XG5cbmNvbnN0IGNsZWFyID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVPdXQpO1xuXG5cbmNvbnN0IGRhdGFBc3luYyA9IGFzeW5jICh2KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGM7XG4gICAgICAgIGdldEdlb0xvY2F0aW9uKHYpLnRoZW4oYXN5bmMgZ2VvID0+IHtcbiAgICAgICAgICAgIGMgPSBhd2FpdCBnZXREYXRhKGdlb1snbGF0J10sIGdlb1snbG9uJ10pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYyk7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfSkudGhlbihjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aW1lT3V0KGRpc3BsYXlMb2FkaW5nKCkpO1xuICAgICAgICAgICAgZ2V0TmFtZShjLm5hbWUpO1xuICAgICAgICAgICAgZ2V0VGVtcChNYXRoLnJvdW5kKGMubWFpbi50ZW1wKSArICfCsCcpO1xuICAgICAgICAgICAgLy8gZ2V0V2luZChNYXRoLnJvdW5kKGMud2luZC5zcGVlZCkgKydtcGgnKTtcbiAgICAgICAgICAgIGdldFdpbmQoTWF0aC5yb3VuZChjLndpbmQuc3BlZWQsIGMud2luZC5kZWcpKTtcbiAgICAgICAgICAgIGdldEh1bWlkaXR5KGMubWFpbi5odW1pZGl0eSArICclJyk7XG4gICAgICAgICAgICBnZXRGZWVsc0xpa2UoYy5tYWluLmZlZWxzX2xpa2UgKyAnwrAnKTtcbiAgICAgICAgICAgIGdldFdlYXRoZXJUeXBlKGMud2VhdGhlclswXS5tYWluKTtcbiAgICAgICAgICAgIGdldFZpc2liaWxpdHkoYy52aXNpYmlsaXR5KTtcbiAgICAgICAgICAgIGNsZWFyKHQpO1xuICAgICAgICAgICAgLy8gZGlzcGxheVNWRyhjKTtcbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0gICBcbn1cblxuXG4vL1VTSU5HIENMQVNTIFdFQVRIRVJcbi8vIGNvbnN0IGRhdGFBc3luYyA9IGFzeW5jICh2KSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgbGV0IGM7XG4vLyAgICAgICAgIGdldEdlb0xvY2F0aW9uKHYpLnRoZW4oYXN5bmMgZ2VvID0+IHtcbi8vICAgICAgICAgICAgIGMgPSBhd2FpdCBnZXREYXRhKGdlb1snbGF0J10sIGdlb1snbG9uJ10pO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYyk7XG4vLyAgICAgICAgICAgICByZXR1cm4gYztcbi8vICAgICAgICAgfSkudGhlbihjID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHQgPSB0aW1lT3V0KGRpc3BsYXlMb2FkaW5nKCkpXG4vLyAgICAgICAgICAgICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIoYylcbi8vICAgICAgICAgICAgIHJldHVybiBjO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1jYXRjaCAoZXJyKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgICAgfVxuICAgIFxuLy8gfVxuXG5cbmNvbnN0IGdldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHJldHVybiBuYW1lO1xufVxuXG5jb25zdCBnZXRUZW1wID0gKHQpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtc3BhbicpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0O1xuICAgIHJldHVybiB0O1xufVxuXG5jb25zdCBnZXRXaW5kID0gKHdpbmRTcGVlZCwgZGlyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGlyKTtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtc3BhbicpO1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgaWYgKGRpciA8PSAxMS4yNSAmJiBkaXIgPj0gMzQ4Ljc1KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ04nO1xuICAgIH0gZWxzZSBpZiAoZGlyIDw9IDIzNi4yNSAmJiBkaXIgPj0gMjEzLjc1KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ1NXJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhFcnJvcik7XG4gICAgfVxuICAgIHdpbmQudGV4dENvbnRlbnQgPSB3aW5kU3BlZWQgKyBkaXJlY3Rpb247XG4gICAgcmV0dXJuIHdpbmRTcGVlZDtcbn1cbmNvbnN0IGdldEh1bWlkaXR5ID0gKGgpID0+IHtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eS1zcGFuJyk7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBoO1xuICAgIHJldHVybiBoO1xufVxuY29uc3QgZ2V0RmVlbHNMaWtlID0oZikgPT4ge1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXNwYW4nKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBmO1xuICAgIHJldHVybiBmO1xufVxuY29uc3QgZ2V0V2VhdGhlclR5cGUgPSAodykgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpO1xuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSB3O1xuICAgIC8vIGRpc3BsYXlTVkcodyk7XG4gICAgc2hvd0ltZyh3KTtcbiAgICByZXR1cm4gdztcbn1cblxuY29uc3QgZ2V0VmlzaWJpbGl0eSA9ICh2KSA9PiB7XG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmlsaXR5Jyk7XG4gICAgY29uc3Qgdk1pbGVzID0gMC4wMDA2MiAvIHY7XG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IHZNaWxlcztcbiAgICByZXR1cm4gdk1pbGVzO1xufVxuXG5leHBvcnQge1xuICAgIGdldElucHV0VmFsdWUsXG4gICAgZGlzcGxheUxvYWRpbmcsXG4gICAgaGlkZUxvYWRpbmdcbn0iLCJjbGFzcyBXZWF0aGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2VhdGhlciwgbmFtZSwgd2luZCwgbWFpbiwgdmlzaWJpbGl0eX0pIHtcbiAgICAgICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcixcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSwgXG4gICAgICAgIHRoaXMud2luZCA9IHdpbmQsIFxuICAgICAgICB0aGlzLm1haW4gPSBtYWluLFxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5XG4gICAgfVxuXG4gICAgbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcgKyB0aGlzLndlYXRoZXIpO1xuICAgIH1cbiAgICBnZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9IFxuICAgIGdldFRlbXAgPSAodCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtc3BhbicpO1xuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gdDtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIGdldFdpbmQgPSAod2luZFNwZWVkKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1zcGFuJyk7XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSB3aW5kU3BlZWQ7XG4gICAgICAgIHJldHVybiB3aW5kU3BlZWQ7XG4gICAgfVxuICAgIGdldEh1bWlkaXR5ID0gKGgpID0+IHtcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHktc3BhbicpO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGg7XG4gICAgICAgIHJldHVybiBoO1xuICAgIH1cbiAgICBnZXRGZWVsc0xpa2UgPSAoZikgPT4ge1xuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZS1zcGFuJyk7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGY7XG4gICAgICAgIHJldHVybiBmO1xuICAgIH1cbiAgICBnZXRXZWF0aGVyVHlwZSA9ICh3KSA9PiB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpO1xuICAgICAgICB3ZWF0aGVyLnRleHRDb250ZW50ID0gdztcbiAgICAgICAgLy8gZGlzcGxheVNWRyh3KTtcbiAgICAgICAgc2hvd0ltZyh3KTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfVxuICAgIGdldFZpc2liaWxpdHkgKHYpIHtcbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmlsaXR5Jyk7XG4gICAgICAgIGNvbnN0IHZNaWxlcyA9IHYgLyAwLjAwMDYyMTM3MTI7XG4gICAgICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSB2TWlsZXM7XG4gICAgICAgIHJldHVybiB2TWlsZXM7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7IiwiaW1wb3J0IHsgZGlzcGxheUxvYWRpbmcsIGhpZGVMb2FkaW5nIH0gZnJvbSBcIi4vYXBwXCI7XG5cblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChsYXQsIGxvbikgPT4ge1xuICAgIGxldCBEQVRBO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9NzcwNmMzZDU4ODE5MDVkYzcxZDQxYWJlNmZjMTE5NzQmdW5pdHM9aW1wZXJpYWxgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBEQVRBID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3Qge3dlYXRoZXIsIG1haW4sIHdpbmQsIG5hbWUsIHZpc2liaWxpdHl9ID0gREFUQTtcbiAgICAgICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IHt3ZWF0aGVyLCBtYWluLCB3aW5kLCBuYW1lLCB2aXNpYmlsaXR5fTtcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVqZWN0ZWQ6ICcsIGVycik7XG4gICAgfVxufTtcblxuY29uc3QgZ2V0R2VvTG9jYXRpb24gPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGxldCBnZW9Mb2NhdGlvbiA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmFwcGlkPTc3MDZjM2Q1ODgxOTA1ZGM3MWQ0MWFiZTZmYzExOTc0YCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBsZXQgR0VPID0gYXdhaXQgZ2VvTG9jYXRpb24uanNvbigpO1xuICAgICAgICBjb25zdCBsYXQgPSBHRU9bMF0ubGF0O1xuICAgICAgICBjb25zdCBsb24gPSBHRU9bMF0ubG9uO1xuICAgICAgICByZXR1cm4ge2xhdCwgbG9ufTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUsICdyZWplY3RlZCcpO1xuICAgICAgICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2l0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LWNvbnRhaW5lcicpO1xuICAgICAgICBuZXdFbC50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBDaXR5JztcbiAgICAgICAgY2l0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbCk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGdldEdlb0xvY2F0aW9uLFxuICAgIGdldERhdGFcbn1cblxuIiwiXG5cbmltcG9ydCByYWluIGZyb20gJy4vYW1jaGFydHNfd2VhdGhlcl9pY29uc18xLjAuMC9hbmltYXRlZC9yYWlueS0zLnN2Zyc7XG5cbmltcG9ydCBzdW5ueSBmcm9tICcuL2ltZy9qdWxpZW4tZmx1dHRvLVpFRGpLQXVTOHUwLXVuc3BsYXNoLmpwZyc7XG5pbXBvcnQgcmFpbnkgZnJvbSAnLi9pbWcvdmFsZW50aW4tbXVsbGVyLWJXdGQxWnlFeTZ3LXVuc3BsYXNoLmpwZydcblxuLy8gY29uc3QgZGlzcGxheVNWRyA9ICh3ZWF0aGVyVHlwZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHdlYXRoZXJUeXBlKTtcbi8vICAgICAvLyBjb25zdCBpY29uU1ZHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb25TVkcnKTtcbi8vICAgICBjb25zdCBpbWdTVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvblNWRycpO1xuLy8gICAgIC8vIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbi8vICAgICBpZiAod2VhdGhlclR5cGUgPT09ICdSYWluJykge1xuLy8gICAgICAgICBpbWdTVkcuc3JjID0gcmFpbjtcbi8vICAgICB9XG4vLyAgICAgLy8gYXBwZW5kQ2hpbGQoaWNvbik7XG4vLyB9XG5cblxuXG4vLyBleHBvcnQge2Rpc3BsYXlTVkd9XG5cblxuY29uc3Qgc2hvd0ltZyA9ICh3ZWF0aGVyVHlwZSkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBzdW5ueUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGlmICh3ZWF0aGVyVHlwZSA9PT0gJ1JhaW4nKSB7XG4gICAgLy8gICAgIHN1bm55SW1nLnNyYyA9IHJhaW55O1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktZGVmYXVsdCcpO1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtcmFpbicpO1xuICAgIC8vICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKC4vaW1nL3ZhbGVudGluLW11bGxlci1iV3RkMVp5RXk2dy11bnNwbGFzaC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY292ZXInO1xuICAgIC8vICAgICAvLyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcbiAgICAvLyB9XG4gICAgLy8gLy8gc3VubnlJbWcuc3JjID0gc3Vubnk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW5ueUltZylcbn1cblxuZXhwb3J0IHtcbiAgICAvLyBkaXNwbGF5U1ZHLCBcbiAgICBzaG93SW1nXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHtnZXRJbnB1dFZhbHVlLCBnZXRDaXR5fSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCBjaXR5IGZyb20gJy4vY2l0aWVzL2NpdHkubGlzdC5qc29uJ1xuXG5cbmdldElucHV0VmFsdWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9