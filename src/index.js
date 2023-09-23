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
  const datalist = document.getElementById('projects-list');
  const addTodoBtn = document.getElementById('add-todo-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  todos.projects.forEach(project => {
    render().projectBtn(project, projectsContainer);
  })
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
    render().projectsDropdown(todos.projects, datalist);
  };

  function addTodoBtnAction() {
    if (!page.checkFormValidity(form)) {
      return;
    } else {
      let newTodo = todos.create(nanoid());
      todos.add(newTodo);

      if (todos.isNewProject(newTodo.project)) {
        todos.projects.push(newTodo.project);
        render().projectBtn(newTodo.project, projectsContainer);
        
        let newBtn = document.getElementById(newTodo.project);
        newBtn.addEventListener('click', () => {
          showProjectTodos(newBtn.id);
        });
      };

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
    render().allTodos(todos.arr, pageContents.main);
  };

  function showFlaggedTodos() {
    render().flaggedTodos(todos.arr, pageContents.main);
  };

  function showProjectTodos(project) {
    render().projectTodos(project, todos.arr, pageContents.main);
  };

  return;
})();