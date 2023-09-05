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
    form: document.createElement('form'),
    addNote: document.createElement('button'),
  }

  _headerContent.title.textContent = 'Project: Todo List';
  _headerContent.addNote.textContent = '﹢';
  _headerContent.addNote.id = 'new-note-btn';

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
      _headerContent.form.innerHTML += _formContent[key].button;
    } else {
      _headerContent.form.innerHTML += _formContent[key].label;
      _headerContent.form.innerHTML += _formContent[key].input;
    };
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsVUFBVTtBQUNWLENBQUMsRUFBRTs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9wYWdlQ29udGFpbmVyLmlkID0gJ3BhZ2UtY29udGFpbmVyJztcblxuICBsZXQgX3BhZ2VIZWFkZXIgPSBfaW5pdEhlYWRlcigpO1xuICBsZXQgX3BhZ2VBc2lkZSA9IF9pbml0QXNpZGUoKTtcbiAgbGV0IF9wYWdlTWFpbiA9IF9pbml0TWFpbigpOyAvLyBmb3JtIHdpbGwgbGl2ZSBvbiB0b3Agb2YgbWFpblxuICBsZXQgX3BhZ2VGb290ZXIgPSBfaW5pdEZvb3RlcigpO1xuXG4gIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgaGVhZGVyOiBfcGFnZUhlYWRlcixcbiAgICBhc2lkZTogX3BhZ2VBc2lkZSxcbiAgICBtYWluOiBfcGFnZU1haW4sXG4gICAgZm9vdGVyOiBfcGFnZUZvb3RlcixcbiAgfTtcblxuICBPYmplY3Qua2V5cyhwYWdlQ29udGVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBfcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudHNba2V5XSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX3BhZ2VDb250YWluZXIpO1xuXG4gIHJldHVybiB7cGFnZUNvbnRlbnRzfTtcbn0pO1xuXG5jb25zdCBfaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgbGV0IF9oZWFkZXJDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgZm9ybTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLFxuICAgIGFkZE5vdGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICB9XG5cbiAgX2hlYWRlckNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogVG9kbyBMaXN0JztcbiAgX2hlYWRlckNvbnRlbnQuYWRkTm90ZS50ZXh0Q29udGVudCA9ICfvuaInO1xuICBfaGVhZGVyQ29udGVudC5hZGROb3RlLmlkID0gJ25ldy1ub3RlLWJ0bic7XG5cbiAgbGV0IF9mb3JtQ29udGVudCA9IHtcbiAgICB0aXRsZToge1xuICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwibm90ZS10aXRsZVwiXG4gICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgdGl0bGVcIlxuICAgICAgICByZXF1aXJlZD5gLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRlc2NcIj5EZXNjcmlwdGlvbjo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYFxuICAgICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBuYW1lPVwibm90ZS1kZXNjcmlwdGlvblwiXG4gICAgICBpZD1cImRlc2NcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIGRlc2NyaXB0aW9uXCJcbiAgICAgIHJlcXVpcmVkPmAsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIGRhdGU6PC9sYWJlbD5gLFxuICAgICAgaW5wdXQ6IGA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZHVlLWRhdGVcIiBpZD1cImRhdGVcIj5gLCAvLyBpbnB1dCB3aWxsIGJlIGRhdGUgcGlja2VyXG4gICAgfSxcbiAgICBmbGFnOiB7XG4gICAgICBidXR0b246IGA8bGFiZWwgZm9yPVwiZmxhZy1idXR0b25cIj5GbGFnZ2VkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZmxhZy1idXR0b25cIj5gLCAvLyBzaG91bGQgYmUgc3R5bGl6ZWQgYnV0dG9uIHRoYXQgYWN0cyBhcyB0b2dnbGVcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgYnV0dG9uOiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtbm90ZS1idG5cIj5BZGQgbm90ZSE8L2J1dHRvbj5gLFxuICAgIH0sXG4gIH1cblxuICBPYmplY3Qua2V5cyhfZm9ybUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoKGtleSA9PT0gJ2ZsYWcnKSB8fCAoa2V5ID09PSAnc3VibWl0JykpIHtcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmJ1dHRvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0ubGFiZWw7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5pbnB1dDtcbiAgICB9O1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhfaGVhZGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2hlYWRlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXJXcmFwcGVyO1xufSk7XG5cbmNvbnN0IF9pbml0QXNpZGUgPSAoKCkgPT4ge1xuICBsZXQgYXNpZGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcblxuICBsZXQgX2FzaWRlQ29udGVudCA9IHtcbiAgICBob21lOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgLy8gdGhpcyB3aWxsIGNvbnRhaW4gbGluayB0byAnaG9tZXBhZ2UnIHNob3dpbmcgYWxsIG5vdGVzXG4gICAgZmxhZ2dlZDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIC8vIHRoaXMgd2lsbCBkaXNwbGF5IG5vdGVzIHdpdGggZmxhZzp0cnVlXG4gICAgcHJvamVjdHM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAvLyB0aGlzIHdpbGwgc2hvdyBzdWJmb2xkZXJzICgncHJvamVjdHMnKSBhbmQgYWxsb3cgdG8gY3JlYXRlIG5ldyBvbmVcbiAgfVxuXG4gIE9iamVjdC5rZXlzKF9hc2lkZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBfYXNpZGVDb250ZW50W2tleV0uaWQgPSBrZXk7XG4gICAgX2FzaWRlQ29udGVudFtrZXldLnRleHRDb250ZW50ID0ga2V5OyAvLyB0aGlzIHdpbGwgY2hhbmdlIHRvIGRpc3BsYXkgc2VjdGlvbiB0aXRsZVxuICAgIGFzaWRlV3JhcHBlci5hcHBlbmRDaGlsZChfYXNpZGVDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gYXNpZGVXcmFwcGVyO1xufSk7XG5cbmNvbnN0IF9pbml0TWFpbiA9ICgoKSA9PiB7XG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICByZXR1cm4gbWFpbldyYXBwZXI7XG59KTtcblxuY29uc3QgX2luaXRGb290ZXIgPSAoKCkgPT4ge1xuICBsZXQgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGxldCBfZm9vdGVyQ29udGVudCA9IHtcbiAgICBsaW5rOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gIH1cblxuICBfZm9vdGVyQ29udGVudC5saW5rLmlubmVySFRNTCA9XG4gIGDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jyem9zdG92c2tpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YnJ6b3N0b3Zza2k8L2E+IDIwMjNgO1xuXG4gIE9iamVjdC5rZXlzKF9mb290ZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgZm9vdGVyV3JhcHBlci5hcHBlbmRDaGlsZChfZm9vdGVyQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3RlcldyYXBwZXI7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=