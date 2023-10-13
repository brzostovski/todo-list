export default (function render() {
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

    let _section = document.createElement('div');
    _section.classList.add(key);

    if (key === 'flag') {
      (todo[key] === true)
      ? (_section.textContent = '⚑')
      : (_section.textContent = '⚐')
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