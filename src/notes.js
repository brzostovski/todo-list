import { nanoid } from "nanoid";

const notes = {
  arr: [],
  projects: ['Inbox', 'test', 'TEST_77', '<em>BOLD</em>'],
  add: (function() {
    const _Note = (function (project, title, description, dueDate, flag) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.flag = flag;

      let id = nanoid();
    
      return {
        project,
        title,
        description,
        dueDate,
        flag,
        id,
      }
    });

    function _getNewNoteData() {
      return {
        project: document.getElementById('project-input').value,
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

export default notes;