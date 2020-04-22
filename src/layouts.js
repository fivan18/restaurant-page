function navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
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
      <img src="assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg" class="img-fluid" alt="Responsive image">
      <div class="main-content position-absolute">
      </div>
    </main>
  `;
}

function home() {
  return `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
}

export {
  navbar,
  main,
  home
};