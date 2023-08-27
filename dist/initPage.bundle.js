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
    aside: initAside,
    main: initMain,
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

const initAside = (() => {
  let asideWrapper = document.createElement('aside');

  let asideContent = {
    home: document.createElement('div'), // this will contain link to 'homepage' showing all notes
    flagged: document.createElement('div'), // this will display notes with flag:true
    projects: document.createElement('div'), // this will show subfolders ('projects') and allow to create new one
  }

  Object.keys(asideContent).forEach(key => {
    asideContent[key].id = key;
    asideContent[key].textContent = key; // this will change to display section title
    asideWrapper.appendChild(asideContent[key]);
  });

  return asideWrapper;
})();

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  
  mainWrapper.textContent = 'dummy text';

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    link: document.createElement('span'),
  }

  footerContent.link.innerHTML =
  `© <a href="https://github.com/brzostovski" target="_blank">brzostovski</a> 2023`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luaXRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gIGxldCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBhZ2VDb250YWluZXIuaWQgPSAncGFnZS1jb250YWluZXInO1xuXG4gIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgaGVhZGVyOiBpbml0SGVhZGVyLFxuICAgIGFzaWRlOiBpbml0QXNpZGUsXG4gICAgbWFpbjogaW5pdE1haW4sXG4gICAgZm9vdGVyOiBpbml0Rm9vdGVyLFxuICB9O1xuXG4gIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcbn1cblxuY29uc3QgaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgbGV0IGhlYWRlckNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgfVxuXG4gIGhlYWRlckNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogVG9kbyBMaXN0JztcblxuICBPYmplY3Qua2V5cyhoZWFkZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0pKCk7XG5cbmNvbnN0IGluaXRBc2lkZSA9ICgoKSA9PiB7XG4gIGxldCBhc2lkZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuXG4gIGxldCBhc2lkZUNvbnRlbnQgPSB7XG4gICAgaG9tZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIC8vIHRoaXMgd2lsbCBjb250YWluIGxpbmsgdG8gJ2hvbWVwYWdlJyBzaG93aW5nIGFsbCBub3Rlc1xuICAgIGZsYWdnZWQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAvLyB0aGlzIHdpbGwgZGlzcGxheSBub3RlcyB3aXRoIGZsYWc6dHJ1ZVxuICAgIHByb2plY3RzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgLy8gdGhpcyB3aWxsIHNob3cgc3ViZm9sZGVycyAoJ3Byb2plY3RzJykgYW5kIGFsbG93IHRvIGNyZWF0ZSBuZXcgb25lXG4gIH1cblxuICBPYmplY3Qua2V5cyhhc2lkZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBhc2lkZUNvbnRlbnRba2V5XS5pZCA9IGtleTtcbiAgICBhc2lkZUNvbnRlbnRba2V5XS50ZXh0Q29udGVudCA9IGtleTsgLy8gdGhpcyB3aWxsIGNoYW5nZSB0byBkaXNwbGF5IHNlY3Rpb24gdGl0bGVcbiAgICBhc2lkZVdyYXBwZXIuYXBwZW5kQ2hpbGQoYXNpZGVDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gYXNpZGVXcmFwcGVyO1xufSkoKTtcblxuY29uc3QgaW5pdE1haW4gPSAoKCkgPT4ge1xuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIFxuICBtYWluV3JhcHBlci50ZXh0Q29udGVudCA9ICdkdW1teSB0ZXh0JztcblxuICByZXR1cm4gbWFpbldyYXBwZXI7XG59KSgpO1xuXG5jb25zdCBpbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgbGV0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBsZXQgZm9vdGVyQ29udGVudCA9IHtcbiAgICBsaW5rOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gIH1cblxuICBmb290ZXJDb250ZW50LmxpbmsuaW5uZXJIVE1MID1cbiAgYMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT4gMjAyM2A7XG5cbiAgT2JqZWN0LmtleXMoZm9vdGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3RlcldyYXBwZXI7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==