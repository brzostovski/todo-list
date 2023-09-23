const todos = {
  arr: [],
  projects: ['Inbox', 'test', 'TEST_77', '<em>BOLD</em>'],
  add: (function(id) {
    const _Todo = (function (project, title, description, dueDate, flag, id) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.flag = flag;
      this.id = id;
    
      return {
        project,
        title,
        description,
        dueDate,
        flag,
        id,
      }
    });

    function _getNewTodoData() {
      return {
        project: document.getElementById('project-input').value,
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };
  
    function _createTodo(id) {
      let _project = _getNewTodoData().project;
      let _title = _getNewTodoData().title;
      let _desc = _getNewTodoData().desc;
      let _date = _getNewTodoData().date;
      let _flag = _getNewTodoData().flag;
    
      return (new _Todo(_project, _title, _desc, _date, _flag, id));
    };

    let _todo = _createTodo(id);
    todos.arr.push(_todo);
  }),
};

export default todos;