(() => {
  class PageContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; height: 100%">
                  <div style="width: 80%; max-width: 800px; flex-grow: 1">
                    <slot></slot>
                  </div>
                  <div style="width: 80%; max-width: 800px; flex-grow: 0; flex-shrink: 0">
                    <div style="text-align: center">
                      <p style="color: darkgrey">
                        <small>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. FF14 copyrighted materials © SQUARE ENIX.</small>
                      </p>
                      <p>
                        <small>
                          Found a missing guide or incorrect information?
                          <a href="https://github.com/nyctef/tldrboss">
                            Contribute on github! <img src="/img/github-mark.svg" width="15" style="vertical-align:middle" />
                          </a>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
            `;
    }
  }
  window.customElements.define("page-container", PageContainer);

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

  class PageBlock extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
                <style>
                  div {
                    padding: 1rem;
                    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
                    background-color: #d2eff8;
                    margin-bottom: 1rem;
                  }
                </style>
                <div>
                  <slot></slot>
                </div>
            `;
    }
  }
  window.customElements.define("page-block", PageBlock);

  class Warning extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
                <style>
                    div {
                        display: inline-block;
                        background-color: #ffdf61;
                        padding: 0 0.5em;
                    }
                </style>
                <div>
                    ⚠ Warning: <slot></slot>
                </div>
            `;
    }
  }
  window.customElements.define("warning-block", Warning);
})();
