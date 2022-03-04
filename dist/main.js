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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    /* font-family: Arial, Helvetica, sans-serif;\n    font-family: Georgia, 'Times New Roman', Times, serif; */\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%); \n    background: -webkit-radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);\n    background-color: rgba(57,71,87,.9);\n}\n\n.main-container {\n    height: 100%;\n    /* background-color: rgba(40, 50, 56, .8); */\n    display: flex;\n    flex-direction: column;\n    /* padding: 25px; */\n}\n\n.header {\n    flex: .25;\n    display: flex;\n    width: 100%;\n    padding: 25px;\n}\n\nmain {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    padding: 25px;\n    gap: 10px;\n}\n\n\n\n\n.ripple {\n    display: inline-block;\n    position: relative;\n    \n    width: 80px;\n    height: 80px;\n  }\n  .ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }\n  \n\n\n\n/* input:invalid {\n    border: 2px dashed red;\n  }\n  \ninput:valid {\nborder: 2px solid black;\n} */\n\n\ninput {\n  border: none;\n  border-radius: 7px;\n  padding: 8px;\n  width: 75%;\n  height: 34px;\n  margin-right: 15px;\n  background-color: rgba(255, 255, 255, .8);\n  color: rgba(57,71,87,.8);\n  /* border: 2px solid rgb(57,71,87); */\n} \n\n::-webkit-input-placeholder {\n  color: rgba(57,71,87,.9);\n}\n\ninput::placeholder {\n  color: rgba(57,71,87,.9);\n  /* font-size: 1rem; */\n  /* font-size: 12px; */\n}\n\n/* input:focus {\n  border: 1px solid rgba(57,71,87,.9);;\n} */\n\nbutton {\n  padding: 7px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(99, 158, 197);\n  color: white;\n  width: 25%;\n  height: 34px;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    flex: .75;\n    /* background-color: rgba(205, 221, 223, .2); */\n    /* background: rgba(186,137,159, .3);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);\n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.display {\n    display: none;\n}\n\n\n\n#city {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .8px;\n    color: white;\n}\n\n/* #iconSVG {\n    background: url(./amcharts_weather_icons_1.0.0/animated/rainy-3.svg);\n} */\n\n\n\n#switch {\n    width: 60px;\n}\n\n\n/* .loader {\n    flex: .25;\n} */\n\n\n.info {\n    flex: 2;\n}\n\n/*switch*/\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n.title-container{\n    flex: 1;\n    /* background-color: white; */\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.search-bar {\n    flex: .75;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-start;\n    /* background-color: black; */\n}\n\n.FC-container {\n    flex: .25;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#switch-temp-type {\n    background-color: rgba(57,71,87,.4);\n    transition: all .4s ease-in; \n    width: 50%;\n}\n\n#switch-temp-type:hover {\n    background-color: rgb(99, 158, 197);\n    /* box-shadow: 0 3px 6px rgb(0 0 0 / 0.5); */\n}\n\n#switch-temp-type:focus {\n    background-color: rgba(57,71,87,.4);\n}\n\n.switch-container {\n    flex: .25;\n    /* height: 100%; */\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#weather-title {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .9px;\n    color: white;\n}\n\n.data-color {\n    color: rgb(89, 189, 255);\n}\n\n.text {\n    color: black;\n    font-size: 1.25rem;\n}\n\n\n#form {\n  display: flex;\n  /* background-color: yellowgreen; */\n  /* width: 100%;\n  height: 100%; */\n  /* gap: 0 15px; */\n}\n\n.city-container {\n    flex: .25;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); \n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    /* background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);  */\n    /* background-color: rgba(57,71,87,.8); */\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0 25px; */\n    /* color: white; */\n}\n\n\n#cityIcon {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;  \n}\n\n.forecast-container {\n    flex: .25;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.6);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.info-container {\n    flex: .75;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.4);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n#weather {\n  font-size: 1.75rem;\n  font-weight: 300;\n  letter-spacing: .8px;\n  /* color: white; */\n}\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    /* font-family: Arial, Helvetica, sans-serif;\n    font-family: Georgia, 'Times New Roman', Times, serif; */\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%); \n    background: -webkit-radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);\n    background-color: rgba(57,71,87,.9);\n}\n\n.main-container {\n    height: 100%;\n    /* background-color: rgba(40, 50, 56, .8); */\n    display: flex;\n    flex-direction: column;\n    /* padding: 25px; */\n}\n\n.header {\n    flex: .25;\n    display: flex;\n    width: 100%;\n    padding: 25px;\n}\n\nmain {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    padding: 25px;\n    gap: 10px;\n}\n\n\n\n\n.ripple {\n    display: inline-block;\n    position: relative;\n    \n    width: 80px;\n    height: 80px;\n  }\n  .ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }\n  \n\n\n\n/* input:invalid {\n    border: 2px dashed red;\n  }\n  \ninput:valid {\nborder: 2px solid black;\n} */\n\n\ninput {\n  border: none;\n  border-radius: 7px;\n  padding: 8px;\n  width: 75%;\n  height: 34px;\n  margin-right: 15px;\n  background-color: rgba(255, 255, 255, .8);\n  color: rgba(57,71,87,.8);\n  /* border: 2px solid rgb(57,71,87); */\n} \n\n::-webkit-input-placeholder {\n  color: rgba(57,71,87,.9);\n}\n\ninput::placeholder {\n  color: rgba(57,71,87,.9);\n  /* font-size: 1rem; */\n  /* font-size: 12px; */\n}\n\n/* input:focus {\n  border: 1px solid rgba(57,71,87,.9);;\n} */\n\nbutton {\n  padding: 7px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(99, 158, 197);\n  color: white;\n  width: 25%;\n  height: 34px;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    flex: .75;\n    /* background-color: rgba(205, 221, 223, .2); */\n    /* background: rgba(186,137,159, .3);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);\n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.display {\n    display: none;\n}\n\n\n\n#city {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .8px;\n    color: white;\n}\n\n/* #iconSVG {\n    background: url(./amcharts_weather_icons_1.0.0/animated/rainy-3.svg);\n} */\n\n\n\n#switch {\n    width: 60px;\n}\n\n\n/* .loader {\n    flex: .25;\n} */\n\n\n.info {\n    flex: 2;\n}\n\n/*switch*/\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n.title-container{\n    flex: 1;\n    /* background-color: white; */\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.search-bar {\n    flex: .75;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-start;\n    /* background-color: black; */\n}\n\n.FC-container {\n    flex: .25;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#switch-temp-type {\n    background-color: rgba(57,71,87,.4);\n    transition: all .4s ease-in; \n    width: 50%;\n}\n\n#switch-temp-type:hover {\n    background-color: rgb(99, 158, 197);\n    /* box-shadow: 0 3px 6px rgb(0 0 0 / 0.5); */\n}\n\n#switch-temp-type:focus {\n    background-color: rgba(57,71,87,.4);\n}\n\n.switch-container {\n    flex: .25;\n    /* height: 100%; */\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#weather-title {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .9px;\n    color: white;\n}\n\n.data-color {\n    color: rgb(89, 189, 255);\n}\n\n.text {\n    color: black;\n    font-size: 1.25rem;\n}\n\n\n#form {\n  display: flex;\n  /* background-color: yellowgreen; */\n  /* width: 100%;\n  height: 100%; */\n  /* gap: 0 15px; */\n}\n\n.city-container {\n    flex: .25;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); \n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    /* background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);  */\n    /* background-color: rgba(57,71,87,.8); */\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0 25px; */\n    /* color: white; */\n}\n\n\n#cityIcon {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;  \n}\n\n.forecast-container {\n    flex: .25;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.6);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.info-container {\n    flex: .75;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.4);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n#weather {\n  font-size: 1.75rem;\n  font-weight: 300;\n  letter-spacing: .8px;\n  /* color: white; */\n}\n  "],"sourceRoot":""}]);
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
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading),
/* harmony export */   "selectElement": () => (/* binding */ selectElement)
/* harmony export */ });
class Element {
    constructor() {
        
    }
}

