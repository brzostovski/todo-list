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
      _headerContent.showForm.textContent = 'New todo';
      _headerContent.showForm.id = 'show-form-btn';
    
      let _formContent = {
        project: {
          label: `<label for="project-input">Project:</label>`,
          input: `
          <input
          type="text"
          list="projects-list"
          name="todos-project"
          id="project-input"
          value="Inbox">
          <datalist id="projects-list"></datalist>`,
        },
        title: {
          label: `<label for="title-input">Title:</label>`,
          input: `
            <input
            type="text"
            name="todo-title"
            id="title-input"
            placeholder="Todo title"
            required>`,
        },
        description: {
          label: `<label for="desc-input">Description:</label>`,
          input: `
          <textarea
          name="todo-description"
          id="desc-input"
          wrap="soft"
          placeholder="Todo description"></textarea>`,
        },
        date: {
          label: `<label for="date-input">Due date:</label>`,
          input: `<input type="date" name="due-date" id="date-input">`,
        },
        flag: {
          button: `<label for="flag-button">Flagged</label>
            <input type="checkbox" id="flag-btn">`,
        },
        buttons: {
          button: `
            <div id="btn-container">
              <button type="button" id="add-todo-btn">Add todo!</button>
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
        flaggedTodos: {
          elemType: 'button',
          label: 'Flagged',
        },
        completedTodos: {
          elemType: 'button',
          label: 'Completed',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHBhZ2UgPSB7XG4gIGluaXQ6ICgoKSA9PiB7XG4gICAgbGV0IF9wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3BhZ2VDb250YWluZXIuaWQgPSAncGFnZS1jb250YWluZXInO1xuICBcbiAgICBjb25zdCBfaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gICAgICBsZXQgaGVhZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIFxuICAgICAgbGV0IF9oZWFkZXJDb250ZW50ID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBmb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyksXG4gICAgICAgIHNob3dGb3JtOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcbiAgICAgIH1cbiAgICBcbiAgICAgIF9oZWFkZXJDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6IFRvZG8gTGlzdCc7XG4gICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0udGV4dENvbnRlbnQgPSAnTmV3IHRvZG8nO1xuICAgICAgX2hlYWRlckNvbnRlbnQuc2hvd0Zvcm0uaWQgPSAnc2hvdy1mb3JtLWJ0bic7XG4gICAgXG4gICAgICBsZXQgX2Zvcm1Db250ZW50ID0ge1xuICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwicHJvamVjdC1pbnB1dFwiPlByb2plY3Q6PC9sYWJlbD5gLFxuICAgICAgICAgIGlucHV0OiBgXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxpc3Q9XCJwcm9qZWN0cy1saXN0XCJcbiAgICAgICAgICBuYW1lPVwidG9kb3MtcHJvamVjdFwiXG4gICAgICAgICAgaWQ9XCJwcm9qZWN0LWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT1cIkluYm94XCI+XG4gICAgICAgICAgPGRhdGFsaXN0IGlkPVwicHJvamVjdHMtbGlzdFwiPjwvZGF0YWxpc3Q+YCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBsYWJlbDogYDxsYWJlbCBmb3I9XCJ0aXRsZS1pbnB1dFwiPlRpdGxlOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidG9kby10aXRsZVwiXG4gICAgICAgICAgICBpZD1cInRpdGxlLWlucHV0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG9kbyB0aXRsZVwiXG4gICAgICAgICAgICByZXF1aXJlZD5gLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIGxhYmVsOiBgPGxhYmVsIGZvcj1cImRlc2MtaW5wdXRcIj5EZXNjcmlwdGlvbjo8L2xhYmVsPmAsXG4gICAgICAgICAgaW5wdXQ6IGBcbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwidG9kby1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgaWQ9XCJkZXNjLWlucHV0XCJcbiAgICAgICAgICB3cmFwPVwic29mdFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb2RvIGRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5gLFxuICAgICAgICB9LFxuICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgbGFiZWw6IGA8bGFiZWwgZm9yPVwiZGF0ZS1pbnB1dFwiPkR1ZSBkYXRlOjwvbGFiZWw+YCxcbiAgICAgICAgICBpbnB1dDogYDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZGF0ZS1pbnB1dFwiPmAsXG4gICAgICAgIH0sXG4gICAgICAgIGZsYWc6IHtcbiAgICAgICAgICBidXR0b246IGA8bGFiZWwgZm9yPVwiZmxhZy1idXR0b25cIj5GbGFnZ2VkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWctYnRuXCI+YCxcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgIGJ1dHRvbjogYFxuICAgICAgICAgICAgPGRpdiBpZD1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtdG9kby1idG5cIj5BZGQgdG9kbyE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2Zvcm1Db250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoa2V5ID09PSAnZmxhZycpIHx8XG4gICAgICAgICAgKGtleSA9PT0gJ2J1dHRvbnMnKSkge1xuICAgICAgICAgIF9oZWFkZXJDb250ZW50LmZvcm0uaW5uZXJIVE1MICs9IF9mb3JtQ29udGVudFtrZXldLmJ1dHRvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5sYWJlbDtcbiAgICAgICAgICBfaGVhZGVyQ29udGVudC5mb3JtLmlubmVySFRNTCArPSBfZm9ybUNvbnRlbnRba2V5XS5pbnB1dDtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgT2JqZWN0LmtleXMoX2hlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChfaGVhZGVyQ29udGVudFtrZXldKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgcmV0dXJuIGhlYWRlcldyYXBwZXI7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgX2luaXRBc2lkZSA9ICgoKSA9PiB7XG4gICAgICBsZXQgYXNpZGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgICBcbiAgICAgIGxldCBfYXNpZGVDb250ZW50ID0ge1xuICAgICAgICBob21lOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIGxhYmVsOiAnSG9tZScsXG4gICAgICAgIH0sXG4gICAgICAgIGZsYWdnZWRUb2Rvczoge1xuICAgICAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBsYWJlbDogJ0ZsYWdnZWQnLFxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZWRUb2Rvczoge1xuICAgICAgICAgIGVsZW1UeXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICBsYWJlbDogJ0NvbXBsZXRlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3RzOiB7XG4gICAgICAgICAgZWxlbVR5cGU6ICdkaXYnLFxuICAgICAgICAgIGxhYmVsOiAnUHJvamVjdHM6JyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9hc2lkZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IF9uZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfYXNpZGVDb250ZW50W2tleV0uZWxlbVR5cGUpO1xuICAgICAgICBfbmV3RWxlbS5pZCA9IGtleTtcbiAgICAgICAgX25ld0VsZW0udGV4dENvbnRlbnQgPSBfYXNpZGVDb250ZW50W2tleV0ubGFiZWw7XG4gICAgICAgIGFzaWRlV3JhcHBlci5hcHBlbmRDaGlsZChfbmV3RWxlbSk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIHJldHVybiBhc2lkZVdyYXBwZXI7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgX2luaXRNYWluID0gKCgpID0+IHtcbiAgICAgIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBcbiAgICAgIHJldHVybiBtYWluV3JhcHBlcjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBfaW5pdEZvb3RlciA9ICgoKSA9PiB7XG4gICAgICBsZXQgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIFxuICAgICAgbGV0IF9mb290ZXJDb250ZW50ID0ge1xuICAgICAgICBsaW5rOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICB9XG4gICAgXG4gICAgICBfZm9vdGVyQ29udGVudC5saW5rLmlubmVySFRNTCA9XG4gICAgICBgwqkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icnpvc3RvdnNraVwiIHRhcmdldD1cIl9ibGFua1wiPmJyem9zdG92c2tpPC9hPiAyMDIzYDtcbiAgICBcbiAgICAgIE9iamVjdC5rZXlzKF9mb290ZXJDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZvb3RlcldyYXBwZXIuYXBwZW5kQ2hpbGQoX2Zvb3RlckNvbnRlbnRba2V5XSk7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIHJldHVybiBmb290ZXJXcmFwcGVyO1xuICAgIH0pO1xuICBcbiAgICBsZXQgX3BhZ2VIZWFkZXIgPSBfaW5pdEhlYWRlcigpO1xuICAgIGxldCBfcGFnZUFzaWRlID0gX2luaXRBc2lkZSgpO1xuICAgIGxldCBfcGFnZU1haW4gPSBfaW5pdE1haW4oKTtcbiAgICBsZXQgX3BhZ2VGb290ZXIgPSBfaW5pdEZvb3RlcigpO1xuICBcbiAgICBsZXQgcGFnZUNvbnRlbnRzID0ge1xuICAgICAgaGVhZGVyOiBfcGFnZUhlYWRlcixcbiAgICAgIGFzaWRlOiBfcGFnZUFzaWRlLFxuICAgICAgbWFpbjogX3BhZ2VNYWluLFxuICAgICAgZm9vdGVyOiBfcGFnZUZvb3RlcixcbiAgICB9O1xuICBcbiAgICBPYmplY3Qua2V5cyhwYWdlQ29udGVudHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIF9wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VDb250ZW50c1trZXldKTtcbiAgICB9KTtcbiAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfcGFnZUNvbnRhaW5lcik7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBwYWdlQ29udGVudHMsXG4gICAgfTtcbiAgfSksXG4gIGNoZWNrRm9ybVZhbGlkaXR5OiAoZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9