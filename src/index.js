import './style.css';
import initPage from "./initPage";
import notes from './notes';
import render from './render';

const page = (() => {
  initPage();
  render(notes().projects);

  return {};
})();