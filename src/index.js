import './style.css';
import initPage from "./initPage";
import notes from './notes';
import render from './render';

(() => {
  let pageContents = initPage().pageContents;

  render(notes().projectsArr[0], pageContents.main);

  return {};
})();