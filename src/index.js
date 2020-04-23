import {
  getElement, render, addClass, removeClass, setEventHandler,
} from './domManipulation';
import {
  navbar, main, home, menu, contact,
} from './layouts';

// Render main layout
let container = getElement(document, '#content');
render(container, navbar() + main());

container = getElement(document, '.main-content');
render(container, home());

// Add event handler to each tab
const mapperFuntions = {
  Home: home(),
  Menu: menu(),
  Contact: contact(),
};

const tabHandler = (event) => {
  const current = getElement(document, '.active');
  if (current) {
    removeClass(current, 'active');
  }

  const { target } = event;
  addClass(target, 'active');
  const container = getElement(document, '.main-content');
  render(container, mapperFuntions[target.textContent]);
};

setEventHandler('.nav-link', 'click', tabHandler);
