const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>
  .add-element-component-wrapper {
    display: flex;
  }
  input {
    flex-grow: 1;
    border-color: var(--add-element-component-input-border-color, lightblue)
  }
  button {
    background-color: var(--add-element-component-button-background-color, lightblue)
  }
</style>
<div class="add-element-component-wrapper">
  <input type="text">
  <button disabled></button>
</div>
`;

class AddElementComponent extends HTMLElement {
  value = null;
  buttonLabel = null;
  placeholder = null;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.value = this.getAttribute("value");
    this.buttonLabel = this.getAttribute("button-label") || "Añadir";
    this.placeholder = this.getAttribute("placeholder") || "Añade algo";
  }

  connectedCallback() {
    const clone = templateElement.content.cloneNode(true);

    this.initializeAddElementButton(clone);
    this.initializeAddElementInput(clone);

    this.shadowRoot.appendChild(clone);
  }

  initializeAddElementButton(clone) {
    const buttonElement = clone.querySelector("button");

    buttonElement.textContent = this.buttonLabel;

    buttonElement.addEventListener("click", () => {
      const inputValue = this.shadowRoot.querySelector("input").value;

      const event = new CustomEvent("add-element", {
        detail: inputValue,
      });

      this.dispatchEvent(event);
    });
  }

  initializeAddElementInput(clone) {
    const inputElement = clone.querySelector("input");
    inputElement.value = this.value;
    inputElement.placeholder = this.placeholder;

    inputElement.addEventListener("input", () => {
      const value = inputElement.value;
      const buttonElement = this.shadowRoot.querySelector("button");

      if (value) {
        buttonElement.removeAttribute("disabled");
      } else {
        buttonElement.setAttribute("disabled", "");
      }
    });
  }
}

customElements.define("add-element-component", AddElementComponent);