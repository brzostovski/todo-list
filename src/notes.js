const notes = {
  notesArr: [],
  note: (function (project = 'Inbox', title, description, dueDate, flag) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.flag = flag;

    add: (function() {
      let _note = _createNote();
      notesArr.push(_note);
    }),

    function _getNewNoteData() {
      return {
        title: document.getElementById('title-input').value,
        desc: document.getElementById('desc-input').value,
        date: document.getElementById('date-input').value,
        flag: document.getElementById('flag-btn').checked,
      };
    };

    function _createNote() {
      let _title = _getNewNoteData().title;
      let _desc = _getNewNoteData().desc;
      let _date = _getNewNoteData().date;
      let _flag = _getNewNoteData().flag;
    
      return (new _Note(_title, _desc, _date, _flag));
    };
  
    return {
      project,
      title,
      description,
      dueDate,
      flag,
      add,
    }
  }),
};

export default notes;