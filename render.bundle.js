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

  Object.keys(todo).forEach(key => {
    if (key === 'id') return;

    let _section = document.createElement('div');
    _section.classList.add(key);

    if (key === 'flag') {
      (todo[key] === true)
      ? (_section.textContent = '⚑')
      : (_section.textContent = '⚐')
    } else {
      _section.textContent = todo[key];
    }
    _todo.appendChild(_section);
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVEsSUFBSSxRQUFRO0FBQ2hFLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0QnRuLFxuICAgIHByb2plY3RzRHJvcGRvd24sXG4gICAgYWxsVG9kb3MsXG4gICAgZmxhZ2dlZFRvZG9zLFxuICAgIHByb2plY3RUb2RvcyxcbiAgfVxufSk7XG5cbmNvbnN0IF9jcmVhdGVUb2RvQ2FyZCA9IChmdW5jdGlvbih0b2RvKSB7XG4gIGxldCBfdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gIF90b2RvLmRhdGFzZXQudG9kb0lkID0gdG9kby5pZDsgLy91c2UgZGF0YXNldCB0byBsaW5rIGNhcmRzLCBidXR0b25zIHRvIHRvZG9zIGFuZCBwcm9qZWN0c1xuXG4gIE9iamVjdC5rZXlzKHRvZG8pLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoa2V5ID09PSAnaWQnKSByZXR1cm47XG5cbiAgICBsZXQgX3NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGtleSk7XG5cbiAgICBpZiAoa2V5ID09PSAnZmxhZycpIHtcbiAgICAgICh0b2RvW2tleV0gPT09IHRydWUpXG4gICAgICA/IChfc2VjdGlvbi50ZXh0Q29udGVudCA9ICfimpEnKVxuICAgICAgOiAoX3NlY3Rpb24udGV4dENvbnRlbnQgPSAn4pqQJylcbiAgICB9IGVsc2Uge1xuICAgICAgX3NlY3Rpb24udGV4dENvbnRlbnQgPSB0b2RvW2tleV07XG4gICAgfVxuICAgIF90b2RvLmFwcGVuZENoaWxkKF9zZWN0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF90b2RvO1xufSk7XG5cbmNvbnN0IHByb2plY3RCdG4gPSAoZnVuY3Rpb24ocHJvamVjdCwgZG9tRWxlbWVudCkge1xuICBjb25zdCBfY3JlYXRlUHJvamVjdEJ0biA9IChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgbGV0IF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBfYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgX2J0bi5pZCA9IHByb2plY3Q7XG4gICAgX2J0bi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIFxuICAgIHJldHVybiBfYnRuO1xuICB9KTtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVQcm9qZWN0QnRuKHByb2plY3QpKTtcbn0pO1xuXG5jb25zdCBwcm9qZWN0c0Ryb3Bkb3duID0gKGZ1bmN0aW9uKHByb2plY3RzQXJyLCBkYXRhbGlzdCkge1xuICBkYXRhbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgcHJvamVjdHNBcnIuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBkYXRhbGlzdC5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3R9XCI+JHtwcm9qZWN0fTwvb3B0aW9uPmA7XG4gIH0pXG59KTtcblxuY29uc3QgYWxsVG9kb3MgPSAoZnVuY3Rpb24odG9kb3NBcnIsIGRvbUVsZW1lbnQpIHtcbiAgaWYgKHRvZG9zQXJyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgdG9kb3NBcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICBkb21FbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVUb2RvQ2FyZCh0b2RvKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGZsYWdnZWRUb2RvcyA9IChmdW5jdGlvbih0b2Rvc0FyciwgZG9tRWxlbWVudCkge1xuICBpZiAodG9kb3NBcnIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBkb21FbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB0b2Rvc0Fyci5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIGlmICh0b2RvLmZsYWcgPT09IHRydWUpIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRvZG9DYXJkKHRvZG8pKTtcbiAgfSk7XG59KTtcblxuY29uc3QgcHJvamVjdFRvZG9zID0gKGZ1bmN0aW9uKHByb2plY3QsIHRvZG9zQXJyLCBkb21FbGVtZW50KSB7XG4gIGlmICh0b2Rvc0FyciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIHRvZG9zQXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgaWYgKHRvZG8ucHJvamVjdCA9PT0gcHJvamVjdCkgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlVG9kb0NhcmQodG9kbykpO1xuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==