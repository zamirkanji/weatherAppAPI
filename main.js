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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    /* font-family: Arial, Helvetica, sans-serif;\n    font-family: Georgia, 'Times New Roman', Times, serif; */\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    /* background-color: rgba(40, 50, 56, .9); */\n    background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%); \n}\n\n/* .body-default {\n    background: url('./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: black;\n    padding: 50px;\n    backdrop-filter: blur(5px);\n} */\n\n/* .background-rain {\n    background: url('./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 25px;\n    backdrop-filter: blur(5px);\n} */\n\n\n.main-container {\n    height: 100%;\n    /* background-color: rgba(40, 50, 56, .8); */\n    display: flex;\n    flex-direction: column;\n    /* padding: 25px; */\n}\n\n.header {\n    flex: .25;\n    display: flex;\n    width: 100%;\n    /* background-color: rgba(40, 50, 56, .8); */\n    /* background-color: rgb(112, 123, 126); */\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    padding: 25px;\n    /* justify-content: space-evenly; */\n    /* align-items: center; */\n}\n\nmain {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    /* align-items: center; */\n    padding: 25px;\n    gap: 10px;\n    /* background-color: rgb(76, 85, 94); */\n}\n\n\n\n\n.ripple {\n    display: inline-block;\n    position: relative;\n    \n    width: 80px;\n    height: 80px;\n  }\n  .ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }\n  \n\n\n\n/* input:invalid {\n    border: 2px dashed red;\n  }\n  \ninput:valid {\nborder: 2px solid black;\n} */\n\n\ninput {\n  border: none;\n  border-radius: 7px;\n  padding: 8px;\n  /* width: 35vw;\n  height: 35px; */\n  /* width: 50%;\n  height: 25%; */\n  width: 75%;\n  height: 34px;\n  margin-right: 15px;\n  background-color: rgba(255, 255, 255, .8);\n  color: rgba(57,71,87,.8);\n  /* border: 2px solid rgb(57,71,87); */\n} \n\n::-webkit-input-placeholder {\n  color: rgba(57,71,87,.9);\n}\n\ninput::placeholder {\n  color: rgba(57,71,87,.9);\n  /* font-size: 1rem; */\n  /* font-size: 12px; */\n}\n\nbutton {\n  padding: 7px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(99, 158, 197);\n  color: white;\n  width: 25%;\n  height: 34px;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    flex: .75;\n    /* background-color: rgba(205, 221, 223, .2); */\n    /* background: rgba(186,137,159, .3);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);\n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.display {\n    display: none;\n}\n\n\n\n#city {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .8px;\n    color: white;\n}\n\n/* #iconSVG {\n    background: url(./amcharts_weather_icons_1.0.0/animated/rainy-3.svg);\n} */\n\n\n\n#switch {\n    width: 60px;\n}\n\n\n/* .loader {\n    flex: .25;\n} */\n\n\n.info {\n    flex: 2;\n}\n\n/*switch*/\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n.title-container{\n    flex: 1;\n    /* background-color: white; */\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.search-bar {\n    flex: .75;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-start;\n    /* background-color: black; */\n}\n\n.FC-container {\n    flex: .25;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#switch-temp-type {\n    background-color: rgba(57,71,87,.4);\n    transition: all .4s ease-in; \n}\n\n#switch-temp-type:hover {\n    background-color: rgb(99, 158, 197);\n    /* box-shadow: 0 3px 6px rgb(0 0 0 / 0.5); */\n}\n\n#switch-temp-type:focus {\n    background-color: rgba(57,71,87,.4);\n}\n\n.switch-container {\n    flex: .25;\n    /* height: 100%; */\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#weather-title {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .9px;\n    color: white;\n}\n\n.data-color {\n    color: rgb(89, 189, 255);\n}\n\n.text {\n    color: black;\n    font-size: 1.25rem;\n}\n\n\n#form {\n  display: flex;\n  /* background-color: yellowgreen; */\n  /* width: 100%;\n  height: 100%; */\n  /* gap: 0 15px; */\n}\n\n.city-container {\n    flex: .25;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); \n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    /* background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);  */\n    /* background-color: rgba(57,71,87,.8); */\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 25px;\n    /* color: white; */\n}\n\n\n#cityIcon {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;  \n}\n\n.forecast-container {\n    flex: .25;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.6);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.info-container {\n    flex: .75;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.4);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n#weather {\n  font-size: 1.75rem;\n  font-weight: 300;\n  letter-spacing: .8px;\n  /* color: white; */\n}\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    /* font-family: Arial, Helvetica, sans-serif;\n    font-family: Georgia, 'Times New Roman', Times, serif; */\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    /* background-color: rgba(40, 50, 56, .9); */\n    background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%); \n}\n\n/* .body-default {\n    background: url('./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: black;\n    padding: 50px;\n    backdrop-filter: blur(5px);\n} */\n\n/* .background-rain {\n    background: url('./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 25px;\n    backdrop-filter: blur(5px);\n} */\n\n\n.main-container {\n    height: 100%;\n    /* background-color: rgba(40, 50, 56, .8); */\n    display: flex;\n    flex-direction: column;\n    /* padding: 25px; */\n}\n\n.header {\n    flex: .25;\n    display: flex;\n    width: 100%;\n    /* background-color: rgba(40, 50, 56, .8); */\n    /* background-color: rgb(112, 123, 126); */\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    padding: 25px;\n    /* justify-content: space-evenly; */\n    /* align-items: center; */\n}\n\nmain {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    /* align-items: center; */\n    padding: 25px;\n    gap: 10px;\n    /* background-color: rgb(76, 85, 94); */\n}\n\n\n\n\n.ripple {\n    display: inline-block;\n    position: relative;\n    \n    width: 80px;\n    height: 80px;\n  }\n  .ripple div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  .ripple div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n  @keyframes ripple {\n    0% {\n      top: 36px;\n      left: 36px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      top: 0px;\n      left: 0px;\n      width: 72px;\n      height: 72px;\n      opacity: 0;\n    }\n  }\n  \n\n\n\n/* input:invalid {\n    border: 2px dashed red;\n  }\n  \ninput:valid {\nborder: 2px solid black;\n} */\n\n\ninput {\n  border: none;\n  border-radius: 7px;\n  padding: 8px;\n  /* width: 35vw;\n  height: 35px; */\n  /* width: 50%;\n  height: 25%; */\n  width: 75%;\n  height: 34px;\n  margin-right: 15px;\n  background-color: rgba(255, 255, 255, .8);\n  color: rgba(57,71,87,.8);\n  /* border: 2px solid rgb(57,71,87); */\n} \n\n::-webkit-input-placeholder {\n  color: rgba(57,71,87,.9);\n}\n\ninput::placeholder {\n  color: rgba(57,71,87,.9);\n  /* font-size: 1rem; */\n  /* font-size: 12px; */\n}\n\nbutton {\n  padding: 7px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(99, 158, 197);\n  color: white;\n  width: 25%;\n  height: 34px;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    flex: .75;\n    /* background-color: rgba(205, 221, 223, .2); */\n    /* background: rgba(186,137,159, .3);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);\n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.display {\n    display: none;\n}\n\n\n\n#city {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .8px;\n    color: white;\n}\n\n/* #iconSVG {\n    background: url(./amcharts_weather_icons_1.0.0/animated/rainy-3.svg);\n} */\n\n\n\n#switch {\n    width: 60px;\n}\n\n\n/* .loader {\n    flex: .25;\n} */\n\n\n.info {\n    flex: 2;\n}\n\n/*switch*/\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n.title-container{\n    flex: 1;\n    /* background-color: white; */\n    /* height: 100%; */\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.search-bar {\n    flex: .75;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-start;\n    /* background-color: black; */\n}\n\n.FC-container {\n    flex: .25;\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#switch-temp-type {\n    background-color: rgba(57,71,87,.4);\n    transition: all .4s ease-in; \n}\n\n#switch-temp-type:hover {\n    background-color: rgb(99, 158, 197);\n    /* box-shadow: 0 3px 6px rgb(0 0 0 / 0.5); */\n}\n\n#switch-temp-type:focus {\n    background-color: rgba(57,71,87,.4);\n}\n\n.switch-container {\n    flex: .25;\n    /* height: 100%; */\n    display: flex;\n    /* align-items: center; */\n    justify-content: flex-end;\n}\n\n#weather-title {\n    font-size: 1.75rem;\n    font-weight: 300;\n    letter-spacing: .9px;\n    color: white;\n}\n\n.data-color {\n    color: rgb(89, 189, 255);\n}\n\n.text {\n    color: black;\n    font-size: 1.25rem;\n}\n\n\n#form {\n  display: flex;\n  /* background-color: yellowgreen; */\n  /* width: 100%;\n  height: 100%; */\n  /* gap: 0 15px; */\n}\n\n.city-container {\n    flex: .25;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); \n    box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    /* background: rgb(186,137,159);\n    background: radial-gradient(circle, rgba(186,137,159,1) 0%, rgba(57,71,87,1) 100%);  */\n    /* background-color: rgba(57,71,87,.8); */\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 25px;\n    /* color: white; */\n}\n\n\n#cityIcon {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;  \n}\n\n.forecast-container {\n    flex: .25;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.6);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n.info-container {\n    flex: .75;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n    /* background-color: rgb(205, 221, 223); */\n    background-color: rgba(57,71,87,.4);\n    /* box-shadow: 0 5px 10px rgb(0 0 0 / 0.6); */\n    border-radius: 10px;\n}\n\n#weather {\n  font-size: 1.75rem;\n  font-weight: 300;\n  letter-spacing: .8px;\n  /* color: white; */\n}\n  "],"sourceRoot":""}]);
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
/* harmony import */ var _img_julien_flutto_ZEDjKAuS8u0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg */ "./src/img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg");
/* harmony import */ var _img_valentin_muller_bWtd1ZyEy6w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg */ "./src/img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg");










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

