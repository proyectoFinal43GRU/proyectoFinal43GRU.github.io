class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Gutierrez Ramirez Ulises
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
