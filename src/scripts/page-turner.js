const scrollingElement = document.body;
import * as state from "./state.js";

class PageTurner extends HTMLElement {
  connectedCallback() {
    const next = this.querySelector('button[data-page="next"]');
    const previous = this.querySelector('button[data-page="previous"]');

    this.previousButton = previous;
    this.nextButton = next;

    next.addEventListener("click", () => this.go(true));
    previous.addEventListener("click", () => this.go(false));

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (event.metaKey || event.ctrlKey) {
          this.go(scrollingElement.scrollWidth);
        } else {
          this.go();
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (event.metaKey || event.ctrlKey) {
          this.go(0);
        } else {
          this.go(false);
        }
      } else if (event.key === " " && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        this.go(!event.shiftKey);
      }
    });

    // Restore the last position
    if (!document.location.hash && !document.location.href.endsWith("#")) {
      let position = state.get("position");

      if (position === "end") {
        position = scrollingElement.scrollWidth - scrollingElement.clientWidth;
      }

      if (position > 0) {
        scrollingElement.style.scrollBehavior = "auto";
        scrollingElement.scrollTop = 0;
        scrollingElement.scrollLeft = position;
        scrollingElement.style.scrollBehavior = "smooth";
      }
    } else {
      state.set("position", scrollingElement.scrollLeft);
    }

    this.previousButton.disabled = scrollingElement.scrollLeft === 0;

    let timeout;

    scrollingElement.addEventListener("scroll", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.go(scrollingElement.scrollLeft);
        state.set("position", scrollingElement.scrollLeft);
      }, 250);
    });
  }

  go(next = true) {
    const style = getComputedStyle(document.querySelector(".book"));
    const columnWidth = parseFloat(style.getPropertyValue("column-width"), 10);
    const columnGap = parseFloat(style.getPropertyValue("column-gap"), 10);
    const step = columnWidth + columnGap;

    const min = 0;
    const max = scrollingElement.scrollWidth - scrollingElement.clientWidth;
    const value = typeof next === "number"
      ? next
      : scrollingElement.scrollLeft + (next ? step : -step);

    const scrollLeft = Math.round(Math.min(max, Math.max(min, value)) / step) * step;
    scrollingElement.scrollTop = 0;

    if (scrollLeft <= max) {
      scrollingElement.scrollLeft = scrollLeft;
    }

    this.nextButton.disabled = (scrollingElement.scrollLeft + step) >= max;
    this.previousButton.disabled = scrollingElement.scrollLeft === 0;
    history.replaceState(null, "", document.location.pathname);
  }
}

customElements.define("page-turner", PageTurner);
