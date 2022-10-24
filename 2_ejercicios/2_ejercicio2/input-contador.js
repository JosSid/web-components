const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>


</style>

<div class="keepcoding-component-wrapper">
  <button class="decremento">-</button>
  <input type="text" readonly />
  <button class="incremento">+</button>
</div>

`;

class InputContador extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const inputElement = this.shadowRoot.querySelector('input');

    inputElement.value = 0;

    const buttonDec = this.shadowRoot.querySelector('.decremento');
    const buttonInc = this.shadowRoot.querySelector('.incremento');

    buttonDec.addEventListener('click', () => {
        inputElement.value--;
    })

    buttonInc.addEventListener('click', () => {
        inputElement.value++;
    })
  }
  
}

customElements.define("input-contador", InputContador);
