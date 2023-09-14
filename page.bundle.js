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
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function page() {
  return {
    init,
    checkFormValidity,
  };
});

const init = (() => {
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

  return {
    pageContents,
  };
});

const _initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let _headerContent = {
    title: document.createElement('span'),
    form: document.createElement('form'),
    toggleForm: document.createElement('button'),
  }

  _headerContent.title.textContent = 'Project: Todo List';
  _headerContent.form.classList.add('hidden');
  _headerContent.toggleForm.textContent = 'New note';
  _headerContent.toggleForm.id = 'toggle-form-btn';

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
      <textarea
      name="note-description"
      id="desc"
      wrap="soft"
      placeholder="Note description"
      required></textarea>`,
    },
    date: {
      label: `<label for="date">Due date:</label>`,
      input: `<input type="text" name="due-date" id="date">`, // input will be date picker
    },
    flag: {
      button: `<label for="flag-button">Flagged</label>
        <input type="checkbox" id="flag-button">`, // should be stylized button that acts as toggle
    },
    buttons: {
      button: `
        <div id="btn-container">
          <button type="button" id="add-note-btn">Add note!</button>
          <button type="button" id="cancel-btn">Cancel</button>
        </div>
      `,
    },
  }

  Object.keys(_formContent).forEach(key => {
    if (
      (key === 'flag') ||
      (key === 'buttons')) {
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

function checkFormValidity(form) {
  let isFormValid = form.checkValidity();
  if (!isFormValid) {
    form.reportValidity();
    return false;
  } else {
    return true;
  }
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxpRUFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcGFnZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGNoZWNrRm9ybVZhbGlkaXR5LFxuICB9O1xufSk7XG5cbmNvbnN0IGluaXQgPSAoKCkgPT4ge1xuICBsZXQgX3BhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX3BhZ2VDb250YWluZXIuaWQgPSAncGFnZS1jb250YWluZXInO1xuXG4gIGxldCBfcGFnZUhlYWRlciA9IF9pbml0SGVhZGVyKCk7XG4gIGxldCBfcGFnZUFzaWRlID0gX2luaXRBc2lkZSgpO1xuICBsZXQgX3BhZ2VNYWluID0gX2luaXRNYWluKCk7IC8vIGZvcm0gd2lsbCBsaXZlIG9uIHRvcCBvZiBtYWluXG4gIGxldCBfcGFnZUZvb3RlciA9IF9pbml0Rm9vdGVyKCk7XG5cbiAgbGV0IHBhZ2VDb250ZW50cyA9IHtcbiAgICBoZWFkZXI6IF9wYWdlSGVhZGVyLFxuICAgIGFzaWRlOiBfcGFnZUFzaWRlLFxuICAgIG1haW46IF9wYWdlTWFpbixcbiAgICBmb290ZXI6IF9wYWdlRm9vdGVyLFxuICB9O1xuXG4gIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgIF9wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50c1trZXldKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfcGFnZUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHtcbiAgICBwYWdlQ29udGVudHMsXG4gIH07XG59KTtcblxuY29uc3QgX2luaXRIZWFkZXIgPSAoKCkgPT4ge1xuICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGxldCBfaGVhZGVyQ29udGVudCA9IHtcbiAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIGZvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSxcbiAgICB0b2dnbGVGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcbiAgfVxuXG4gIF9oZWFkZXJDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6IFRvZG8gTGlzdCc7XG4gIF9oZWFkZXJDb250ZW50LmZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIF9oZWFkZXJDb250ZW50LnRvZ2dsZUZvcm0udGV4dENvbnRlbnQgPSAnTmV3IG5vdGUnO1xuICBfaGVhZGVyQ29udGVudC50b2dnbGVGb3JtLmlkID0gJ3RvZ2dsZS1mb3JtLWJ0bic7XG5cbiAgbGV0IF9mb3JtQ29udGVudCA9IHtcbiAgICB0aXRsZToge1xuICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwibm90ZS10aXRsZVwiXG4gICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgdGl0bGVcIlxuICAgICAgICByZXF1aXJlZD5gLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRlc2NcIj5EZXNjcmlwdGlvbjo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYFxuICAgICAgPHRleHRhcmVhXG4gICAgICBuYW1lPVwibm90ZS1kZXNjcmlwdGlvblwiXG4gICAgICBpZD1cImRlc2NcIlxuICAgICAgd3JhcD1cInNvZnRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIGRlc2NyaXB0aW9uXCJcbiAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+YCxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPmAsXG4gICAgICBpbnB1dDogYDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZGF0ZVwiPmAsIC8vIGlucHV0IHdpbGwgYmUgZGF0ZSBwaWNrZXJcbiAgICB9LFxuICAgIGZsYWc6IHtcbiAgICAgIGJ1dHRvbjogYDxsYWJlbCBmb3I9XCJmbGFnLWJ1dHRvblwiPkZsYWdnZWQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJmbGFnLWJ1dHRvblwiPmAsIC8vIHNob3VsZCBiZSBzdHlsaXplZCBidXR0b24gdGhhdCBhY3RzIGFzIHRvZ2dsZVxuICAgIH0sXG4gICAgYnV0dG9uczoge1xuICAgICAgYnV0dG9uOiBgXG4gICAgICAgIDxkaXYgaWQ9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtbm90ZS1idG5cIj5BZGQgbm90ZSE8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgIH0sXG4gIH1cblxuICBPYmplY3Qua2V5cyhfZm9ybUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoXG4gICAgICAoa2V5ID09PSAnZmxhZycpIHx8XG4gICAgICAoa2V5ID09PSAnYnV0dG9ucycpKSB7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5idXR0b247XG4gICAgfSBlbHNlIHtcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmxhYmVsO1xuICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uaW5wdXQ7XG4gICAgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoX2hlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdEFzaWRlID0gKCgpID0+IHtcbiAgbGV0IGFzaWRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG5cbiAgbGV0IF9hc2lkZUNvbnRlbnQgPSB7XG4gICAgaG9tZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIC8vIHRoaXMgd2lsbCBjb250YWluIGxpbmsgdG8gJ2hvbWVwYWdlJyBzaG93aW5nIGFsbCBub3Rlc1xuICAgIGZsYWdnZWQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAvLyB0aGlzIHdpbGwgZGlzcGxheSBub3RlcyB3aXRoIGZsYWc6dHJ1ZVxuICAgIHByb2plY3RzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgLy8gdGhpcyB3aWxsIHNob3cgc3ViZm9sZGVycyAoJ3Byb2plY3RzJykgYW5kIGFsbG93IHRvIGNyZWF0ZSBuZXcgb25lXG4gIH1cblxuICBPYmplY3Qua2V5cyhfYXNpZGVDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgX2FzaWRlQ29udGVudFtrZXldLmlkID0ga2V5O1xuICAgIF9hc2lkZUNvbnRlbnRba2V5XS50ZXh0Q29udGVudCA9IGtleTsgLy8gdGhpcyB3aWxsIGNoYW5nZSB0byBkaXNwbGF5IHNlY3Rpb24gdGl0bGVcbiAgICBhc2lkZVdyYXBwZXIuYXBwZW5kQ2hpbGQoX2FzaWRlQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgcmV0dXJuIG1haW5XcmFwcGVyO1xufSk7XG5cbmNvbnN0IF9pbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgbGV0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBsZXQgX2Zvb3RlckNvbnRlbnQgPSB7XG4gICAgbGluazogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICB9XG5cbiAgX2Zvb3RlckNvbnRlbnQubGluay5pbm5lckhUTUwgPVxuICBgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icnpvc3RvdnNraVwiIHRhcmdldD1cIl9ibGFua1wiPmJyem9zdG92c2tpPC9hPiAyMDIzYDtcblxuICBPYmplY3Qua2V5cyhfZm9vdGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2Zvb3RlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSk7XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KGZvcm0pIHtcbiAgbGV0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==