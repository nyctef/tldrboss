(() => {
  class CenteredText extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
                <style>
                    div {
                        text-align: center;
                    }
                </style>
                <div>
                    <slot></slot>
                </div>
            `;
    }
  }
  window.customElements.define("centered-text", CenteredText);
})();
