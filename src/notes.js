export default (function notes() {
  let projectsArr = [];

  let Project = (function (name, ...notes) {
    this.name = name;
    this.notes = notes;
  
    return {
      name,
      notes,
    }
  });

  let inbox = new Project('Inbox');
  
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

  function createNote() {
    const _title = document.getElementById('title').value;
    const _desc = document.getElementById('desc').value;
    const _date = document.getElementById('date').value;
    const _flag = document.getElementById('flag-button').value;

    return (new Note(_title, _desc, _date, _flag));
  };
  
  let defaultNote = new Note(
    'Example Note',
    'This is an example note! And this is just more and more text to see how the notes are being displayed after styling them a bit.',
    '12.12.2024',
    false
  );

  let shortNote = new Note('Short Note', 'This note is shorter!', '', true);

  for(let i = 0; i < 20; i++){inbox.notes.push(defaultNote);};
  inbox.notes[2] = shortNote;
  projectsArr.push(inbox);

  return {
    projectsArr,
    Project,
    Note,
    createNote,
  };
});