const selectElement = (selector, removeOrAdd, specificClass) => {
    const item = document.querySelector(`${selector}`);
    item.classList.removeOrAdd(`${specificClass}`);
    return item;
} 


const displayLoading = () => {
    const loader = document.querySelector('#loader');
    loader.classList.remove('display');
    loader.classList.add('ripple');
}

const hideLoading = () => {
    const loader = document.querySelector('#loader');
    const mainBody = document.querySelector('#main');
    const cityContainer = document.querySelector('#city-container');
    const titleContainer = document.querySelector('.title-container');
    loader.classList.remove('ripple');
    loader.classList.add('display');
    // titleContainer.classList.add('display');
    // titleContainer.classList.remove('title-container');
    cityContainer.classList.remove('display');
    cityContainer.classList.add('city-container');
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
        let f;
        (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getGeoLocation)(v).then(async geo => {
            c = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(geo['lat'], geo['lon']);
            f = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecast)(geo['lat'], geo['lon']);
            console.log(c);
            console.log(f);
            return c;
        }).then(c => {
            const t = timeOut((0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayLoading)());
            getName(c.name);
            getTemp(Math.round(c.main.temp) + '°');
            getWind(Math.round(c.wind.speed), Math.round(c.wind.deg));
            getHumidity(c.main.humidity + '%');
            getFeelsLike(c.main.feels_like + '°');
            getWeatherType(c.weather[0].main);
            getVisibility(c.visibility);
            clear(t);
            (0,_img__WEBPACK_IMPORTED_MODULE_2__.checkWeather)(c.main.temp, c.weather[0].main);
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
    } else if (dir <= 213.75 && dir >= 191.25) {
        direction === 'SSW';
    } else {
        console.log(Error);
    }
    wind.textContent = `${windSpeed}mph ${direction}`;
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
    const visibility = document.querySelector('#visibility-span');
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

    getItem (data, el) {
        const element = document.querySelector(`${el}`);
        element.textContent = data;
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
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getForecast": () => (/* binding */ getForecast)
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
            console.log(DATA);
            const {weather, main, wind, name, visibility} = DATA;
            let weatherData = {weather, main, wind, name, visibility};
            return weatherData;
        }
    } catch (err) {
        console.log('rejected: ', err);
    }
};


