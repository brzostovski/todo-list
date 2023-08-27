/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
function initPage() {
  let pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';

  let pageContents = {
    header: initHeader,
    homePage: initMain,
    footer: initFooter,
  };

  Object.keys(pageContents).forEach(key => {
    pageContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(pageContainer);
}

const initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let headerContent = {
    title: document.createElement('span'),
  }

  headerContent.title.textContent = 'Project: Todo List';

  Object.keys(headerContent).forEach(key => {
    headerWrapper.appendChild(headerContent[key]);
  });

  return headerWrapper;
})();

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  
  mainWrapper.textContent = 'dummy text';

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    title: document.createElement('span'),
  }

  footerContent.title.innerHTML = `<span>
    ©
    <a href="https://github.com/brzostovski" target="_blank">brzostovski</a>
    2023
  </span>`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdFBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFnZUNvbnRhaW5lci5pZCA9ICdwYWdlLWNvbnRhaW5lcic7XG5cbiAgbGV0IHBhZ2VDb250ZW50cyA9IHtcbiAgICBoZWFkZXI6IGluaXRIZWFkZXIsXG4gICAgaG9tZVBhZ2U6IGluaXRNYWluLFxuICAgIGZvb3RlcjogaW5pdEZvb3RlcixcbiAgfTtcblxuICBPYmplY3Qua2V5cyhwYWdlQ29udGVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50c1trZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUNvbnRhaW5lcik7XG59XG5cbmNvbnN0IGluaXRIZWFkZXIgPSAoKCkgPT4ge1xuICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGxldCBoZWFkZXJDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gIH1cblxuICBoZWFkZXJDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6IFRvZG8gTGlzdCc7XG5cbiAgT2JqZWN0LmtleXMoaGVhZGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcldyYXBwZXI7XG59KSgpO1xuXG5jb25zdCBpbml0TWFpbiA9ICgoKSA9PiB7XG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgXG4gIG1haW5XcmFwcGVyLnRleHRDb250ZW50ID0gJ2R1bW15IHRleHQnO1xuXG4gIHJldHVybiBtYWluV3JhcHBlcjtcbn0pKCk7XG5cbmNvbnN0IGluaXRGb290ZXIgPSAoKCkgPT4ge1xuICBsZXQgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGxldCBmb290ZXJDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gIH1cblxuICBmb290ZXJDb250ZW50LnRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj5cbiAgICDCqVxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT5cbiAgICAyMDIzXG4gIDwvc3Bhbj5gO1xuXG4gIE9iamVjdC5rZXlzKGZvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBmb290ZXJXcmFwcGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=