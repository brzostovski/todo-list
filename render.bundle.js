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
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function render() {
  return {
    projectBtn,
    projectsDropdown,
    allTodos,
    flaggedTodos,
    projectTodos,
  }
});

const _createTodoCard = (function(todo) {
  let _todo = document.createElement('div');
  _todo.classList.add('todo');
  _todo.dataset.todoId = todo.id; //use dataset to link cards, buttons to todos and projects

  let _completedBtn = document.createElement('button');
  _completedBtn.classList.add('completed-btn');
  _completedBtn.dataset.todoId = todo.id;
  _completedBtn.textContent = 'Completed';

  let _noteContent = document.createElement('div');
  _noteContent.classList.add('note-content');

  Object.keys(todo).forEach(key => {
    if (key === 'id') return;
    if (key === 'completed') return;

    let _section = document.createElement('div');
    _section.classList.add(key);

    if (key === 'flag') {
      let _flagIcon = '';
      if (todo[key] === true) _section.textContent = '⚑';
    } else {
      _section.textContent = todo[key];
    }
    _noteContent.appendChild(_section);
  });

  let _editTodoBtn = document.createElement('button');
  _editTodoBtn.classList.add('edit-todo-btn');
  _editTodoBtn.dataset.todoId = todo.id;
  _editTodoBtn.textContent = 'Edit';

  let _deleteTodoBtn = document.createElement('button');
  _deleteTodoBtn.classList.add('delete-todo-btn');
  _deleteTodoBtn.dataset.todoId = todo.id;
  _deleteTodoBtn.textContent = 'Delete todo';

  _todo.appendChild(_completedBtn);
  _todo.appendChild(_noteContent);
  _todo.appendChild(_editTodoBtn);
  _todo.appendChild(_deleteTodoBtn);

  return _todo;
});

const projectBtn = (function(project, domElement) {
  const _createProjectBtn = (function(project) {
    let _btn = document.createElement('button');
    _btn.classList.add('project-btn');
    _btn.id = project;
    _btn.textContent = project;
  
    return _btn;
  });

  domElement.appendChild(_createProjectBtn(project));
});

const projectsDropdown = (function(projectsArr, datalist) {
  datalist.innerHTML = '';
  projectsArr.forEach(project => {
    datalist.innerHTML += `<option value="${project}">${project}</option>`;
  })
});

const allTodos = (function(todosArr, domElement) {
  if (todosArr === undefined) return;
  domElement.innerHTML = '';
  todosArr.forEach(todo => {
    domElement.appendChild(_createTodoCard(todo));
  });
});

const flaggedTodos = (function(todosArr, domElement) {
  if (todosArr === undefined) return;
  domElement.innerHTML = '';
  todosArr.forEach(todo => {
    if (todo.flag === true) domElement.appendChild(_createTodoCard(todo));
  });
});

