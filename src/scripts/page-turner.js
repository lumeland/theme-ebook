class PageTurner extends HTMLElement {
  connectedCallback() {
    const next = this.querySelector('button[data-page="next"]');
    const previous = this.querySelector('button[data-page="previous"]');

    next.addEventListener("click", () => this.go());
    previous.addEventListener("click", () => this.go(false));

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (event.metaKey || event.ctrlKey) {
          this.go(document.scrollingElement.scrollWidth);
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
      } else if (event.key === " ") {
        event.preventDefault();
        this.go(!event.shiftKey);
      }
    });
  }

  go(next = true) {
    const style = getComputedStyle(document.querySelector(".book"));
    const columnWidth = parseFloat(style.getPropertyValue("column-width"), 10);
    const columnGap = parseFloat(style.getPropertyValue("column-gap"), 10);
    const step = columnWidth + columnGap;

    const min = 0;
    const max = document.scrollingElement.scrollWidth;
    const value = typeof next === "number"
      ? next
      : document.scrollingElement.scrollLeft + (next ? step : -step);

    document.scrollingElement.scrollLeft =
      Math.round(Math.min(max, Math.max(min, value)) / step) * step;
    history.replaceState(null, "", document.location.pathname);
  }
}

customElements.define("page-turner", PageTurner);
