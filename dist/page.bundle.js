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
          input: `
          <input
          type="text"
          name="notes-project"
          id="project-input"
          value="Inbox">`,
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
          input: `<input type="text" name="due-date" id="date-input">`, // input will be date picker
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHBhZ2UgPSB7XG4gIGluaXQ6ICgoKSA9PiB7XG4gICAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3BhZ2VDb250YWluZXIuaWQgPSAncGFnZS1jb250YWluZXInO1xuICBcbiAgICBjb25zdCBfaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gICAgICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIFxuICAgICAgbGV0IF9oZWFkZXJDb250ZW50ID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBmb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgICAgIHNob3dGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9oZWFkZXJDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6IFRvZG8gTGlzdCc7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0udGV4dENvbnRlbnQgPSAnTmV3IG5vdGUnO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0uaWQgPSAnc2hvdy1mb3JtLWJ0bic7XG4gICAgXG4gICAgICBsZXQgX2Zvcm1Db250ZW50ID0ge1xuICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwicHJvamVjdC1pbnB1dFwiPlByb2plY3Q6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJub3Rlcy1wcm9qZWN0XCJcbiAgICAgICAgICBpZD1cInByb2plY3QtaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiSW5ib3hcIj5gLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cInRpdGxlLWlucHV0XCI+VGl0bGU6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJub3RlLXRpdGxlXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGUtaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb3RlIHRpdGxlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkPmAsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGVzYy1pbnB1dFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJub3RlLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBpZD1cImRlc2MtaW5wdXRcIlxuICAgICAgICAgIHdyYXA9XCJzb2Z0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vdGUgZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+YCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRhdGUtaW5wdXRcIj5EdWUgZGF0ZTo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZHVlLWRhdGVcIiBpZD1cImRhdGUtaW5wdXRcIj5gLCAvLyBpbnB1dCB3aWxsIGJlIGRhdGUgcGlja2VyXG4gICAgICAgIH0sXG4gICAgICAgIGZsYWc6IHtcbiAgICAgICAgICBidXR0b246IGA8bGFiZWwgZm9yPVwiZmxhZy1idXR0b25cIj5GbGFnZ2VkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWctYnRuXCI+YCwgLy8gc2hvdWxkIGJlIHN0eWxpemVkIGJ1dHRvbiB0aGF0IGFjdHMgYXMgdG9nZ2xlXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICBidXR0b246IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLW5vdGUtYnRuXCI+QWRkIG5vdGUhPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9mb3JtQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGtleSA9PT0gJ2ZsYWcnKSB8fFxuICAgICAgICAgIChrZXkgPT09ICdidXR0b25zJykpIHtcbiAgICAgICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5idXR0b247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0ubGFiZWw7XG4gICAgICAgICAgX2hlYWRlckNvbnRlbnQuZm9ybS5pbm5lckhUTUwgKz0gX2Zvcm1Db250ZW50W2tleV0uaW5wdXQ7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9oZWFkZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2hlYWRlckNvbnRlbnRba2V5XSk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIHJldHVybiBoZWFkZXJXcmFwcGVyO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IF9pbml0QXNpZGUgPSAoKCkgPT4ge1xuICAgICAgbGV0IGFzaWRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgXG4gICAgICBsZXQgX2FzaWRlQ29udGVudCA9IHtcbiAgICAgICAgaG9tZToge1xuICAgICAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxuICAgICAgICB9LFxuICAgICAgICBmbGFnZ2VkTm90ZXM6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgbGFiZWw6ICdGbGFnZ2VkIE5vdGVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvamVjdHM6IHtcbiAgICAgICAgICBlbGVtVHlwZTogJ2RpdicsXG4gICAgICAgICAgbGFiZWw6ICdQcm9qZWN0czonLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2FzaWRlQ29udGVudCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgX25ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KF9hc2lkZUNvbnRlbnRba2V5XS5lbGVtVHlwZSk7XG4gICAgICAgIF9uZXdFbGVtLmlkID0ga2V5O1xuICAgICAgICBfbmV3RWxlbS50ZXh0Q29udGVudCA9IF9hc2lkZUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgICAgYXNpZGVXcmFwcGVyLmFwcGVuZENoaWxkKF9uZXdFbGVtKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGFzaWRlV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdE1haW4gPSAoKCkgPT4ge1xuICAgICAgbGV0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIFxuICAgICAgcmV0dXJuIG1haW5XcmFwcGVyO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IF9pbml0Rm9vdGVyID0gKCgpID0+IHtcbiAgICAgIGxldCBmb290ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgXG4gICAgICBsZXQgX2Zvb3RlckNvbnRlbnQgPSB7XG4gICAgICAgIGxpbms6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9mb290ZXJDb250ZW50LmxpbmsuaW5uZXJIVE1MID1cbiAgICAgIGDCqSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jyem9zdG92c2tpXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YnJ6b3N0b3Zza2k8L2E+IDIwMjNgO1xuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2Zvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZm9vdGVyV3JhcHBlci5hcHBlbmRDaGlsZChfZm9vdGVyQ29udGVudFtrZXldKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGZvb3RlcldyYXBwZXI7XG4gICAgfSk7XG4gIFxuICAgIGxldCBfcGFnZUhlYWRlciA9IF9pbml0SGVhZGVyKCk7XG4gICAgbGV0IF9wYWdlQXNpZGUgPSBfaW5pdEFzaWRlKCk7XG4gICAgbGV0IF9wYWdlTWFpbiA9IF9pbml0TWFpbigpO1xuICAgIGxldCBfcGFnZUZvb3RlciA9IF9pbml0Rm9vdGVyKCk7XG4gIFxuICAgIGxldCBwYWdlQ29udGVudHMgPSB7XG4gICAgICBoZWFkZXI6IF9wYWdlSGVhZGVyLFxuICAgICAgYXNpZGU6IF9wYWdlQXNpZGUsXG4gICAgICBtYWluOiBfcGFnZU1haW4sXG4gICAgICBmb290ZXI6IF9wYWdlRm9vdGVyLFxuICAgIH07XG4gIFxuICAgIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgX3BhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICAgIH0pO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9wYWdlQ29udGFpbmVyKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VDb250ZW50cyxcbiAgICB9O1xuICB9KSxcbiAgY2hlY2tGb3JtVmFsaWRpdHk6IChmdW5jdGlvbihmb3JtKSB7XG4gICAgbGV0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=