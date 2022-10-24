import './progress-bar.js'

const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>

.film-item-wrapper {
  width: 200px;
  height: 300px;
  position: relative;
}

a {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
}

progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>

  <div class="film-item-wrapper">
    <a href="https://www.filmaffinity.com/" target="_blank">
      <img src="" alt="" />
      <progress-bar></progress-bar>
      </a>
  </div>
`;

class FilmItem extends HTMLElement {
  constructor() {
    super();

    this.name = this.getAttribute('name') || null;
    this.image = this.getAttribute('image') || 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'
    this.progress = this.getAttribute('progress') || null;//no pintar barra si no tenemos valoracion
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    

    const imgElement = template.querySelector('img');
    imgElement.src = this.image;


    const linkElement = template.querySelector('a');
    linkElement.setAttribute('href', `https://www.filmaffinity.com/es/search.php?stext=${this.name}`);

    const progressBarElement = template.querySelector('progress-bar');
    progressBarElement.setAttribute('progress',this.progress);

    this.shadowRoot.appendChild(template);

  }
}

customElements.define("film-item", FilmItem);
