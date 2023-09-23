import './style.css';
import page from "./page";
import todos from './todos';
import render from './render';
import { nanoid } from 'nanoid';

(() => {
  const pageContents = page.init().pageContents;

  const showFormBtn = document.getElementById('show-form-btn');

  const homeBtn = document.getElementById('home');
  const flaggedTodosBtn = document.getElementById('flaggedTodos');
  const projectsContainer = document.getElementById('projects');

  const form = document.querySelector('form');
  const dropdown = document.getElementById('project-input');
  const addTodoBtn = document.getElementById('add-todo-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  render().projectsDropdown(todos.projects, dropdown);
  render().projectBtns(todos.projects, projectsContainer);
  let projectShowBtns = document.querySelectorAll('.project-btn');

  render().allTodos(todos.arr, pageContents.main);

  const bindEvents = (function() {
    showFormBtn.onclick = showFormBtnAction;
    addTodoBtn.onclick = addTodoBtnAction;
    cancelBtn.onclick = cancelBtnAction;
    homeBtn.onclick = showAllTodos;
    flaggedTodosBtn.onclick = showFlaggedTodos;
    projectShowBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        showProjectTodos(btn.id);
      })
    });
  })();

  function showFormBtnAction() {
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
      showFormBtn.classList.add('hidden');
    };
  };

  function addTodoBtnAction() {
    if (!page.checkFormValidity(form)) {
      return;
    } else {
      todos.add(nanoid());
      pageContents.main.innerHTML = '';
      render().allTodos(todos.arr, pageContents.main);
      showFormBtn.classList.remove('hidden');
      form.classList.add('hidden');
    };
  };

  function cancelBtnAction() {
    form.classList.add('hidden');
    showFormBtn.classList.remove('hidden');
  };

  function showAllTodos() {
    pageContents.main.innerHTML = '';
    render().allTodos(todos.arr, pageContents.main);
  };

  function showFlaggedTodos() {
    pageContents.main.innerHTML = '';
    render().flaggedTodos(todos.arr, pageContents.main);
  };

  function showProjectTodos(project) {
    pageContents.main.innerHTML = '';
    render().projectTodos(project, todos.arr, pageContents.main);
  };

  return;
})();