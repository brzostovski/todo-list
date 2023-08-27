import './style.css';
import initPage from "./initPage";
import render from './render';
import notes from './notes';

const page = (() => {
  initPage();
  render();

  return {};
})()