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
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const notes = {
  arr: [],
  add: (function() {
    const _Note = (function (project = 'Inbox', title, description, dueDate, flag) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.flag = flag;
    
      return {
        project,
        title,
        description,
        dueDate,
        flag,
      }
    });

    function _getNewNoteData() {
      return {
        project: undefined,
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };
  
    function _createNote() {
      let _project = _getNewNoteData().project;
      let _title = _getNewNoteData().title;
      let _desc = _getNewNoteData().desc;
      let _date = _getNewNoteData().date;
      let _flag = _getNewNoteData().flag;
    
      return (new _Note(_project, _title, _desc, _date, _flag));
    };

    let _note = _createNote();
    notes.arr.push(_note);
  }),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notes);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBub3RlcyA9IHtcbiAgYXJyOiBbXSxcbiAgYWRkOiAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgX05vdGUgPSAoZnVuY3Rpb24gKHByb2plY3QgPSAnSW5ib3gnLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGZsYWcpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5mbGFnID0gZmxhZztcbiAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgZmxhZyxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIF9nZXROZXdOb3RlRGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkZXNjOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBmbGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZy1idG4nKS5jaGVja2VkLFxuICAgICAgfTtcbiAgICB9O1xuICBcbiAgICBmdW5jdGlvbiBfY3JlYXRlTm90ZSgpIHtcbiAgICAgIGxldCBfcHJvamVjdCA9IF9nZXROZXdOb3RlRGF0YSgpLnByb2plY3Q7XG4gICAgICBsZXQgX3RpdGxlID0gX2dldE5ld05vdGVEYXRhKCkudGl0bGU7XG4gICAgICBsZXQgX2Rlc2MgPSBfZ2V0TmV3Tm90ZURhdGEoKS5kZXNjO1xuICAgICAgbGV0IF9kYXRlID0gX2dldE5ld05vdGVEYXRhKCkuZGF0ZTtcbiAgICAgIGxldCBfZmxhZyA9IF9nZXROZXdOb3RlRGF0YSgpLmZsYWc7XG4gICAgXG4gICAgICByZXR1cm4gKG5ldyBfTm90ZShfcHJvamVjdCwgX3RpdGxlLCBfZGVzYywgX2RhdGUsIF9mbGFnKSk7XG4gICAgfTtcblxuICAgIGxldCBfbm90ZSA9IF9jcmVhdGVOb3RlKCk7XG4gICAgbm90ZXMuYXJyLnB1c2goX25vdGUpO1xuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdGVzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==