const checkWeather = (temp, weather) => {
    const imgIcon = document.querySelector('#imgIcon');
    if (weather === 'Snow') {
        imgIcon.src = _amcharts_weather_icons_1_0_0_animated_snowy_3_svg__WEBPACK_IMPORTED_MODULE_1__;
    } else if (weather === 'Clouds') {
        imgIcon.src = _amcharts_weather_icons_1_0_0_animated_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sUUFBUSxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFlBQVks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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7QUFDYTtBQUN4QjtBQUNyQjs7O0FBR0EsbURBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvaW1nLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNTAsIDU2LCAuOSk7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxODYsMTM3LDE1OSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7IFxcbn1cXG5cXG4vKiAuYm9keS1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltZy9qdWxpZW4tZmx1dHRvLVpFRGpLQXVTOHUwLXVuc3BsYXNoLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcbi8qIC5iYWNrZ3JvdW5kLXJhaW4ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1nL3ZhbGVudGluLW11bGxlci1iV3RkMVp5RXk2dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNTAsIDU2LCAuOCk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIHBhZGRpbmc6IDI1cHg7ICovXFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA1MCwgNTYsIC44KTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTIzLCAxMjYpOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMi43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA4NSwgOTQpOyAqL1xcbn1cXG5cXG5cXG5cXG5cXG4ucmlwcGxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgfVxcbiAgLnJpcHBsZSBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHJpcHBsZSB7XFxuICAgIDAlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcblxcblxcbi8qIGlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xcbiAgfVxcbiAgXFxuaW5wdXQ6dmFsaWQge1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn0gKi9cXG5cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICAvKiB3aWR0aDogMzV2dztcXG4gIGhlaWdodDogMzVweDsgKi9cXG4gIC8qIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDI1JTsgKi9cXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcXG4gIGNvbG9yOiByZ2JhKDU3LDcxLDg3LC44KTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1Nyw3MSw4Nyk7ICovXFxufSBcXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNTcsNzEsODcsLjkpO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNTcsNzEsODcsLjkpO1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAqL1xcbiAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxNTgsIDE5Nyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDIyMSwgMjIzLCAuMik7ICovXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMTg2LDEzNywxNTksIC4zKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxODYsMTM3LDE1OSwxKSAwJSwgcmdiYSg1Nyw3MSw4NywxKSAxMDAlKTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjYpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcbiNjaXR5IHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjhweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiAjaWNvblNWRyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2FtY2hhcnRzX3dlYXRoZXJfaWNvbnNfMS4wLjAvYW5pbWF0ZWQvcmFpbnktMy5zdmcpO1xcbn0gKi9cXG5cXG5cXG5cXG4jc3dpdGNoIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcblxcbi8qIC5sb2FkZXIge1xcbiAgICBmbGV4OiAuMjU7XFxufSAqL1xcblxcblxcbi5pbmZvIHtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuLypzd2l0Y2gqL1xcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgc2xpZGVyICovXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIH1cXG5cXG4udGl0bGUtY29udGFpbmVye1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgZmxleDogLjc1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uRkMtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jc3dpdGNoLXRlbXAtdHlwZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW47IFxcbn1cXG5cXG4jc3dpdGNoLXRlbXAtdHlwZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTU4LCAxOTcpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiKDAgMCAwIC8gMC41KTsgKi9cXG59XFxuXFxuI3N3aXRjaC10ZW1wLXR5cGU6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC40KTtcXG59XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI3dlYXRoZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuOXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXRhLWNvbG9yIHtcXG4gICAgY29sb3I6IHJnYig4OSwgMTg5LCAyNTUpO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG4jZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47ICovXFxuICAvKiB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgKi9cXG4gIC8qIGdhcDogMCAxNXB4OyAqL1xcbn1cXG5cXG4uY2l0eS1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjEsIDIyMyk7IFxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigxODYsMTM3LDE1OSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7ICAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC44KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuXFxuI2NpdHlJY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjEsIDIyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjYpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIyMSwgMjIzKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1Nyw3MSw4NywuNCk7XFxuICAgIC8qIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAgMCAwIC8gMC42KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3dlYXRoZXIge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuOHB4O1xcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWjs0REFDd0Q7SUFDeEQsd0lBQXdJO0lBQ3hJLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsa0ZBQWtGO0FBQ3RGOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIOzs7Ozs7O0dBT0c7OztBQUdIO0lBQ0ksWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsU0FBUztJQUNULHVDQUF1QztBQUMzQzs7Ozs7QUFLQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwwREFBMEQ7RUFDNUQ7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFFBQVE7TUFDUixTQUFTO01BQ1QsVUFBVTtJQUNaO0lBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtJQUNaO0VBQ0Y7Ozs7O0FBS0Y7Ozs7OztHQU1HOzs7QUFHSDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO2lCQUNlO0VBQ2Y7Z0JBQ2M7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxTQUFTO0lBQ1QsK0NBQStDO0lBQy9DOzs4Q0FFMEM7SUFDMUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTs7R0FFRzs7OztBQUlIO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTs7R0FFRzs7O0FBR0g7SUFDSSxPQUFPO0FBQ1g7O0FBRUEsU0FBUztBQUNUO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBLGVBQWU7RUFDZjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0VBQzdCOztBQUVGO0lBQ0ksT0FBTztJQUNQLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQztpQkFDZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1g7OENBQzBDO0lBQzFDOzBGQUNzRjtJQUN0Rix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLG1DQUFtQztJQUNuQyw2Q0FBNkM7SUFDN0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxtQ0FBbUM7SUFDbkMsNkNBQTZDO0lBQzdDLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgKi9cXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNTAsIDU2LCAuOSk7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYigxODYsMTM3LDE1OSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7IFxcbn1cXG5cXG4vKiAuYm9keS1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltZy9qdWxpZW4tZmx1dHRvLVpFRGpLQXVTOHUwLXVuc3BsYXNoLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcbi8qIC5iYWNrZ3JvdW5kLXJhaW4ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1nL3ZhbGVudGluLW11bGxlci1iV3RkMVp5RXk2dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufSAqL1xcblxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNTAsIDU2LCAuOCk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIHBhZGRpbmc6IDI1cHg7ICovXFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA1MCwgNTYsIC44KTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTIzLCAxMjYpOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMi43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCA4NSwgOTQpOyAqL1xcbn1cXG5cXG5cXG5cXG5cXG4ucmlwcGxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgfVxcbiAgLnJpcHBsZSBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG4gIH1cXG4gIC5yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIHJpcHBsZSB7XFxuICAgIDAlIHtcXG4gICAgICB0b3A6IDM2cHg7XFxuICAgICAgbGVmdDogMzZweDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAwcHg7XFxuICAgICAgd2lkdGg6IDcycHg7XFxuICAgICAgaGVpZ2h0OiA3MnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcblxcblxcbi8qIGlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmVkO1xcbiAgfVxcbiAgXFxuaW5wdXQ6dmFsaWQge1xcbmJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn0gKi9cXG5cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICAvKiB3aWR0aDogMzV2dztcXG4gIGhlaWdodDogMzVweDsgKi9cXG4gIC8qIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDI1JTsgKi9cXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcXG4gIGNvbG9yOiByZ2JhKDU3LDcxLDg3LC44KTtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1Nyw3MSw4Nyk7ICovXFxufSBcXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNTcsNzEsODcsLjkpO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNTcsNzEsODcsLjkpO1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAqL1xcbiAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxNTgsIDE5Nyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDIyMSwgMjIzLCAuMik7ICovXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMTg2LDEzNywxNTksIC4zKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxODYsMTM3LDE1OSwxKSAwJSwgcmdiYSg1Nyw3MSw4NywxKSAxMDAlKTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2IoMCAwIDAgLyAwLjYpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcbiNjaXR5IHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjhweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiAjaWNvblNWRyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2FtY2hhcnRzX3dlYXRoZXJfaWNvbnNfMS4wLjAvYW5pbWF0ZWQvcmFpbnktMy5zdmcpO1xcbn0gKi9cXG5cXG5cXG5cXG4jc3dpdGNoIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcblxcblxcbi8qIC5sb2FkZXIge1xcbiAgICBmbGV4OiAuMjU7XFxufSAqL1xcblxcblxcbi5pbmZvIHtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuLypzd2l0Y2gqL1xcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgc2xpZGVyICovXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlci5yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICB9XFxuICBcXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIH1cXG5cXG4udGl0bGUtY29udGFpbmVye1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgZmxleDogLjc1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uRkMtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jc3dpdGNoLXRlbXAtdHlwZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW47IFxcbn1cXG5cXG4jc3dpdGNoLXRlbXAtdHlwZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTU4LCAxOTcpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiKDAgMCAwIC8gMC41KTsgKi9cXG59XFxuXFxuI3N3aXRjaC10ZW1wLXR5cGU6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC40KTtcXG59XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI3dlYXRoZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuOXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXRhLWNvbG9yIHtcXG4gICAgY29sb3I6IHJnYig4OSwgMTg5LCAyNTUpO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG4jZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47ICovXFxuICAvKiB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgKi9cXG4gIC8qIGdhcDogMCAxNXB4OyAqL1xcbn1cXG5cXG4uY2l0eS1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjEsIDIyMyk7IFxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigxODYsMTM3LDE1OSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTg2LDEzNywxNTksMSkgMCUsIHJnYmEoNTcsNzEsODcsMSkgMTAwJSk7ICAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LDcxLDg3LC44KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuXFxuI2NpdHlJY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjEsIDIyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsNzEsODcsLjYpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYigwIDAgMCAvIDAuNik7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIyMSwgMjIzKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1Nyw3MSw4NywuNCk7XFxuICAgIC8qIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiKDAgMCAwIC8gMC42KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3dlYXRoZXIge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuOHB4O1xcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuY29uc3Qgc2VsZWN0RWxlbWVudCA9IChzZWxlY3RvciwgcmVtb3ZlT3JBZGQsIHNwZWNpZmljQ2xhc3MpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn1gKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmVPckFkZChgJHtzcGVjaWZpY0NsYXNzfWApO1xuICAgIHJldHVybiBpdGVtO1xufSBcblxuXG5jb25zdCBkaXNwbGF5TG9hZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGVyJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgncmlwcGxlJyk7XG59XG5cbmNvbnN0IGhpZGVMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgY29uc3QgY2l0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWNvbnRhaW5lcicpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdyaXBwbGUnKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIC8vIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICAvLyB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1jb250YWluZXInKTtcbiAgICBjaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICBjaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpdHktY29udGFpbmVyJyk7XG4gICAgbWFpbkJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbn1cblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5TG9hZGluZyxcbiAgICBoaWRlTG9hZGluZyxcbiAgICBzZWxlY3RFbGVtZW50XG59IiwiaW1wb3J0IHtnZXREYXRhLCBnZXRHZW9Mb2NhdGlvbiwgZ2V0Rm9yZWNhc3R9IGZyb20gXCIuL2dldERhdGFcIjtcbmltcG9ydCB7IGRpc3BsYXlMb2FkaW5nLCBoaWRlTG9hZGluZyB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHtkaXNwbGF5U1ZHLCBzaG93SW1nLCBjaGVja1dlYXRoZXJ9IGZyb20gJy4vaW1nJztcbmltcG9ydCBXZWF0aGVyIGZyb20gXCIuL2NsYXNzXCI7XG5cbmNvbnN0IGdldElucHV0VmFsdWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1pbnB1dCcpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgaWYobWFpbkJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluJykpIHtcbiAgICAgICAgICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4nKTtcbiAgICAgICAgICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGRhdGFBc3luYyh2KTtcbiAgICB9KVxufVxuXG5jb25zdCB0aW1lT3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVPdXQgPSBzZXRUaW1lb3V0KChkaXNwbGF5TG9hZGluZykgPT4ge1xuICAgICAgIGhpZGVMb2FkaW5nKCk7XG4gICAgfSwxMDAwKVxuICAgIHJldHVybiB0aW1lT3V0XG59XG5cbmNvbnN0IGNsZWFyID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVPdXQpO1xuXG5cbmNvbnN0IGRhdGFBc3luYyA9IGFzeW5jICh2KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGM7XG4gICAgICAgIGxldCBmO1xuICAgICAgICBnZXRHZW9Mb2NhdGlvbih2KS50aGVuKGFzeW5jIGdlbyA9PiB7XG4gICAgICAgICAgICBjID0gYXdhaXQgZ2V0RGF0YShnZW9bJ2xhdCddLCBnZW9bJ2xvbiddKTtcbiAgICAgICAgICAgIGYgPSBhd2FpdCBnZXRGb3JlY2FzdChnZW9bJ2xhdCddLCBnZW9bJ2xvbiddKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZik7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfSkudGhlbihjID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aW1lT3V0KGRpc3BsYXlMb2FkaW5nKCkpO1xuICAgICAgICAgICAgZ2V0TmFtZShjLm5hbWUpO1xuICAgICAgICAgICAgZ2V0VGVtcChNYXRoLnJvdW5kKGMubWFpbi50ZW1wKSArICfCsCcpO1xuICAgICAgICAgICAgZ2V0V2luZChNYXRoLnJvdW5kKGMud2luZC5zcGVlZCksIE1hdGgucm91bmQoYy53aW5kLmRlZykpO1xuICAgICAgICAgICAgZ2V0SHVtaWRpdHkoYy5tYWluLmh1bWlkaXR5ICsgJyUnKTtcbiAgICAgICAgICAgIGdldEZlZWxzTGlrZShjLm1haW4uZmVlbHNfbGlrZSArICfCsCcpO1xuICAgICAgICAgICAgZ2V0V2VhdGhlclR5cGUoYy53ZWF0aGVyWzBdLm1haW4pO1xuICAgICAgICAgICAgZ2V0VmlzaWJpbGl0eShjLnZpc2liaWxpdHkpO1xuICAgICAgICAgICAgY2xlYXIodCk7XG4gICAgICAgICAgICBjaGVja1dlYXRoZXIoYy5tYWluLnRlbXAsIGMud2VhdGhlclswXS5tYWluKTtcbiAgICAgICAgICAgIC8vIGRpc3BsYXlTVkcoYyk7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9ICAgXG59XG5cblxuLy9VU0lORyBDTEFTUyBXRUFUSEVSXG4vLyBjb25zdCBkYXRhQXN5bmMgPSBhc3luYyAodikgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIGxldCBjO1xuLy8gICAgICAgICBnZXRHZW9Mb2NhdGlvbih2KS50aGVuKGFzeW5jIGdlbyA9PiB7XG4vLyAgICAgICAgICAgICBjID0gYXdhaXQgZ2V0RGF0YShnZW9bJ2xhdCddLCBnZW9bJ2xvbiddKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGMpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGM7XG4vLyAgICAgICAgIH0pLnRoZW4oYyA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCB0ID0gdGltZU91dChkaXNwbGF5TG9hZGluZygpKVxuLy8gICAgICAgICAgICAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyKGMpXG4vLyAgICAgICAgICAgICByZXR1cm4gYztcbi8vICAgICAgICAgfSlcbi8vICAgICB9Y2F0Y2ggKGVycikge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgIH1cbiAgICBcbi8vIH1cblxuXG5jb25zdCBnZXROYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbiAgICBjaXR5LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbn1cblxuY29uc3QgZ2V0VGVtcCA9ICh0KSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wLXNwYW4nKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdDtcbiAgICByZXR1cm4gdDtcbn1cblxuY29uc3QgZ2V0V2luZCA9ICh3aW5kU3BlZWQsIGRpcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRpcik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwYW4nKTtcbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGlmIChkaXIgPD0gMTEuMjUgJiYgZGlyID49IDM0OC43NSkge1xuICAgICAgICBkaXJlY3Rpb24gPT09ICdOJztcbiAgICB9IGVsc2UgaWYgKGRpciA8PSAyMzYuMjUgJiYgZGlyID49IDIxMy43NSkge1xuICAgICAgICBkaXJlY3Rpb24gPT09ICdTVyc7XG4gICAgfSBlbHNlIGlmIChkaXIgPD0gMjEzLjc1ICYmIGRpciA+PSAxOTEuMjUpIHtcbiAgICAgICAgZGlyZWN0aW9uID09PSAnU1NXJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhFcnJvcik7XG4gICAgfVxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHt3aW5kU3BlZWR9bXBoICR7ZGlyZWN0aW9ufWA7XG4gICAgcmV0dXJuIHdpbmRTcGVlZDtcbn1cbmNvbnN0IGdldEh1bWlkaXR5ID0gKGgpID0+IHtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eS1zcGFuJyk7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBoO1xuICAgIHJldHVybiBoO1xufVxuY29uc3QgZ2V0RmVlbHNMaWtlID0oZikgPT4ge1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXNwYW4nKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBmO1xuICAgIHJldHVybiBmO1xufVxuY29uc3QgZ2V0V2VhdGhlclR5cGUgPSAodykgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpO1xuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSB3O1xuICAgIC8vIGRpc3BsYXlTVkcodyk7XG4gICAgc2hvd0ltZyh3KTtcbiAgICByZXR1cm4gdztcbn1cblxuY29uc3QgZ2V0VmlzaWJpbGl0eSA9ICh2KSA9PiB7XG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmlsaXR5LXNwYW4nKTtcbiAgICBjb25zdCB2TWlsZXMgPSAwLjAwMDYyIC8gdjtcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gdk1pbGVzO1xuICAgIHJldHVybiB2TWlsZXM7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0SW5wdXRWYWx1ZSxcbiAgICBkaXNwbGF5TG9hZGluZyxcbiAgICBoaWRlTG9hZGluZ1xufSIsImNsYXNzIFdlYXRoZXIge1xuICAgIGNvbnN0cnVjdG9yKHt3ZWF0aGVyLCBuYW1lLCB3aW5kLCBtYWluLCB2aXNpYmlsaXR5fSkge1xuICAgICAgICB0aGlzLndlYXRoZXIgPSB3ZWF0aGVyLFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lLCBcbiAgICAgICAgdGhpcy53aW5kID0gd2luZCwgXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW4sXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHZpc2liaWxpdHlcbiAgICB9XG5cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JyArIHRoaXMud2VhdGhlcik7XG4gICAgfVxuICAgIGdldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbiAgICAgICAgY2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH0gXG4gICAgZ2V0VGVtcCA9ICh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcC1zcGFuJyk7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSB0O1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgZ2V0V2luZCA9ICh3aW5kU3BlZWQpID0+IHtcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwYW4nKTtcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9IHdpbmRTcGVlZDtcbiAgICAgICAgcmV0dXJuIHdpbmRTcGVlZDtcbiAgICB9XG4gICAgZ2V0SHVtaWRpdHkgPSAoaCkgPT4ge1xuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eS1zcGFuJyk7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gaDtcbiAgICAgICAgcmV0dXJuIGg7XG4gICAgfVxuICAgIGdldEZlZWxzTGlrZSA9IChmKSA9PiB7XG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXNwYW4nKTtcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gZjtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfVxuICAgIGdldFdlYXRoZXJUeXBlID0gKHcpID0+IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG4gICAgICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSB3O1xuICAgICAgICAvLyBkaXNwbGF5U1ZHKHcpO1xuICAgICAgICBzaG93SW1nKHcpO1xuICAgICAgICByZXR1cm4gdztcbiAgICB9XG4gICAgZ2V0VmlzaWJpbGl0eSAodikge1xuICAgICAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Zpc2liaWxpdHknKTtcbiAgICAgICAgY29uc3Qgdk1pbGVzID0gdiAvIDAuMDAwNjIxMzcxMjtcbiAgICAgICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IHZNaWxlcztcbiAgICAgICAgcmV0dXJuIHZNaWxlcztcbiAgICB9XG5cbiAgICBnZXRJdGVtIChkYXRhLCBlbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbH1gKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7IiwiaW1wb3J0IHsgZGlzcGxheUxvYWRpbmcsIGhpZGVMb2FkaW5nIH0gZnJvbSBcIi4vYXBwXCI7XG5cblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChsYXQsIGxvbikgPT4ge1xuICAgIGxldCBEQVRBO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9NzcwNmMzZDU4ODE5MDVkYzcxZDQxYWJlNmZjMTE5NzQmdW5pdHM9aW1wZXJpYWxgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGlmKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBEQVRBID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coREFUQSk7XG4gICAgICAgICAgICBjb25zdCB7d2VhdGhlciwgbWFpbiwgd2luZCwgbmFtZSwgdmlzaWJpbGl0eX0gPSBEQVRBO1xuICAgICAgICAgICAgbGV0IHdlYXRoZXJEYXRhID0ge3dlYXRoZXIsIG1haW4sIHdpbmQsIG5hbWUsIHZpc2liaWxpdHl9O1xuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWplY3RlZDogJywgZXJyKTtcbiAgICB9XG59O1xuXG5cbmNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgKGxhdCwgbG9uKSA9PiB7XG4gICAgbGV0IEZPUkVDQVNUO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPTc3MDZjM2Q1ODgxOTA1ZGM3MWQ0MWFiZTZmYzExOTc0JnVuaXRzPWltcGVyaWFsYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBpZighcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRk9SRUNBU1QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAvLyBjb25zdCB7d2VhdGhlciwgbWFpbiwgd2luZCwgbmFtZSwgdmlzaWJpbGl0eX0gPSBEQVRBO1xuICAgICAgICAgICAgLy8gbGV0IHdlYXRoZXJEYXRhID0ge3dlYXRoZXIsIG1haW4sIHdpbmQsIG5hbWUsIHZpc2liaWxpdHl9O1xuICAgICAgICAgICAgLy8gcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgICAgICAgICAgcmV0dXJuIEZPUkVDQVNUO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWplY3RlZDogJywgZXJyKTtcbiAgICB9XG59O1xuXG5cbmNvbnN0IGdldEdlb0xvY2F0aW9uID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBsZXQgZ2VvTG9jYXRpb24gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD03NzA2YzNkNTg4MTkwNWRjNzFkNDFhYmU2ZmMxMTk3NGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgbGV0IEdFTyA9IGF3YWl0IGdlb0xvY2F0aW9uLmpzb24oKTtcbiAgICAgICAgY29uc3QgbGF0ID0gR0VPWzBdLmxhdDtcbiAgICAgICAgY29uc3QgbG9uID0gR0VPWzBdLmxvbjtcbiAgICAgICAgcmV0dXJuIHtsYXQsIGxvbn07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLCAncmVqZWN0ZWQnKTtcbiAgICAgICAgY29uc3QgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNpdHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1jb250YWluZXInKTtcbiAgICAgICAgbmV3RWwudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgQ2l0eSc7XG4gICAgICAgIGNpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBnZXRHZW9Mb2NhdGlvbixcbiAgICBnZXREYXRhLFxuICAgIGdldEZvcmVjYXN0XG59XG5cbiIsIlxuXG5pbXBvcnQgcmFpbiBmcm9tICcuL2FtY2hhcnRzX3dlYXRoZXJfaWNvbnNfMS4wLjAvYW5pbWF0ZWQvcmFpbnktMy5zdmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL3Nub3d5LTMuc3ZnJztcbmltcG9ydCBoZWF2eVNub3cgZnJvbSAnLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL3Nub3d5LTYuc3ZnJztcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi9hbWNoYXJ0c193ZWF0aGVyX2ljb25zXzEuMC4wL2FuaW1hdGVkL2Nsb3VkeS5zdmcnO1xuXG5pbXBvcnQgc3VubnkgZnJvbSAnLi9pbWcvanVsaWVuLWZsdXR0by1aRURqS0F1Uzh1MC11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IHJhaW55IGZyb20gJy4vaW1nL3ZhbGVudGluLW11bGxlci1iV3RkMVp5RXk2dy11bnNwbGFzaC5qcGcnXG5cbi8vIGNvbnN0IGRpc3BsYXlTVkcgPSAod2VhdGhlclR5cGUpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyVHlwZSk7XG4vLyAgICAgLy8gY29uc3QgaWNvblNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uU1ZHJyk7XG4vLyAgICAgY29uc3QgaW1nU1ZHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb25TVkcnKTtcbi8vICAgICAvLyBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4vLyAgICAgaWYgKHdlYXRoZXJUeXBlID09PSAnUmFpbicpIHtcbi8vICAgICAgICAgaW1nU1ZHLnNyYyA9IHJhaW47XG4vLyAgICAgfVxuLy8gICAgIC8vIGFwcGVuZENoaWxkKGljb24pO1xuLy8gfVxuXG5cblxuLy8gZXhwb3J0IHtkaXNwbGF5U1ZHfVxuXG5jb25zdCBjaGVja1dlYXRoZXIgPSAodGVtcCwgd2VhdGhlcikgPT4ge1xuICAgIGNvbnN0IGltZ0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nSWNvbicpO1xuICAgIGlmICh3ZWF0aGVyID09PSAnU25vdycpIHtcbiAgICAgICAgaW1nSWNvbi5zcmMgPSBzbm93O1xuICAgIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gJ0Nsb3VkcycpIHtcbiAgICAgICAgaW1nSWNvbi5zcmMgPSBjbG91ZHk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuXG5jb25zdCBzaG93SW1nID0gKHdlYXRoZXJUeXBlKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN1bm55SW1nID0gbmV3IEltYWdlKCk7XG4gICAgLy8gaWYgKHdlYXRoZXJUeXBlID09PSAnUmFpbicpIHtcbiAgICAvLyAgICAgc3VubnlJbWcuc3JjID0gcmFpbnk7XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1kZWZhdWx0Jyk7XG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1yYWluJyk7XG4gICAgLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoLi9pbWcvdmFsZW50aW4tbXVsbGVyLWJXdGQxWnlFeTZ3LXVuc3BsYXNoLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjb3Zlcic7XG4gICAgLy8gICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICAgIC8vIH1cbiAgICAvLyAvLyBzdW5ueUltZy5zcmMgPSBzdW5ueTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bm55SW1nKVxufVxuXG5leHBvcnQge1xuICAgIC8vIGRpc3BsYXlTVkcsIFxuICAgIHNob3dJbWcsXG4gICAgY2hlY2tXZWF0aGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHtnZXRJbnB1dFZhbHVlLCBnZXRDaXR5fSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCBjaXR5IGZyb20gJy4vY2l0aWVzL2NpdHkubGlzdC5qc29uJ1xuXG5cbmdldElucHV0VmFsdWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9