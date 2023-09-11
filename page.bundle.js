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
  _headerContent.toggleForm.textContent = '﹢';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxpRUFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHBhZ2UoKSB7XG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBjaGVja0Zvcm1WYWxpZGl0eSxcbiAgfTtcbn0pO1xuXG5jb25zdCBpbml0ID0gKCgpID0+IHtcbiAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9wYWdlQ29udGFpbmVyLmlkID0gJ3BhZ2UtY29udGFpbmVyJztcblxuICBsZXQgX3BhZ2VIZWFkZXIgPSBfaW5pdEhlYWRlcigpO1xuICBsZXQgX3BhZ2VBc2lkZSA9IF9pbml0QXNpZGUoKTtcbiAgbGV0IF9wYWdlTWFpbiA9IF9pbml0TWFpbigpOyAvLyBmb3JtIHdpbGwgbGl2ZSBvbiB0b3Agb2YgbWFpblxuICBsZXQgX3BhZ2VGb290ZXIgPSBfaW5pdEZvb3RlcigpO1xuXG4gIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgaGVhZGVyOiBfcGFnZUhlYWRlcixcbiAgICBhc2lkZTogX3BhZ2VBc2lkZSxcbiAgICBtYWluOiBfcGFnZU1haW4sXG4gICAgZm9vdGVyOiBfcGFnZUZvb3RlcixcbiAgfTtcblxuICBPYmplY3Qua2V5cyhwYWdlQ29udGVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBfcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudHNba2V5XSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX3BhZ2VDb250YWluZXIpO1xuXG4gIHJldHVybiB7XG4gICAgcGFnZUNvbnRlbnRzLFxuICB9O1xufSk7XG5cbmNvbnN0IF9pbml0SGVhZGVyID0gKCgpID0+IHtcbiAgbGV0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBsZXQgX2hlYWRlckNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBmb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgdG9nZ2xlRm9ybTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gIH1cblxuICBfaGVhZGVyQ29udGVudC50aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiBUb2RvIExpc3QnO1xuICBfaGVhZGVyQ29udGVudC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBfaGVhZGVyQ29udGVudC50b2dnbGVGb3JtLnRleHRDb250ZW50ID0gJ++5oic7XG4gIF9oZWFkZXJDb250ZW50LnRvZ2dsZUZvcm0uaWQgPSAndG9nZ2xlLWZvcm0tYnRuJztcblxuICBsZXQgX2Zvcm1Db250ZW50ID0ge1xuICAgIHRpdGxlOiB7XG4gICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+YCxcbiAgICAgIGlucHV0OiBgXG4gICAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJub3RlLXRpdGxlXCJcbiAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZSB0aXRsZVwiXG4gICAgICAgIHJlcXVpcmVkPmAsXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGVzY1wiPkRlc2NyaXB0aW9uOjwvbGFiZWw+YCxcbiAgICAgIGlucHV0OiBgXG4gICAgICA8dGV4dGFyZWFcbiAgICAgIG5hbWU9XCJub3RlLWRlc2NyaXB0aW9uXCJcbiAgICAgIGlkPVwiZGVzY1wiXG4gICAgICB3cmFwPVwic29mdFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgZGVzY3JpcHRpb25cIlxuICAgICAgcmVxdWlyZWQ+PC90ZXh0YXJlYT5gLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+YCxcbiAgICAgIGlucHV0OiBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImR1ZS1kYXRlXCIgaWQ9XCJkYXRlXCI+YCwgLy8gaW5wdXQgd2lsbCBiZSBkYXRlIHBpY2tlclxuICAgIH0sXG4gICAgZmxhZzoge1xuICAgICAgYnV0dG9uOiBgPGxhYmVsIGZvcj1cImZsYWctYnV0dG9uXCI+RmxhZ2dlZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWctYnV0dG9uXCI+YCwgLy8gc2hvdWxkIGJlIHN0eWxpemVkIGJ1dHRvbiB0aGF0IGFjdHMgYXMgdG9nZ2xlXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIGJ1dHRvbjogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLW5vdGUtYnRuXCI+QWRkIG5vdGUhPC9idXR0b24+YCxcbiAgICB9LFxuICB9XG5cbiAgT2JqZWN0LmtleXMoX2Zvcm1Db250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKChrZXkgPT09ICdmbGFnJykgfHwgKGtleSA9PT0gJ3N1Ym1pdCcpKSB7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5idXR0b247XG4gICAgfSBlbHNlIHtcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmxhYmVsO1xuICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uaW5wdXQ7XG4gICAgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoX2hlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdEFzaWRlID0gKCgpID0+IHtcbiAgbGV0IGFzaWRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG5cbiAgbGV0IF9hc2lkZUNvbnRlbnQgPSB7XG4gICAgaG9tZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIC8vIHRoaXMgd2lsbCBjb250YWluIGxpbmsgdG8gJ2hvbWVwYWdlJyBzaG93aW5nIGFsbCBub3Rlc1xuICAgIGZsYWdnZWQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAvLyB0aGlzIHdpbGwgZGlzcGxheSBub3RlcyB3aXRoIGZsYWc6dHJ1ZVxuICAgIHByb2plY3RzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgLy8gdGhpcyB3aWxsIHNob3cgc3ViZm9sZGVycyAoJ3Byb2plY3RzJykgYW5kIGFsbG93IHRvIGNyZWF0ZSBuZXcgb25lXG4gIH1cblxuICBPYmplY3Qua2V5cyhfYXNpZGVDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgX2FzaWRlQ29udGVudFtrZXldLmlkID0ga2V5O1xuICAgIF9hc2lkZUNvbnRlbnRba2V5XS50ZXh0Q29udGVudCA9IGtleTsgLy8gdGhpcyB3aWxsIGNoYW5nZSB0byBkaXNwbGF5IHNlY3Rpb24gdGl0bGVcbiAgICBhc2lkZVdyYXBwZXIuYXBwZW5kQ2hpbGQoX2FzaWRlQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgcmV0dXJuIG1haW5XcmFwcGVyO1xufSk7XG5cbmNvbnN0IF9pbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgbGV0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBsZXQgX2Zvb3RlckNvbnRlbnQgPSB7XG4gICAgbGluazogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICB9XG5cbiAgX2Zvb3RlckNvbnRlbnQubGluay5pbm5lckhUTUwgPVxuICBgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icnpvc3RvdnNraVwiIHRhcmdldD1cIl9ibGFua1wiPmJyem9zdG92c2tpPC9hPiAyMDIzYDtcblxuICBPYmplY3Qua2V5cyhfZm9vdGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2Zvb3RlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSk7XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KGZvcm0pIHtcbiAgbGV0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==