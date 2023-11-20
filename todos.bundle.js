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
  !*** ./src/todos.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todos = {
  arr: [],
  completed: [],
  projects: ['Inbox'],
  isNewProject: (function(projectName) {
    for (let i = 0; i < todos.projects.length; i++) {
      if (todos.projects[i] === projectName) return false;
    };
    return true;
  }),
  create: (function(id) {
    const _Todo = (function (
    project,
    title,
    description,
    dueDate,
    flag,
    id,
    completed,) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.flag = flag;
      this.id = id;
      this.completed = completed;
    
      return {
        project,
        title,
        description,
        dueDate,
        flag,
        id,
        completed,
      }
    });

    function _getNewTodoData() {
      function project() {
        let projectName = document.getElementById('project-input').value;
        if (projectName === '') projectName = 'Inbox';

        return projectName;
      };
      return {
        project: project(),
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };
    
    let newTodo = new _Todo(
      _getNewTodoData().project,
      _getNewTodoData().title,
      _getNewTodoData().desc,
      _getNewTodoData().date,
      _getNewTodoData().flag,
      id,
      false,
    )

    return (newTodo);
  }),
  add: (function(todo) {
    todos.arr.push(todo);
  }),
  markComplete: (function(id) {
    todos.arr.forEach(todo => {
      if (todo.id === id) todo.completed = true;
    })
  }),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRvZG9zID0ge1xuICBhcnI6IFtdLFxuICBjb21wbGV0ZWQ6IFtdLFxuICBwcm9qZWN0czogWydJbmJveCddLFxuICBpc05ld1Byb2plY3Q6IChmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2Rvcy5wcm9qZWN0c1tpXSA9PT0gcHJvamVjdE5hbWUpIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiB0cnVlO1xuICB9KSxcbiAgY3JlYXRlOiAoZnVuY3Rpb24oaWQpIHtcbiAgICBjb25zdCBfVG9kbyA9IChmdW5jdGlvbiAoXG4gICAgcHJvamVjdCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGZsYWcsXG4gICAgaWQsXG4gICAgY29tcGxldGVkLCkge1xuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0aGlzLmZsYWcgPSBmbGFnO1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIGZsYWcsXG4gICAgICAgIGlkLFxuICAgICAgICBjb21wbGV0ZWQsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBfZ2V0TmV3VG9kb0RhdGEoKSB7XG4gICAgICBmdW5jdGlvbiBwcm9qZWN0KCkge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSBwcm9qZWN0TmFtZSA9ICdJbmJveCc7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3Q6IHByb2plY3QoKSxcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkZXNjOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBmbGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhZy1idG4nKS5jaGVja2VkLFxuICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGxldCBuZXdUb2RvID0gbmV3IF9Ub2RvKFxuICAgICAgX2dldE5ld1RvZG9EYXRhKCkucHJvamVjdCxcbiAgICAgIF9nZXROZXdUb2RvRGF0YSgpLnRpdGxlLFxuICAgICAgX2dldE5ld1RvZG9EYXRhKCkuZGVzYyxcbiAgICAgIF9nZXROZXdUb2RvRGF0YSgpLmRhdGUsXG4gICAgICBfZ2V0TmV3VG9kb0RhdGEoKS5mbGFnLFxuICAgICAgaWQsXG4gICAgICBmYWxzZSxcbiAgICApXG5cbiAgICByZXR1cm4gKG5ld1RvZG8pO1xuICB9KSxcbiAgYWRkOiAoZnVuY3Rpb24odG9kbykge1xuICAgIHRvZG9zLmFyci5wdXNoKHRvZG8pO1xuICB9KSxcbiAgbWFya0NvbXBsZXRlOiAoZnVuY3Rpb24oaWQpIHtcbiAgICB0b2Rvcy5hcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmlkID09PSBpZCkgdG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH0pXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb3M7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9