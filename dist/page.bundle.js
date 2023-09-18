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
  let _pageMain = _initMain();
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
    home: {
      elemType: 'button',
      label: 'Home',
    },
    flaggedNotes: {
      elemType: 'button',
      label: 'Flagged Notes',
    },
    projects: {
      elemType: 'button',
      label: 'Projects',
    },
  }

  Object.keys(_asideContent).forEach(key => {
    let _newElem = document.createElement(_asideContent[key].elemType);
    _newElem.id = key;
    _newElem.textContent = _asideContent[key].label;
    asideWrapper.appendChild(_newElem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxpRUFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHBhZ2UoKSB7XG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBjaGVja0Zvcm1WYWxpZGl0eSxcbiAgfTtcbn0pO1xuXG5jb25zdCBpbml0ID0gKCgpID0+IHtcbiAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9wYWdlQ29udGFpbmVyLmlkID0gJ3BhZ2UtY29udGFpbmVyJztcblxuICBsZXQgX3BhZ2VIZWFkZXIgPSBfaW5pdEhlYWRlcigpO1xuICBsZXQgX3BhZ2VBc2lkZSA9IF9pbml0QXNpZGUoKTtcbiAgbGV0IF9wYWdlTWFpbiA9IF9pbml0TWFpbigpO1xuICBsZXQgX3BhZ2VGb290ZXIgPSBfaW5pdEZvb3RlcigpO1xuXG4gIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgaGVhZGVyOiBfcGFnZUhlYWRlcixcbiAgICBhc2lkZTogX3BhZ2VBc2lkZSxcbiAgICBtYWluOiBfcGFnZU1haW4sXG4gICAgZm9vdGVyOiBfcGFnZUZvb3RlcixcbiAgfTtcblxuICBPYmplY3Qua2V5cyhwYWdlQ29udGVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBfcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQ29udGVudHNba2V5XSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX3BhZ2VDb250YWluZXIpO1xuXG4gIHJldHVybiB7XG4gICAgcGFnZUNvbnRlbnRzLFxuICB9O1xufSk7XG5cbmNvbnN0IF9pbml0SGVhZGVyID0gKCgpID0+IHtcbiAgbGV0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBsZXQgX2hlYWRlckNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBmb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgdG9nZ2xlRm9ybTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gIH1cblxuICBfaGVhZGVyQ29udGVudC50aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiBUb2RvIExpc3QnO1xuICBfaGVhZGVyQ29udGVudC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBfaGVhZGVyQ29udGVudC50b2dnbGVGb3JtLnRleHRDb250ZW50ID0gJ05ldyBub3RlJztcbiAgX2hlYWRlckNvbnRlbnQudG9nZ2xlRm9ybS5pZCA9ICd0b2dnbGUtZm9ybS1idG4nO1xuXG4gIGxldCBfZm9ybUNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5gLFxuICAgICAgaW5wdXQ6IGBcbiAgICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIm5vdGUtdGl0bGVcIlxuICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIHRpdGxlXCJcbiAgICAgICAgcmVxdWlyZWQ+YCxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkZXNjXCI+RGVzY3JpcHRpb246PC9sYWJlbD5gLFxuICAgICAgaW5wdXQ6IGBcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgbmFtZT1cIm5vdGUtZGVzY3JpcHRpb25cIlxuICAgICAgaWQ9XCJkZXNjXCJcbiAgICAgIHdyYXA9XCJzb2Z0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZSBkZXNjcmlwdGlvblwiXG4gICAgICByZXF1aXJlZD48L3RleHRhcmVhPmAsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIGRhdGU6PC9sYWJlbD5gLFxuICAgICAgaW5wdXQ6IGA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZHVlLWRhdGVcIiBpZD1cImRhdGVcIj5gLCAvLyBpbnB1dCB3aWxsIGJlIGRhdGUgcGlja2VyXG4gICAgfSxcbiAgICBmbGFnOiB7XG4gICAgICBidXR0b246IGA8bGFiZWwgZm9yPVwiZmxhZy1idXR0b25cIj5GbGFnZ2VkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZmxhZy1idXR0b25cIj5gLCAvLyBzaG91bGQgYmUgc3R5bGl6ZWQgYnV0dG9uIHRoYXQgYWN0cyBhcyB0b2dnbGVcbiAgICB9LFxuICAgIGJ1dHRvbnM6IHtcbiAgICAgIGJ1dHRvbjogYFxuICAgICAgICA8ZGl2IGlkPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLW5vdGUtYnRuXCI+QWRkIG5vdGUhPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICB9LFxuICB9XG5cbiAgT2JqZWN0LmtleXMoX2Zvcm1Db250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKFxuICAgICAgKGtleSA9PT0gJ2ZsYWcnKSB8fFxuICAgICAgKGtleSA9PT0gJ2J1dHRvbnMnKSkge1xuICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uYnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmlucHV0O1xuICAgIH07XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKF9oZWFkZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChfaGVhZGVyQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcldyYXBwZXI7XG59KTtcblxuY29uc3QgX2luaXRBc2lkZSA9ICgoKSA9PiB7XG4gIGxldCBhc2lkZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuXG4gIGxldCBfYXNpZGVDb250ZW50ID0ge1xuICAgIGhvbWU6IHtcbiAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgIGxhYmVsOiAnSG9tZScsXG4gICAgfSxcbiAgICBmbGFnZ2VkTm90ZXM6IHtcbiAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgIGxhYmVsOiAnRmxhZ2dlZCBOb3RlcycsXG4gICAgfSxcbiAgICBwcm9qZWN0czoge1xuICAgICAgZWxlbVR5cGU6ICdidXR0b24nLFxuICAgICAgbGFiZWw6ICdQcm9qZWN0cycsXG4gICAgfSxcbiAgfVxuXG4gIE9iamVjdC5rZXlzKF9hc2lkZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBsZXQgX25ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KF9hc2lkZUNvbnRlbnRba2V5XS5lbGVtVHlwZSk7XG4gICAgX25ld0VsZW0uaWQgPSBrZXk7XG4gICAgX25ld0VsZW0udGV4dENvbnRlbnQgPSBfYXNpZGVDb250ZW50W2tleV0ubGFiZWw7XG4gICAgYXNpZGVXcmFwcGVyLmFwcGVuZENoaWxkKF9uZXdFbGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbn0pO1xuXG5jb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgcmV0dXJuIG1haW5XcmFwcGVyO1xufSk7XG5cbmNvbnN0IF9pbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgbGV0IGZvb3RlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBsZXQgX2Zvb3RlckNvbnRlbnQgPSB7XG4gICAgbGluazogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICB9XG5cbiAgX2Zvb3RlckNvbnRlbnQubGluay5pbm5lckhUTUwgPVxuICBgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icnpvc3RvdnNraVwiIHRhcmdldD1cIl9ibGFua1wiPmJyem9zdG92c2tpPC9hPiAyMDIzYDtcblxuICBPYmplY3Qua2V5cyhfZm9vdGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2Zvb3RlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSk7XG5cbmZ1bmN0aW9uIGNoZWNrRm9ybVZhbGlkaXR5KGZvcm0pIHtcbiAgbGV0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==