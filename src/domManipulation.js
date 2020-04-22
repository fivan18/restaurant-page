function render(element, content){
  element.innerHTML = content; 
}

function getElement(element, target) {
  return element.querySelector(target);
}

export {
  render,
  getElement
};
