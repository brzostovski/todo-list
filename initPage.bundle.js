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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function initPage() {
  let _pageContainer = document.createElement('div');
  _pageContainer.id = 'page-container';

  let _pageHeader = _initHeader();
  let _pageAside = _initAside();
  let _pageMain = _initMain(); // form will live on top of main
  let _pageFooter = _initFooter();

  let pageContents = {
    header: _pageHeader,
    aside: _pageAside,
    main: _pageMain,
    footer: _pageFooter,
  };

  Object.keys(pageContents).forEach(key => {
    _pageContainer.appendChild(pageContents[key]);
  });

  document.body.appendChild(_pageContainer);

  return {pageContents};
});

const _initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let _headerContent = {
    title: document.createElement('span'),
    addNote: document.createElement('button'),
  }

  _headerContent.title.textContent = 'Project: Todo List';
  _headerContent.addNote.textContent = '﹢';
  _headerContent.addNote.id = 'new-note-btn';

  Object.keys(_headerContent).forEach(key => {
    headerWrapper.appendChild(_headerContent[key]);
  });

  return headerWrapper;
});

const _initAside = (() => {
  let asideWrapper = document.createElement('aside');

  let _asideContent = {
    home: document.createElement('div'), // this will contain link to 'homepage' showing all notes
    flagged: document.createElement('div'), // this will display notes with flag:true
    projects: document.createElement('div'), // this will show subfolders ('projects') and allow to create new one
  }

  Object.keys(_asideContent).forEach(key => {
    _asideContent[key].id = key;
    _asideContent[key].textContent = key; // this will change to display section title
    asideWrapper.appendChild(_asideContent[key]);
  });

  return asideWrapper;
});

const _initMain = (() => {
  let mainWrapper = document.createElement('main');

  let _form = document.createElement('form');

  let _formContent = {
    title: {
      label: `<label for="title">Title:</label>`,
      input: `
        <input
        type="text"
        name="note-title"
        id="title"
        placeholder="Note title"
        required>`,
    },
    description: {
      label: `<label for="desc">Description:</label>`,
      input: `
      <input
      type="text"
      name="note-description"
      id="desc"
      placeholder="Note description"
      required>`,
    },
    date: {
      label: `<label for="date">Due date:</label>`,
      input: `<input type="text" name="due-date" id="date">`, // input will be date picker
    },
    flag: {
      button: `<label for="flag-button">Flagged</label>
        <input type="checkbox" id="flag-button">`, // should be stylized button that acts as toggle
    },
    submit: {
      button: `<button type="button" id="add-note-btn">Add note!</button>`,
    },
  }

  Object.keys(_formContent).forEach(key => {
    if ((key === 'flag') || (key === 'submit')) {
      _form.innerHTML += _formContent[key].button;
    } else {
      _form.innerHTML += _formContent[key].label;
      _form.innerHTML += _formContent[key].input;
    };
  });

  mainWrapper.appendChild(_form);

  return mainWrapper;
});

