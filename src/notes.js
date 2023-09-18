import page from "./page";

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
  let _title = page().getNewNoteData().title;
  let _desc = page().getNewNoteData().desc;
  let _date = page().getNewNoteData().date;
  let _flag = page().getNewNoteData().flag;

  return (new Note(_title, _desc, _date, _flag));
};

function addNote(project) {
  let _note = _createNote();
  project.notes.push(_note);
};