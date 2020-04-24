import backgroundImg from './assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg';
import campechanoImg from './assets/images/amie-watson-2hBUvhe81mU-unsplash.jpg';
import cochinitaImg from './assets/images/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg';
import pastorImg from './assets/images/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg';

function navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>`;
}

function main() {
  return `
    <main class="position-relative">
      <img src="${backgroundImg}" class="img-fluid" alt="Responsive image">
      <div class="main-content position-absolute">
      </div>
    </main>
  `;
}

function home() {
  return `
    <div class="jumbotron jumbotron-fluid transparent p-3">
      <h1 class="display-4 d-flex justify-content-center">Chilango Taco</h1>
      <p class="lead">The right place to eat mexican tacos, come with your family.</p>
    </div>
  `;
}

function menu() {
  return `
    <ul class="list-unstyled transparent p-3">
      <li class="media">
        <div class="img-size mr-3">
          <img src="${campechanoImg}" class="img-fluid" alt="...">
        </div>
        <div class="media-body">
          <h5 class="mt-0 mb-1">Campechano</h5>
          A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling
        </div>
      </li>
      <li class="media mt-4">
        <div class="img-size mr-3">
          <img src="${cochinitaImg}" class="img-fluid" alt="...">
        </div>
        <div class="media-body">
          <h5 class="mt-0 mb-1">Cochinita pibil</h5>
          Cochinita pibil (also puerco pibil or cochinita con achiote) is a traditional Mexican slow-roasted pork dish from the Yucatán Peninsula.
        </div>
      </li>
      <li class="media mt-4">
        <div class="img-size mr-3">
          <img src="${pastorImg}" class="img-fluid" alt="...">
        </div>
        <div class="media-body">
          <h5 class="mt-0 mb-1">Al pastor</h5>
          Al pastor, also known as tacos al pastor, is a taco made with spit-grilled pork.
        </div>
      </li>
    </ul>
  `;
}

function contact() {
  return `
  <div class="jumbotron jumbotron-fluid transparent p-3">
    <h1 class="display-4">Chilango Taco</h1>
    <p class="lead">Fell free to contact us for info or place location</p>
    <hr class="my-4">
    <div>
      <i class="fas fa-phone-square-alt icon-size"></i>   555-44-23-10
    </div>
    <div>
      <i class="fas fa-envelope-square icon-size"></i>    info@chilangotaco.com
    </div>
    <div>
      <i class="fas fa-map-marker-alt icon-size"></i>     Wall street #5 Chilangolandia, CDMX.
    </div>
    <hr class="my-4">
    <div>
      <i class="fab fa-facebook-square icon-size"></i>
      <i class="fab fa-twitter icon-size"></i>
      <i class="fab fa-instagram-square icon-size"></i>
    </div>
  </div>
  `;
}

export {
  navbar,
  main,
  home,
  menu,
  contact,
};