const _initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let _footerContent = {
    link: document.createElement('span'),
  }

  _footerContent.link.innerHTML =
  `© <a href="https://github.com/brzostovski" target="_blank">brzostovski</a> 2023`;

  Object.keys(_footerContent).forEach(key => {
    footerWrapper.appendChild(_footerContent[key]);
  });

  return footerWrapper;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsVUFBVTtBQUNWLENBQUMsRUFBRTs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5pdFBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gIGxldCBfcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfcGFnZUNvbnRhaW5lci5pZCA9ICdwYWdlLWNvbnRhaW5lcic7XG5cbiAgbGV0IF9wYWdlSGVhZGVyID0gX2luaXRIZWFkZXIoKTtcbiAgbGV0IF9wYWdlQXNpZGUgPSBfaW5pdEFzaWRlKCk7XG4gIGxldCBfcGFnZU1haW4gPSBfaW5pdE1haW4oKTsgLy8gZm9ybSB3aWxsIGxpdmUgb24gdG9wIG9mIG1haW5cbiAgbGV0IF9wYWdlRm9vdGVyID0gX2luaXRGb290ZXIoKTtcblxuICBsZXQgcGFnZUNvbnRlbnRzID0ge1xuICAgIGhlYWRlcjogX3BhZ2VIZWFkZXIsXG4gICAgYXNpZGU6IF9wYWdlQXNpZGUsXG4gICAgbWFpbjogX3BhZ2VNYWluLFxuICAgIGZvb3RlcjogX3BhZ2VGb290ZXIsXG4gIH07XG5cbiAgT2JqZWN0LmtleXMocGFnZUNvbnRlbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgX3BhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9wYWdlQ29udGFpbmVyKTtcblxuICByZXR1cm4ge3BhZ2VDb250ZW50c307XG59KTtcblxuY29uc3QgX2luaXRIZWFkZXIgPSAoKCkgPT4ge1xuICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGxldCBfaGVhZGVyQ29udGVudCA9IHtcbiAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIGFkZE5vdGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICB9XG5cbiAgX2hlYWRlckNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogVG9kbyBMaXN0JztcbiAgX2hlYWRlckNvbnRlbnQuYWRkTm90ZS50ZXh0Q29udGVudCA9ICfvuaInO1xuICBfaGVhZGVyQ29udGVudC5hZGROb3RlLmlkID0gJ25ldy1ub3RlLWJ0bic7XG5cbiAgT2JqZWN0LmtleXMoX2hlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdEFzaWRlID0gKCgpID0+IHtcbiAgbGV0IGFzaWRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG5cbiAgbGV0IF9hc2lkZUNvbnRlbnQgPSB7XG4gICAgaG9tZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIC8vIHRoaXMgd2lsbCBjb250YWluIGxpbmsgdG8gJ2hvbWVwYWdlJyBzaG93aW5nIGFsbCBub3Rlc1xuICAgIGZsYWdnZWQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAvLyB0aGlzIHdpbGwgZGlzcGxheSBub3RlcyB3aXRoIGZsYWc6dHJ1ZVxuICAgIHByb2plY3RzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgLy8gdGhpcyB3aWxsIHNob3cgc3ViZm9sZGVycyAoJ3Byb2plY3RzJykgYW5kIGFsbG93IHRvIGNyZWF0ZSBuZXcgb25lXG4gIH1cblxuICBPYmplY3Qua2V5cyhfYXNpZGVDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgX2FzaWRlQ29udGVudFtrZXldLmlkID0ga2V5O1xuICAgIF9hc2lkZUNvbnRlbnRba2V5XS50ZXh0Q29udGVudCA9IGtleTsgLy8gdGhpcyB3aWxsIGNoYW5nZSB0byBkaXNwbGF5IHNlY3Rpb24gdGl0bGVcbiAgICBhc2lkZVdyYXBwZXIuYXBwZW5kQ2hpbGQoX2FzaWRlQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgbGV0IF9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGxldCBfZm9ybUNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5gLFxuICAgICAgaW5wdXQ6IGBcbiAgICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIm5vdGUtdGl0bGVcIlxuICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIHRpdGxlXCJcbiAgICAgICAgcmVxdWlyZWQ+YCxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkZXNjXCI+RGVzY3JpcHRpb246PC9sYWJlbD5gLFxuICAgICAgaW5wdXQ6IGBcbiAgICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgbmFtZT1cIm5vdGUtZGVzY3JpcHRpb25cIlxuICAgICAgaWQ9XCJkZXNjXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZSBkZXNjcmlwdGlvblwiXG4gICAgICByZXF1aXJlZD5gLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+YCxcbiAgICAgIGlucHV0OiBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImR1ZS1kYXRlXCIgaWQ9XCJkYXRlXCI+YCwgLy8gaW5wdXQgd2lsbCBiZSBkYXRlIHBpY2tlclxuICAgIH0sXG4gICAgZmxhZzoge1xuICAgICAgYnV0dG9uOiBgPGxhYmVsIGZvcj1cImZsYWctYnV0dG9uXCI+RmxhZ2dlZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWctYnV0dG9uXCI+YCwgLy8gc2hvdWxkIGJlIHN0eWxpemVkIGJ1dHRvbiB0aGF0IGFjdHMgYXMgdG9nZ2xlXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIGJ1dHRvbjogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLW5vdGUtYnRuXCI+QWRkIG5vdGUhPC9idXR0b24+YCxcbiAgICB9LFxuICB9XG5cbiAgT2JqZWN0LmtleXMoX2Zvcm1Db250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKChrZXkgPT09ICdmbGFnJykgfHwgKGtleSA9PT0gJ3N1Ym1pdCcpKSB7XG4gICAgICBfZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uYnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBfZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0ubGFiZWw7XG4gICAgICBfZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uaW5wdXQ7XG4gICAgfTtcbiAgfSk7XG5cbiAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoX2Zvcm0pO1xuXG4gIHJldHVybiBtYWluV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdEZvb3RlciA9ICgoKSA9PiB7XG4gIGxldCBmb290ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgbGV0IF9mb290ZXJDb250ZW50ID0ge1xuICAgIGxpbms6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgfVxuXG4gIF9mb290ZXJDb250ZW50LmxpbmsuaW5uZXJIVE1MID1cbiAgYMKpIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT4gMjAyM2A7XG5cbiAgT2JqZWN0LmtleXMoX2Zvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBmb290ZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9mb290ZXJDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gZm9vdGVyV3JhcHBlcjtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==