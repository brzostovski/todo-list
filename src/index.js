import './style.css';
import printMe from "./print";

const page = (() => {
  let pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';
  pageContainer.textContent = 'this is some text';
  document.body.appendChild(pageContainer);

  printMe();

  return 0;
})()