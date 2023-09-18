export default (function notes() {
  return {
    projectsArr,
    Project,
  };
});

let Project = (function (name, ...notes) {
  this.name = name;
  this.notes = notes;

  const _getNewNoteData = (function() {
    return {
      title: document.getElementById('title-input').value,
      desc: document.getElementById('desc-input').value,
      date: document.getElementById('date-input').value,
      flag: document.getElementById('flag-btn').checked,
    };
  });
  
  function _createNote() {
    let _title = _getNewNoteData().title;
    let _desc = _getNewNoteData().desc;
    let _date = _getNewNoteData().date;
    let _flag = _getNewNoteData().flag;
  
    return (new Note(_title, _desc, _date, _flag));
  };

  function addNote() {
    let _note = _createNote();
    notes.push(_note);
  };

  return {
    name,
    notes,
    addNote,
  }
});

let projectsArr = [];
let inbox = new Project('Inbox'); // this creates default project called "Inbox"
projectsArr[0] = inbox;

let Note = (function (title, description, dueDate, flag) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.flag = flag;

  return {
    title,
    description,
    dueDate,
    flag,
  }
});