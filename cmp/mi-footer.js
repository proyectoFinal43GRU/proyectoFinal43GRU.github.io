class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Rosas Albornos Adrian Isai
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
