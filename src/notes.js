export default (function notes() {
  return {
    projectsArr,
    Project,
    addNote,
  };
});

let Project = (function (name, ...notes) {
  this.name = name;
  this.notes = notes;

  return {
    name,
    notes,
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

function _createNote() {
  let _title = document.getElementById('title').value;
  let _desc = document.getElementById('desc').value;
  let _date = document.getElementById('date').value;
  let _flag = document.getElementById('flag-button').checked;

  return (new Note(_title, _desc, _date, _flag));
};

function addNote() {
  let _note = _createNote();
  projectsArr[0].notes.push(_note);
};