const getForecast = async (lat, lon) => {
    let FORECAST;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=imperial`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            FORECAST = await response.json();
            // const {weather, main, wind, name, visibility} = DATA;
            // let weatherData = {weather, main, wind, name, visibility};
            // return weatherData;
            return FORECAST;
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
/* harmony export */   "showImg": () => (/* binding */ showImg),
/* harmony export */   "checkWeather": () => (/* binding */ checkWeather)
/* harmony export */ });
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_rainy_3_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/rainy-3.svg */ "./src/amcharts_weather_icons_1.0.0/animated/rainy-3.svg");
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_snowy_3_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/snowy-3.svg */ "./src/amcharts_weather_icons_1.0.0/animated/snowy-3.svg");
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_snowy_6_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/snowy-6.svg */ "./src/amcharts_weather_icons_1.0.0/animated/snowy-6.svg");
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/cloudy.svg */ "./src/amcharts_weather_icons_1.0.0/animated/cloudy.svg");
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_day_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/day.svg */ "./src/amcharts_weather_icons_1.0.0/animated/day.svg");
/* harmony import */ var _amcharts_weather_icons_1_0_0_animated_night_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./amcharts_weather_icons_1.0.0/animated/night.svg */ "./src/amcharts_weather_icons_1.0.0/animated/night.svg");
/* harmony import */ var _img_julien_flutto_ZEDjKAuS8u0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg */ "./src/img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg");
/* harmony import */ var _img_valentin_muller_bWtd1ZyEy6w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg */ "./src/img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg");












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

const checkWeather = (temp, weather, time) => {
    const imgIcon = document.querySelector('#imgIcon');
    if (weather === 'Snow') {
        imgIcon.src = _amcharts_weather_icons_1_0_0_animated_snowy_3_svg__WEBPACK_IMPORTED_MODULE_1__;
    } else if (weather === 'Clouds') {
        imgIcon.src = _amcharts_weather_icons_1_0_0_animated_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else if (weather === 'Clear') {
        imgIcon.src = _amcharts_weather_icons_1_0_0_animated_night_svg__WEBPACK_IMPORTED_MODULE_5__;
    } else {
        return;
    }
}


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

/***/ "./src/amcharts_weather_icons_1.0.0/animated/cloudy.svg":
/*!**************************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/cloudy.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24f9a4741fe33f66bc0d.svg";

/***/ }),

/***/ "./src/amcharts_weather_icons_1.0.0/animated/day.svg":
/*!***********************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/day.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c33ef66438b2725bead5.svg";

/***/ }),

/***/ "./src/amcharts_weather_icons_1.0.0/animated/night.svg":
/*!*************************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/night.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cf4adcd3e5042b69048.svg";

/***/ }),

/***/ "./src/amcharts_weather_icons_1.0.0/animated/rainy-3.svg":
/*!***************************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/rainy-3.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c33eccc717e097dc00a.svg";

/***/ }),

/***/ "./src/amcharts_weather_icons_1.0.0/animated/snowy-3.svg":
/*!***************************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/snowy-3.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5422f54f9f554eb98f8.svg";

/***/ }),

/***/ "./src/amcharts_weather_icons_1.0.0/animated/snowy-6.svg":
/*!***************************************************************!*\
  !*** ./src/amcharts_weather_icons_1.0.0/animated/snowy-6.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dce3f5e7e7d2c7e342ff.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxNQUFNLFFBQVEsS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxpQ0FBaUMsNkJBQTZCLGdCQUFnQixpQkFBaUIs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aEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ2E7QUFDeEI7QUFDckI7OztBQUdBLG1EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2NsYXNzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2ltZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxODYsMTM3LDE1OSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7IFxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjkpO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDUwLCA1NiwgLjgpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBwYWRkaW5nOiAyNXB4OyAqL1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDIuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuLnJpcHBsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5yaXBwbGUgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxuICB9XFxuICAucmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyByaXBwbGUge1xcbiAgICAwJSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMHB4O1xcbiAgICAgIHdpZHRoOiA3MnB4O1xcbiAgICAgIGhlaWdodDogNzJweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG5cXG5cXG4vKiBpbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcXG4gIH1cXG4gIFxcbmlucHV0OnZhbGlkIHtcXG5ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59ICovXFxuXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMzRweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgY29sb3I6IHJnYmEoNTcsNzEsODcsLjgpO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDU3LDcxLDg3KTsgKi9cXG59IFxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg1Nyw3MSw4NywuOSk7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg1Nyw3MSw4NywuOSk7XFxuICAvKiBmb250LXNpemU6IDFyZW07ICovXFxuICAvKiBmb250LXNpemU6IDEycHg7ICovXFxufVxcblxcbi8qIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsNzEsODcsLjkpOztcXG59ICovXFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTU4LCAxOTcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4OiAuNzU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCAyMjEsIDIyMywgLjIpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDE4NiwxMzcsMTU5LCAuMyk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAgMCAwIC8gMC42KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG4jY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC44cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogI2ljb25TVkcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL3JhaW55LTMuc3ZnKTtcXG59ICovXFxuXFxuXFxuXFxuI3N3aXRjaCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG5cXG4vKiAubG9hZGVyIHtcXG4gICAgZmxleDogLjI1O1xcbn0gKi9cXG5cXG5cXG4uaW5mbyB7XFxuICAgIGZsZXg6IDI7XFxufVxcblxcbi8qc3dpdGNoKi9cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICB9XFxuICBcXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciAqL1xcbiAgLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB9XFxuXFxuLnRpdGxlLWNvbnRhaW5lcntcXG4gICAgZmxleDogMTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLkZDLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI3N3aXRjaC10ZW1wLXR5cGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC40KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluOyBcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI3N3aXRjaC10ZW1wLXR5cGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE1OCwgMTk3KTtcXG4gICAgLyogYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDAuNSk7ICovXFxufVxcblxcbiNzd2l0Y2gtdGVtcC10eXBlOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1Nyw3MSw4NywuNCk7XFxufVxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiN3ZWF0aGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjlweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGF0YS1jb2xvciB7XFxuICAgIGNvbG9yOiByZ2IoODksIDE4OSwgMjU1KTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuXFxuI2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuOyAqL1xcbiAgLyogd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7ICovXFxuICAvKiBnYXA6IDAgMTVweDsgKi9cXG59XFxuXFxuLmNpdHktY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjIxLCAyMjMpOyBcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjYpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMTg2LDEzNywxNTkpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE4NiwxMzcsMTU5LDEpIDAlLCByZ2JhKDU3LDcxLDg3LDEpIDEwMCUpOyAgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1Nyw3MSw4NywuOCk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMCAyNXB4OyAqL1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcblxcbiNjaXR5SWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjIxLCAyMjMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC42KTtcXG4gICAgLyogYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjYpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjEsIDIyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjQpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN3ZWF0aGVyIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjhweDtcXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwi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SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLDZDQUE2QztJQUM3QyxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxODYsMTM3LDE1OSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7IFxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjkpO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDUwLCA1NiwgLjgpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBwYWRkaW5nOiAyNXB4OyAqL1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXg6IDIuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuLnJpcHBsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG4gIC5yaXBwbGUgZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxuICB9XFxuICAucmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyByaXBwbGUge1xcbiAgICAwJSB7XFxuICAgICAgdG9wOiAzNnB4O1xcbiAgICAgIGxlZnQ6IDM2cHg7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMHB4O1xcbiAgICAgIHdpZHRoOiA3MnB4O1xcbiAgICAgIGhlaWdodDogNzJweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG5cXG5cXG4vKiBpbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJlZDtcXG4gIH1cXG4gIFxcbmlucHV0OnZhbGlkIHtcXG5ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59ICovXFxuXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMzRweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgY29sb3I6IHJnYmEoNTcsNzEsODcsLjgpO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDU3LDcxLDg3KTsgKi9cXG59IFxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg1Nyw3MSw4NywuOSk7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg1Nyw3MSw4NywuOSk7XFxuICAvKiBmb250LXNpemU6IDFyZW07ICovXFxuICAvKiBmb250LXNpemU6IDEycHg7ICovXFxufVxcblxcbi8qIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsNzEsODcsLjkpOztcXG59ICovXFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTU4LCAxOTcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4OiAuNzU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCAyMjEsIDIyMywgLjIpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDE4NiwxMzcsMTU5LCAuMyk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAgMCAwIC8gMC42KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG4jY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC44cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogI2ljb25TVkcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL3JhaW55LTMuc3ZnKTtcXG59ICovXFxuXFxuXFxuXFxuI3N3aXRjaCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG5cXG4vKiAubG9hZGVyIHtcXG4gICAgZmxleDogLjI1O1xcbn0gKi9cXG5cXG5cXG4uaW5mbyB7XFxuICAgIGZsZXg6IDI7XFxufVxcblxcbi8qc3dpdGNoKi9cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICB9XFxuICBcXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciAqL1xcbiAgLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB9XFxuXFxuLnRpdGxlLWNvbnRhaW5lcntcXG4gICAgZmxleDogMTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLkZDLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI3N3aXRjaC10ZW1wLXR5cGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC40KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluOyBcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuI3N3aXRjaC10ZW1wLXR5cGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE1OCwgMTk3KTtcXG4gICAgLyogYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDAuNSk7ICovXFxufVxcblxcbiNzd2l0Y2gtdGVtcC10eXBlOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1Nyw3MSw4NywuNCk7XFxufVxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiN3ZWF0aGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjlweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGF0YS1jb2xvciB7XFxuICAgIGNvbG9yOiByZ2IoODksIDE4OSwgMjU1KTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuXFxuI2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuOyAqL1xcbiAgLyogd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7ICovXFxuICAvKiBnYXA6IDAgMTVweDsgKi9cXG59XFxuXFxuLmNpdHktY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjIxLCAyMjMpOyBcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjYpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMTg2LDEzNywxNTkpO1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE4NiwxMzcsMTU5LDEpIDAlLCByZ2JhKDU3LDcxLDg3LDEpIDEwMCUpOyAgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1Nyw3MSw4NywuOCk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMCAyNXB4OyAqL1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcblxcbiNjaXR5SWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjIxLCAyMjMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC42KTtcXG4gICAgLyogYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjYpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjEsIDIyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjQpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN3ZWF0aGVyIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjhweDtcXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBcbiAgICB9XG59XG5cbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSAoc2VsZWN0b3IsIHJlbW92ZU9yQWRkLCBzcGVjaWZpY0NsYXNzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlT3JBZGQoYCR7c3BlY2lmaWNDbGFzc31gKTtcbiAgICByZXR1cm4gaXRlbTtcbn0gXG5cblxuY29uc3QgZGlzcGxheUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlcicpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3JpcHBsZScpO1xufVxuXG5jb25zdCBoaWRlTG9hZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGVyJyk7XG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGNvbnN0IGNpdHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1jb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1jb250YWluZXInKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgncmlwcGxlJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICAvLyB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgLy8gdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgY2l0eUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XG4gICAgY2l0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXR5LWNvbnRhaW5lcicpO1xuICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICBtYWluQm9keS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG59XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheUxvYWRpbmcsXG4gICAgaGlkZUxvYWRpbmcsXG4gICAgc2VsZWN0RWxlbWVudFxufSIsImltcG9ydCB7Z2V0RGF0YSwgZ2V0R2VvTG9jYXRpb24sIGdldEZvcmVjYXN0fSBmcm9tIFwiLi9nZXREYXRhXCI7XG5pbXBvcnQgeyBkaXNwbGF5TG9hZGluZywgaGlkZUxvYWRpbmcgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7ZGlzcGxheVNWRywgc2hvd0ltZywgY2hlY2tXZWF0aGVyfSBmcm9tICcuL2ltZyc7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi9jbGFzc1wiO1xuXG5jb25zdCBnZXRJbnB1dFZhbHVlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktaW5wdXQnKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGlmKG1haW5Cb2R5LmNsYXNzTGlzdC5jb250YWlucygnbWFpbicpKSB7XG4gICAgICAgICAgICBtYWluQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluJyk7XG4gICAgICAgICAgICBtYWluQm9keS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdiA9IGlucHV0LnZhbHVlO1xuICAgICAgICBkYXRhQXN5bmModik7XG4gICAgfSlcbn1cblxuY29uc3QgdGltZU91dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lT3V0ID0gc2V0VGltZW91dCgoZGlzcGxheUxvYWRpbmcpID0+IHtcbiAgICAgICBoaWRlTG9hZGluZygpO1xuICAgIH0sMTAwMClcbiAgICByZXR1cm4gdGltZU91dFxufVxuXG5jb25zdCBjbGVhciA9ICgpID0+IGNsZWFyVGltZW91dCh0aW1lT3V0KTtcblxuXG5jb25zdCBkYXRhQXN5bmMgPSBhc3luYyAodikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBjO1xuICAgICAgICBsZXQgZjtcbiAgICAgICAgZ2V0R2VvTG9jYXRpb24odikudGhlbihhc3luYyBnZW8gPT4ge1xuICAgICAgICAgICAgYyA9IGF3YWl0IGdldERhdGEoZ2VvWydsYXQnXSwgZ2VvWydsb24nXSk7XG4gICAgICAgICAgICBmID0gYXdhaXQgZ2V0Rm9yZWNhc3QoZ2VvWydsYXQnXSwgZ2VvWydsb24nXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGYpO1xuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pLnRoZW4oYyA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGltZU91dChkaXNwbGF5TG9hZGluZygpKTtcbiAgICAgICAgICAgIGdldE5hbWUoYy5uYW1lKTtcbiAgICAgICAgICAgIGdldFRlbXAoTWF0aC5yb3VuZChjLm1haW4udGVtcCkgKyAnwrAnKTtcbiAgICAgICAgICAgIGdldFdpbmQoTWF0aC5yb3VuZChjLndpbmQuc3BlZWQpLCBNYXRoLnJvdW5kKGMud2luZC5kZWcpKTtcbiAgICAgICAgICAgIGdldEh1bWlkaXR5KGMubWFpbi5odW1pZGl0eSArICclJyk7XG4gICAgICAgICAgICBnZXRGZWVsc0xpa2UoYy5tYWluLmZlZWxzX2xpa2UgKyAnwrAnKTtcbiAgICAgICAgICAgIGdldFdlYXRoZXJUeXBlKGMud2VhdGhlclswXS5tYWluKTtcbiAgICAgICAgICAgIGdldFZpc2liaWxpdHkoYy52aXNpYmlsaXR5KTtcbiAgICAgICAgICAgIGNsZWFyKHQpO1xuICAgICAgICAgICAgY2hlY2tXZWF0aGVyKGMubWFpbi50ZW1wLCBjLndlYXRoZXJbMF0ubWFpbik7XG4gICAgICAgICAgICAvLyBkaXNwbGF5U1ZHKGMpO1xuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSAgIFxufVxuXG5cbi8vVVNJTkcgQ0xBU1MgV0VBVEhFUlxuLy8gY29uc3QgZGF0YUFzeW5jID0gYXN5bmMgKHYpID0+IHtcbi8vICAgICB0cnkge1xuLy8gICAgICAgICBsZXQgYztcbi8vICAgICAgICAgZ2V0R2VvTG9jYXRpb24odikudGhlbihhc3luYyBnZW8gPT4ge1xuLy8gICAgICAgICAgICAgYyA9IGF3YWl0IGdldERhdGEoZ2VvWydsYXQnXSwgZ2VvWydsb24nXSk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcbi8vICAgICAgICAgICAgIHJldHVybiBjO1xuLy8gICAgICAgICB9KS50aGVuKGMgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgdCA9IHRpbWVPdXQoZGlzcGxheUxvYWRpbmcoKSlcbi8vICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcihjKVxuLy8gICAgICAgICAgICAgcmV0dXJuIGM7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfWNhdGNoIChlcnIpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbi8vICAgICB9XG4gICAgXG4vLyB9XG5cblxuY29uc3QgZ2V0TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5cbmNvbnN0IGdldFRlbXAgPSAodCkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcC1zcGFuJyk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHQ7XG4gICAgcmV0dXJuIHQ7XG59XG5cbmNvbnN0IGdldFdpbmQgPSAod2luZFNwZWVkLCBkaXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkaXIpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1zcGFuJyk7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBpZiAoZGlyIDw9IDExLjI1ICYmIGRpciA+PSAzNDguNzUpIHtcbiAgICAgICAgZGlyZWN0aW9uID09PSAnTic7XG4gICAgfSBlbHNlIGlmIChkaXIgPD0gMjM2LjI1ICYmIGRpciA+PSAyMTMuNzUpIHtcbiAgICAgICAgZGlyZWN0aW9uID09PSAnU1cnO1xuICAgIH0gZWxzZSBpZiAoZGlyIDw9IDIxMy43NSAmJiBkaXIgPj0gMTkxLjI1KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ1NTVyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coRXJyb3IpO1xuICAgIH1cbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7d2luZFNwZWVkfW1waCAke2RpcmVjdGlvbn1gO1xuICAgIHJldHVybiB3aW5kU3BlZWQ7XG59XG5jb25zdCBnZXRIdW1pZGl0eSA9IChoKSA9PiB7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHktc3BhbicpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gaDtcbiAgICByZXR1cm4gaDtcbn1cbmNvbnN0IGdldEZlZWxzTGlrZSA9KGYpID0+IHtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZS1zcGFuJyk7XG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gZjtcbiAgICByZXR1cm4gZjtcbn1cbmNvbnN0IGdldFdlYXRoZXJUeXBlID0gKHcpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXInKTtcbiAgICB3ZWF0aGVyLnRleHRDb250ZW50ID0gdztcbiAgICAvLyBkaXNwbGF5U1ZHKHcpO1xuICAgIHNob3dJbWcodyk7XG4gICAgcmV0dXJuIHc7XG59XG5cbmNvbnN0IGdldFZpc2liaWxpdHkgPSAodikgPT4ge1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlzaWJpbGl0eS1zcGFuJyk7XG4gICAgY29uc3Qgdk1pbGVzID0gMC4wMDA2MiAvIHY7XG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IHZNaWxlcztcbiAgICByZXR1cm4gdk1pbGVzO1xufVxuXG5leHBvcnQge1xuICAgIGdldElucHV0VmFsdWUsXG4gICAgZGlzcGxheUxvYWRpbmcsXG4gICAgaGlkZUxvYWRpbmdcbn0iLCJjbGFzcyBXZWF0aGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih7d2VhdGhlciwgbmFtZSwgd2luZCwgbWFpbiwgdmlzaWJpbGl0eX0pIHtcbiAgICAgICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcixcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSwgXG4gICAgICAgIHRoaXMud2luZCA9IHdpbmQsIFxuICAgICAgICB0aGlzLm1haW4gPSBtYWluLFxuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5XG4gICAgfVxuXG4gICAgbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcgKyB0aGlzLndlYXRoZXIpO1xuICAgIH1cbiAgICBnZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9IFxuICAgIGdldFRlbXAgPSAodCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtc3BhbicpO1xuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gdDtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIGdldFdpbmQgPSAod2luZFNwZWVkKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1zcGFuJyk7XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSB3aW5kU3BlZWQ7XG4gICAgICAgIHJldHVybiB3aW5kU3BlZWQ7XG4gICAgfVxuICAgIGdldEh1bWlkaXR5ID0gKGgpID0+IHtcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHktc3BhbicpO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGg7XG4gICAgICAgIHJldHVybiBoO1xuICAgIH1cbiAgICBnZXRGZWVsc0xpa2UgPSAoZikgPT4ge1xuICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZS1zcGFuJyk7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGY7XG4gICAgICAgIHJldHVybiBmO1xuICAgIH1cbiAgICBnZXRXZWF0aGVyVHlwZSA9ICh3KSA9PiB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpO1xuICAgICAgICB3ZWF0aGVyLnRleHRDb250ZW50ID0gdztcbiAgICAgICAgLy8gZGlzcGxheVNWRyh3KTtcbiAgICAgICAgc2hvd0ltZyh3KTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfVxuICAgIGdldFZpc2liaWxpdHkgKHYpIHtcbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmlsaXR5Jyk7XG4gICAgICAgIGNvbnN0IHZNaWxlcyA9IHYgLyAwLjAwMDYyMTM3MTI7XG4gICAgICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSB2TWlsZXM7XG4gICAgICAgIHJldHVybiB2TWlsZXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbSAoZGF0YSwgZWwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWx9YCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyIsImltcG9ydCB7IGRpc3BsYXlMb2FkaW5nLCBoaWRlTG9hZGluZyB9IGZyb20gXCIuL2FwcFwiO1xuXG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAobGF0LCBsb24pID0+IHtcbiAgICBsZXQgREFUQTtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPTc3MDZjM2Q1ODgxOTA1ZGM3MWQ0MWFiZTZmYzExOTc0JnVuaXRzPWltcGVyaWFsYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZighcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgREFUQSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKERBVEEpO1xuICAgICAgICAgICAgY29uc3Qge3dlYXRoZXIsIG1haW4sIHdpbmQsIG5hbWUsIHZpc2liaWxpdHl9ID0gREFUQTtcbiAgICAgICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IHt3ZWF0aGVyLCBtYWluLCB3aW5kLCBuYW1lLCB2aXNpYmlsaXR5fTtcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVqZWN0ZWQ6ICcsIGVycik7XG4gICAgfVxufTtcblxuXG5jb25zdCBnZXRGb3JlY2FzdCA9IGFzeW5jIChsYXQsIGxvbikgPT4ge1xuICAgIGxldCBGT1JFQ0FTVDtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD03NzA2YzNkNTg4MTkwNWRjNzFkNDFhYmU2ZmMxMTk3NCZ1bml0cz1pbXBlcmlhbGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEZPUkVDQVNUID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgLy8gY29uc3Qge3dlYXRoZXIsIG1haW4sIHdpbmQsIG5hbWUsIHZpc2liaWxpdHl9ID0gREFUQTtcbiAgICAgICAgICAgIC8vIGxldCB3ZWF0aGVyRGF0YSA9IHt3ZWF0aGVyLCBtYWluLCB3aW5kLCBuYW1lLCB2aXNpYmlsaXR5fTtcbiAgICAgICAgICAgIC8vIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgICAgICAgIHJldHVybiBGT1JFQ0FTVDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVqZWN0ZWQ6ICcsIGVycik7XG4gICAgfVxufTtcblxuXG5jb25zdCBnZXRHZW9Mb2NhdGlvbiA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGdlb0xvY2F0aW9uID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9NzcwNmMzZDU4ODE5MDVkYzcxZDQxYWJlNmZjMTE5NzRgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGxldCBHRU8gPSBhd2FpdCBnZW9Mb2NhdGlvbi5qc29uKCk7XG4gICAgICAgIGNvbnN0IGxhdCA9IEdFT1swXS5sYXQ7XG4gICAgICAgIGNvbnN0IGxvbiA9IEdFT1swXS5sb247XG4gICAgICAgIHJldHVybiB7bGF0LCBsb259O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSwgJ3JlamVjdGVkJyk7XG4gICAgICAgIGNvbnN0IG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjaXR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktY29udGFpbmVyJyk7XG4gICAgICAgIG5ld0VsLnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIENpdHknO1xuICAgICAgICBjaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0R2VvTG9jYXRpb24sXG4gICAgZ2V0RGF0YSxcbiAgICBnZXRGb3JlY2FzdFxufVxuXG4iLCJcblxuaW1wb3J0IHJhaW4gZnJvbSAnLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL3JhaW55LTMuc3ZnJztcbmltcG9ydCBzbm93IGZyb20gJy4vYW1jaGFydHNfd2VhdGhlcl9pY29uc18xLjAuMC9hbmltYXRlZC9zbm93eS0zLnN2Zyc7XG5pbXBvcnQgaGVhdnlTbm93IGZyb20gJy4vYW1jaGFydHNfd2VhdGhlcl9pY29uc18xLjAuMC9hbmltYXRlZC9zbm93eS02LnN2Zyc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4vYW1jaGFydHNfd2VhdGhlcl9pY29uc18xLjAuMC9hbmltYXRlZC9jbG91ZHkuc3ZnJztcbmltcG9ydCBjbGVhciBmcm9tICcuL2FtY2hhcnRzX3dlYXRoZXJfaWNvbnNfMS4wLjAvYW5pbWF0ZWQvZGF5LnN2Zyc7XG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tICcuL2FtY2hhcnRzX3dlYXRoZXJfaWNvbnNfMS4wLjAvYW5pbWF0ZWQvbmlnaHQuc3ZnJztcblxuaW1wb3J0IHN1bm55IGZyb20gJy4vaW1nL2p1bGllbi1mbHV0dG8tWkVEaktBdVM4dTAtdW5zcGxhc2guanBnJztcbmltcG9ydCByYWlueSBmcm9tICcuL2ltZy92YWxlbnRpbi1tdWxsZXItYld0ZDFaeUV5NnctdW5zcGxhc2guanBnJ1xuXG4vLyBjb25zdCBkaXNwbGF5U1ZHID0gKHdlYXRoZXJUeXBlKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cod2VhdGhlclR5cGUpO1xuLy8gICAgIC8vIGNvbnN0IGljb25TVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvblNWRycpO1xuLy8gICAgIGNvbnN0IGltZ1NWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uU1ZHJyk7XG4vLyAgICAgLy8gY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuLy8gICAgIGlmICh3ZWF0aGVyVHlwZSA9PT0gJ1JhaW4nKSB7XG4vLyAgICAgICAgIGltZ1NWRy5zcmMgPSByYWluO1xuLy8gICAgIH1cbi8vICAgICAvLyBhcHBlbmRDaGlsZChpY29uKTtcbi8vIH1cblxuXG5cbi8vIGV4cG9ydCB7ZGlzcGxheVNWR31cblxuY29uc3QgY2hlY2tXZWF0aGVyID0gKHRlbXAsIHdlYXRoZXIsIHRpbWUpID0+IHtcbiAgICBjb25zdCBpbWdJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0ljb24nKTtcbiAgICBpZiAod2VhdGhlciA9PT0gJ1Nub3cnKSB7XG4gICAgICAgIGltZ0ljb24uc3JjID0gc25vdztcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdDbG91ZHMnKSB7XG4gICAgICAgIGltZ0ljb24uc3JjID0gY2xvdWR5O1xuICAgIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gJ0NsZWFyJykge1xuICAgICAgICBpbWdJY29uLnNyYyA9IGNsZWFyTmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5jb25zdCBzaG93SW1nID0gKHdlYXRoZXJUeXBlKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN1bm55SW1nID0gbmV3IEltYWdlKCk7XG4gICAgLy8gaWYgKHdlYXRoZXJUeXBlID09PSAnUmFpbicpIHtcbiAgICAvLyAgICAgc3VubnlJbWcuc3JjID0gcmFpbnk7XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1kZWZhdWx0Jyk7XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1yYWluJyk7XG4gICAgLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoLi9pbWcvdmFsZW50aW4tbXVsbGVyLWJXdGQxWnlFeTZ3LXVuc3BsYXNoLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjb3Zlcic7XG4gICAgLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICAgIC8vIH1cbiAgICAvLyAvLyBzdW5ueUltZy5zcmMgPSBzdW5ueTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bm55SW1nKVxufVxuXG5leHBvcnQge1xuICAgIC8vIGRpc3BsYXlTVkcsIFxuICAgIHNob3dJbWcsXG4gICAgY2hlY2tXZWF0aGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHtnZXRJbnB1dFZhbHVlLCBnZXRDaXR5fSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCBjaXR5IGZyb20gJy4vY2l0aWVzL2NpdHkubGlzdC5qc29uJ1xuXG5cbmdldElucHV0VmFsdWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9