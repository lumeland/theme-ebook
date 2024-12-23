import * as state from "./state.js";

class FontSize extends HTMLElement {
  sizes = new Map([
    ["small", "1rem"],
    ["medium", "1.25rem"],
    ["normal", "1.5rem"],
    ["big", "1.75rem"],
    ["xbig", "2rem"],
  ]);

  connectedCallback() {
    const initSize = this.size;
    this.size = initSize;

    this.querySelectorAll("button").forEach((button) => {
      button.style.fontSize = this.sizes.get(button.dataset.size);
      button.addEventListener("click", () => {
        this.size = button.dataset.size;
      });
    });
  }

  set size(size) {
    this.ownerDocument.documentElement.style.setProperty(
      "--font-size",
      this.sizes.get(size),
    );

    this.querySelectorAll("button").forEach((button) => {
      if (button.dataset.size === size) {
        button.setAttribute("aria-pressed", "true");
      } else {
        button.setAttribute("aria-pressed", "false");
      }
    });

    state.set("fontSize", this.sizes.get(size));
  }

  get size() {
    const size = getComputedStyle(this.ownerDocument.documentElement)
      .getPropertyValue(
        "--font-size",
      );

    for (const [key, value] of this.sizes.entries()) {
      if (value === size) {
        return key;
      }
    }
    return "normal";
  }
}

customElements.define("font-size", FontSize);
