import './film-item.js'

import './add-element-component.js'

const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>


</style>


<div class="films-app-wrapper">
  <add-element-component></add-element-component>
  <div class="films-wrapper"></div>
</div>

`;

class FilmsApp extends HTMLElement {

    OMDB_API_KEY = "e477ed6a";
    API_URL = `http://www.omdbapi.com/?apikey=${this.OMDB_API_KEY}`;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const addElementComponent = this.shadowRoot.querySelector('add-element-component')
    addElementComponent.addEventListener('add-element', (event) => {
        const filmName = event.detail;
        this.searchFilm(filmName)
    })
  }

  async searchFilm(filmName) {
    try {
        const response = await fetch(`${this.API_URL}&s=${filmName}`);
        const data = await response.json()
        const films = data.Search;

        this.drawFilms(films)
    }catch(err){
        alert(err)
    }
  }

  drawFilms(films) {
    films.forEach(async film => {
      const response = await fetch(`${this.API_URL}&i=${film.imdbID}`);
      const data = await response.json();
      const rating = Number(data.imdbRating) * 10;

        const filmItemElement = document.createElement('div');
        filmItemElement.innerHTML = `
        <film-item name="${film.Title}" image="${film.Poster}" progress="${rating}"></film-item>
        `
        this.shadowRoot.querySelector('.films-app-wrapper').appendChild(filmItemElement)
    });
  }
}

customElements.define("films-app", FilmsApp);