const projectTodos = (function(project, todosArr, domElement) {
  if (todosArr === undefined) return;
  domElement.innerHTML = '';
  todosArr.forEach(todo => {
    if (todo.project === project) domElement.appendChild(_createTodoCard(todo));
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUSxJQUFJLFFBQVE7QUFDaEUsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHByb2plY3RCdG4sXG4gICAgcHJvamVjdHNEcm9wZG93bixcbiAgICBhbGxUb2RvcyxcbiAgICBmbGFnZ2VkVG9kb3MsXG4gICAgcHJvamVjdFRvZG9zLFxuICB9XG59KTtcblxuY29uc3QgX2NyZWF0ZVRvZG9DYXJkID0gKGZ1bmN0aW9uKHRvZG8pIHtcbiAgbGV0IF90b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF90b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgX3RvZG8uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkOyAvL3VzZSBkYXRhc2V0IHRvIGxpbmsgY2FyZHMsIGJ1dHRvbnMgdG8gdG9kb3MgYW5kIHByb2plY3RzXG5cbiAgbGV0IF9jb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgX2NvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtYnRuJyk7XG4gIF9jb21wbGV0ZWRCdG4uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xuICBfY29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG5cbiAgbGV0IF9ub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfbm90ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZS1jb250ZW50Jyk7XG5cbiAgT2JqZWN0LmtleXModG9kbykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdpZCcpIHJldHVybjtcbiAgICBpZiAoa2V5ID09PSAnY29tcGxldGVkJykgcmV0dXJuO1xuXG4gICAgbGV0IF9zZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3NlY3Rpb24uY2xhc3NMaXN0LmFkZChrZXkpO1xuXG4gICAgaWYgKGtleSA9PT0gJ2ZsYWcnKSB7XG4gICAgICBsZXQgX2ZsYWdJY29uID0gJyc7XG4gICAgICBpZiAodG9kb1trZXldID09PSB0cnVlKSBfc2VjdGlvbi50ZXh0Q29udGVudCA9ICfimpEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfc2VjdGlvbi50ZXh0Q29udGVudCA9IHRvZG9ba2V5XTtcbiAgICB9XG4gICAgX25vdGVDb250ZW50LmFwcGVuZENoaWxkKF9zZWN0aW9uKTtcbiAgfSk7XG5cbiAgbGV0IF9lZGl0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBfZWRpdFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvLWJ0bicpO1xuICBfZWRpdFRvZG9CdG4uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xuICBfZWRpdFRvZG9CdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgbGV0IF9kZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIF9kZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvLWJ0bicpO1xuICBfZGVsZXRlVG9kb0J0bi5kYXRhc2V0LnRvZG9JZCA9IHRvZG8uaWQ7XG4gIF9kZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSB0b2RvJztcblxuICBfdG9kby5hcHBlbmRDaGlsZChfY29tcGxldGVkQnRuKTtcbiAgX3RvZG8uYXBwZW5kQ2hpbGQoX25vdGVDb250ZW50KTtcbiAgX3RvZG8uYXBwZW5kQ2hpbGQoX2VkaXRUb2RvQnRuKTtcbiAgX3RvZG8uYXBwZW5kQ2hpbGQoX2RlbGV0ZVRvZG9CdG4pO1xuXG4gIHJldHVybiBfdG9kbztcbn0pO1xuXG5jb25zdCBwcm9qZWN0QnRuID0gKGZ1bmN0aW9uKHByb2plY3QsIGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgX2NyZWF0ZVByb2plY3RCdG4gPSAoZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGxldCBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgX2J0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgIF9idG4uaWQgPSBwcm9qZWN0O1xuICAgIF9idG4udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBcbiAgICByZXR1cm4gX2J0bjtcbiAgfSk7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0KSk7XG59KTtcblxuY29uc3QgcHJvamVjdHNEcm9wZG93biA9IChmdW5jdGlvbihwcm9qZWN0c0FyciwgZGF0YWxpc3QpIHtcbiAgZGF0YWxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHByb2plY3RzQXJyLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgZGF0YWxpc3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0fVwiPiR7cHJvamVjdH08L29wdGlvbj5gO1xuICB9KVxufSk7XG5cbmNvbnN0IGFsbFRvZG9zID0gKGZ1bmN0aW9uKHRvZG9zQXJyLCBkb21FbGVtZW50KSB7XG4gIGlmICh0b2Rvc0FyciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIHRvZG9zQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlVG9kb0NhcmQodG9kbykpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBmbGFnZ2VkVG9kb3MgPSAoZnVuY3Rpb24odG9kb3NBcnIsIGRvbUVsZW1lbnQpIHtcbiAgaWYgKHRvZG9zQXJyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgdG9kb3NBcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICBpZiAodG9kby5mbGFnID09PSB0cnVlKSBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVUb2RvQ2FyZCh0b2RvKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHByb2plY3RUb2RvcyA9IChmdW5jdGlvbihwcm9qZWN0LCB0b2Rvc0FyciwgZG9tRWxlbWVudCkge1xuICBpZiAodG9kb3NBcnIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBkb21FbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB0b2Rvc0Fyci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIGlmICh0b2RvLnByb2plY3QgPT09IHByb2plY3QpIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRvZG9DYXJkKHRvZG8pKTtcbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=