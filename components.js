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

  class YoutubeVideo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const id = this.getAttribute("data-id");
      this.shadowRoot.innerHTML = `
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/${id}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            `;
    }
  }
  window.customElements.define("youtube-video", YoutubeVideo);
})();
