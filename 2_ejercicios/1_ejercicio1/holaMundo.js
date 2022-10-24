const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>


</style>

<div class="hola-mundo-wrapper">
  <h2></h2>
</div>

`;

class HolaMundo extends HTMLElement {
  constructor() {
    super();
    this.message = this.getAttribute('message') || 'Hola mundo'
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const holaMundo = this.shadowRoot.querySelector('h2');
    holaMundo.textContent = this.message;

    holaMundo.addEventListener('click', () => {
        alert(this.message)
    })
  }
}

customElements.define("hola-mundo", HolaMundo);
