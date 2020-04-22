import { getElement, render } from './domManipulation';
import { navbar} from './layouts';


export function init(doc) {
  const nav = navbar();
  const container = getElement(doc, '#content');
  render(container, nav);
}


init(document);

