/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue),
/* harmony export */   "displayLoading": () => (/* binding */ displayLoading),
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");


const getInputValue = () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let v = input.value;
        Data(v);
        
    })
}

const displayLoading = () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.remove('display');
    }, 3000);
}

const hideLoading = () => {
    const loader = document.getElementById('loader');
    const mainBody = document.querySelector('#main');
    loader.classList.add('display');
    mainBody.classList.remove('display');
}

const Data = async (v) => {
    let c = (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(v).then(data => {
        hideLoading();
        console.log(data); 
        const {main, weather, name, wind} = data;
        console.log(main, weather);
            getName(name);
            getTemp(main.temp);
            getWind(wind.speed);
    })   
    .catch(c => {
        console.log(c);
    });
    
}

const getName = (name) => {
    const city = document.querySelector('#city');
    city.textContent = name;
    return name;
}

const getTemp = (t) => {
    const temp = document.getElementById('temp');
    temp.textContent = t;
    return t;
}

const getWind = (windSpeed) => {
    const wind = document.getElementById('wind');
    wind.textContent = windSpeed;
    return windSpeed;
}



/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


const getData = async (city) => {
    (0,_app__WEBPACK_IMPORTED_MODULE_0__.displayLoading)();
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } 
        return await response.json();
    } catch (err) {
        console.log('rejected: ', err);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");



(0,_app__WEBPACK_IMPORTED_MODULE_1__.getInputValue)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvREFBTztBQUNuQjtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEb0Q7O0FBRXBEO0FBQ0EsSUFBSSxvREFBYztBQUNsQjtBQUNBLHVGQUF1RixLQUFLLDJDQUEyQyxhQUFhO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7OztVQ2Z0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNhOztBQUU3QyxtREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBhcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGFwaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9nZXREYXRhXCI7XG5cbmNvbnN0IGdldElucHV0VmFsdWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1pbnB1dCcpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIERhdGEodik7XG4gICAgICAgIFxuICAgIH0pXG59XG5cbmNvbnN0IGRpc3BsYXlMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICB9LCAzMDAwKTtcbn1cblxuY29uc3QgaGlkZUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbn1cblxuY29uc3QgRGF0YSA9IGFzeW5jICh2KSA9PiB7XG4gICAgbGV0IGMgPSBnZXREYXRhKHYpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGhpZGVMb2FkaW5nKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyBcbiAgICAgICAgY29uc3Qge21haW4sIHdlYXRoZXIsIG5hbWUsIHdpbmR9ID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbiwgd2VhdGhlcik7XG4gICAgICAgICAgICBnZXROYW1lKG5hbWUpO1xuICAgICAgICAgICAgZ2V0VGVtcChtYWluLnRlbXApO1xuICAgICAgICAgICAgZ2V0V2luZCh3aW5kLnNwZWVkKTtcbiAgICB9KSAgIFxuICAgIC5jYXRjaChjID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYyk7XG4gICAgfSk7XG4gICAgXG59XG5cbmNvbnN0IGdldE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHJldHVybiBuYW1lO1xufVxuXG5jb25zdCBnZXRUZW1wID0gKHQpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdDtcbiAgICByZXR1cm4gdDtcbn1cblxuY29uc3QgZ2V0V2luZCA9ICh3aW5kU3BlZWQpID0+IHtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcbiAgICB3aW5kLnRleHRDb250ZW50ID0gd2luZFNwZWVkO1xuICAgIHJldHVybiB3aW5kU3BlZWQ7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0SW5wdXRWYWx1ZSxcbiAgICBkaXNwbGF5TG9hZGluZyxcbiAgICBoaWRlTG9hZGluZ1xufSIsImltcG9ydCB7IGRpc3BsYXlMb2FkaW5nLCBoaWRlTG9hZGluZyB9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICBkaXNwbGF5TG9hZGluZygpO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD03NzA2YzNkNTg4MTkwNWRjNzFkNDFhYmU2ZmMxMTk3NGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlamVjdGVkOiAnLCBlcnIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGFcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHtnZXRJbnB1dFZhbHVlLCBnZXRDaXR5fSBmcm9tICcuL2FwcCc7XG5cbmdldElucHV0VmFsdWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9