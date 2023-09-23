export default (function render() {
  return {
    projectBtns,
    projectsDropdown,
    allTodos,
    flaggedTodos,
    projectTodos,
  }
});

const _createTodoCard = (function(todo) {
  let _todo = document.createElement('div');
  _todo.classList.add('todo');
  _todo.id = todo.id;

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

const projectBtns = (function(projectsArr, domElement) {
  const _createProjectBtn = (function(project) {
    let _btn = document.createElement('button');
    _btn.classList.add('project-btn');
    _btn.id = project;
    _btn.textContent = project;
  
    return _btn;
  });

  projectsArr.forEach(project => {
    domElement.appendChild(_createProjectBtn(project));
  });
});

const projectsDropdown = (function(projectsArr, input) {
  let _begin = '<select name="notes-project" id="project-input">';
  let _options = '';
  let _end = '</select>';

  projectsArr.forEach(project => {
    _options += (`<option value="${project}">${project}</option>`);
  });

  input.innerHTML = _begin + _options + _end;
});

const allTodos = (function(todosArr, domElement) {
  if (todosArr === undefined) return;
  todosArr.forEach(todo => {
    domElement.appendChild(_createTodoCard(todo));
  });
});

const flaggedTodos = (function(todosArr, domElement) {
  if (todosArr === undefined) return;
  todosArr.forEach(todo => {
    if (todo.flag === true) domElement.appendChild(_createTodoCard(todo));
  });
});

const projectTodos = (function(project, todosArr, domElement) {
  if (todosArr === undefined) return;
  todosArr.forEach(todo => {
    if (todo.project === project) domElement.appendChild(_createTodoCard(todo));
  });
});