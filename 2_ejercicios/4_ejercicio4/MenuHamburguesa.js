import { templateStyle } from "./utils/templateStyle.js";

const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>
    ${templateStyle()}
</style>

<nav class="nav">
        <div class="nav__container">
            <h1 class="nav__logo"></h1>

            <label for="menu" class="nav__label">
                <img src="assets/menu.svg" class="nav__img" alt="Menu">
            </label>
            <input type="checkbox" id="menu" class="nav__input">
            <div class="nav__menu">
                <a href="#" class="nav__item">Inicio</a>
                <a href="#" class="nav__item">Registrate</a>
                <a href="#" class="nav__item">RRSS</a>
            </div>
        </div>
    </nav>

`;

class MenuHamburguesa extends HTMLElement {
  constructor() {
    super();

    this.name = this.getAttribute('name') || "Welcome"

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    this.shadowRoot.querySelector('.nav__logo').textContent = this.name;
    this
  }
}

customElements.define("menu-hamburguesa", MenuHamburguesa);
