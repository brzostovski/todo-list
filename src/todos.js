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

export default todos;