export default function notes() {
  let projects = [];
  
  let inbox = new Project('Inbox');
  let defaultNote = new Note(
    'Example Note',
    'This is an example note!',
    '12.12.2024',
    false
  );

  inbox.notes.push(defaultNote);
  projects.push(inbox);

  return {projects};
};

let Project = (function (name, ...notes) {
  this.name = name;
  this.notes = notes;

  return {
    name,
    notes,
  }
});

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