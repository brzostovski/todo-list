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
const page = {
  init: (() => {
    let _pageContainer = document.createElement('div');
    _pageContainer.id = 'page-container';
  
    const _initHeader = (() => {
      let headerWrapper = document.createElement('header');
    
      let _headerContent = {
        title: document.createElement('span'),
        form: document.createElement('form'),
        showForm: document.createElement('button'),
      }
    
      _headerContent.title.textContent = 'Project: Todo List';
      _headerContent.form.classList.add('hidden');
      _headerContent.showForm.textContent = 'New note';
      _headerContent.showForm.id = 'show-form-btn';
    
      let _formContent = {
        project: {
          label: `<label for="project-input">Project:</label>`,
          input: `<select name="notes-project" id="project-input"></select>`,
        },
        title: {
          label: `<label for="title-input">Title:</label>`,
          input: `
            <input
            type="text"
            name="note-title"
            id="title-input"
            placeholder="Note title"
            required>`,
        },
        description: {
          label: `<label for="desc-input">Description:</label>`,
          input: `
          <textarea
          name="note-description"
          id="desc-input"
          wrap="soft"
          placeholder="Note description"
          required></textarea>`,
        },
        date: {
          label: `<label for="date-input">Due date:</label>`,
          input: `<input type="date" name="due-date" id="date-input">`, // input will be date picker
        },
        flag: {
          button: `<label for="flag-button">Flagged</label>
            <input type="checkbox" id="flag-btn">`, // should be stylized button that acts as toggle
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
          elemType: 'div',
          label: 'Projects:',
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
  }),
  checkFormValidity: (function(form) {
    let isFormValid = form.checkValidity();
    if (!isFormValid) {
      form.reportValidity();
      return false;
    } else {
      return true;
    }
  }),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcGFnZSA9IHtcbiAgaW5pdDogKCgpID0+IHtcbiAgICBsZXQgX3BhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfcGFnZUNvbnRhaW5lci5pZCA9ICdwYWdlLWNvbnRhaW5lcic7XG4gIFxuICAgIGNvbnN0IF9pbml0SGVhZGVyID0gKCgpID0+IHtcbiAgICAgIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgXG4gICAgICBsZXQgX2hlYWRlckNvbnRlbnQgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICAgIGZvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSxcbiAgICAgICAgc2hvd0Zvcm06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgICAgfVxuICAgIFxuICAgICAgX2hlYWRlckNvbnRlbnQudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdDogVG9kbyBMaXN0JztcbiAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBfaGVhZGVyQ29udGVudC5zaG93Rm9ybS50ZXh0Q29udGVudCA9ICdOZXcgbm90ZSc7XG4gICAgICBfaGVhZGVyQ29udGVudC5zaG93Rm9ybS5pZCA9ICdzaG93LWZvcm0tYnRuJztcbiAgICBcbiAgICAgIGxldCBfZm9ybUNvbnRlbnQgPSB7XG4gICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJwcm9qZWN0LWlucHV0XCI+UHJvamVjdDo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGA8c2VsZWN0IG5hbWU9XCJub3Rlcy1wcm9qZWN0XCIgaWQ9XCJwcm9qZWN0LWlucHV0XCI+PC9zZWxlY3Q+YCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJ0aXRsZS1pbnB1dFwiPlRpdGxlOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibm90ZS10aXRsZVwiXG4gICAgICAgICAgICBpZD1cInRpdGxlLWlucHV0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZSB0aXRsZVwiXG4gICAgICAgICAgICByZXF1aXJlZD5gLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRlc2MtaW5wdXRcIj5EZXNjcmlwdGlvbjo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGBcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwibm90ZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgaWQ9XCJkZXNjLWlucHV0XCJcbiAgICAgICAgICB3cmFwPVwic29mdFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICByZXF1aXJlZD48L3RleHRhcmVhPmAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJkYXRlLWlucHV0XCI+RHVlIGRhdGU6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCIgaWQ9XCJkYXRlLWlucHV0XCI+YCwgLy8gaW5wdXQgd2lsbCBiZSBkYXRlIHBpY2tlclxuICAgICAgICB9LFxuICAgICAgICBmbGFnOiB7XG4gICAgICAgICAgYnV0dG9uOiBgPGxhYmVsIGZvcj1cImZsYWctYnV0dG9uXCI+RmxhZ2dlZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJmbGFnLWJ0blwiPmAsIC8vIHNob3VsZCBiZSBzdHlsaXplZCBidXR0b24gdGhhdCBhY3RzIGFzIHRvZ2dsZVxuICAgICAgICB9LFxuICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgYnV0dG9uOiBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZC1ub3RlLWJ0blwiPkFkZCBub3RlITwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhfZm9ybUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChrZXkgPT09ICdmbGFnJykgfHxcbiAgICAgICAgICAoa2V5ID09PSAnYnV0dG9ucycpKSB7XG4gICAgICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uYnV0dG9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmxhYmVsO1xuICAgICAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmlucHV0O1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgXG4gICAgICBPYmplY3Qua2V5cyhfaGVhZGVyQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKF9oZWFkZXJDb250ZW50W2tleV0pO1xuICAgICAgfSk7XG4gICAgXG4gICAgICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdEFzaWRlID0gKCgpID0+IHtcbiAgICAgIGxldCBhc2lkZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICAgIFxuICAgICAgbGV0IF9hc2lkZUNvbnRlbnQgPSB7XG4gICAgICAgIGhvbWU6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgfSxcbiAgICAgICAgZmxhZ2dlZE5vdGVzOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIGxhYmVsOiAnRmxhZ2dlZCBOb3RlcycsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3RzOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdkaXYnLFxuICAgICAgICAgIGxhYmVsOiAnUHJvamVjdHM6JyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9hc2lkZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IF9uZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfYXNpZGVDb250ZW50W2tleV0uZWxlbVR5cGUpO1xuICAgICAgICBfbmV3RWxlbS5pZCA9IGtleTtcbiAgICAgICAgX25ld0VsZW0udGV4dENvbnRlbnQgPSBfYXNpZGVDb250ZW50W2tleV0ubGFiZWw7XG4gICAgICAgIGFzaWRlV3JhcHBlci5hcHBlbmRDaGlsZChfbmV3RWxlbSk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIHJldHVybiBhc2lkZVdyYXBwZXI7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgX2luaXRNYWluID0gKCgpID0+IHtcbiAgICAgIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBcbiAgICAgIHJldHVybiBtYWluV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdEZvb3RlciA9ICgoKSA9PiB7XG4gICAgICBsZXQgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIFxuICAgICAgbGV0IF9mb290ZXJDb250ZW50ID0ge1xuICAgICAgICBsaW5rOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICB9XG4gICAgXG4gICAgICBfZm9vdGVyQ29udGVudC5saW5rLmlubmVySFRNTCA9XG4gICAgICBgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icnpvc3RvdnNraVwiIHRhcmdldD1cIl9ibGFua1wiPmJyem9zdG92c2tpPC9hPiAyMDIzYDtcbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9mb290ZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2Zvb3RlckNvbnRlbnRba2V5XSk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIHJldHVybiBmb290ZXJXcmFwcGVyO1xuICAgIH0pO1xuICBcbiAgICBsZXQgX3BhZ2VIZWFkZXIgPSBfaW5pdEhlYWRlcigpO1xuICAgIGxldCBfcGFnZUFzaWRlID0gX2luaXRBc2lkZSgpO1xuICAgIGxldCBfcGFnZU1haW4gPSBfaW5pdE1haW4oKTtcbiAgICBsZXQgX3BhZ2VGb290ZXIgPSBfaW5pdEZvb3RlcigpO1xuICBcbiAgICBsZXQgcGFnZUNvbnRlbnRzID0ge1xuICAgICAgaGVhZGVyOiBfcGFnZUhlYWRlcixcbiAgICAgIGFzaWRlOiBfcGFnZUFzaWRlLFxuICAgICAgbWFpbjogX3BhZ2VNYWluLFxuICAgICAgZm9vdGVyOiBfcGFnZUZvb3RlcixcbiAgICB9O1xuICBcbiAgICBPYmplY3Qua2V5cyhwYWdlQ29udGVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIF9wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50c1trZXldKTtcbiAgICB9KTtcbiAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfcGFnZUNvbnRhaW5lcik7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBwYWdlQ29udGVudHMsXG4gICAgfTtcbiAgfSksXG4gIGNoZWNrRm9ybVZhbGlkaXR5OiAoZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9