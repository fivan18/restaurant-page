import { getElement, render } from './domManipulation';
import { navbar, main, home} from './layouts';


export function init(doc) {
  let container = getElement(doc, '#content');
  render(container, navbar() + main());

  container = getElement(doc, '.main-content');
  render(container, home());

}


init(document);

