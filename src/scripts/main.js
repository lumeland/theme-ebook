import "./font-size.js";
import "./page-turner.js";

const scrollingElement = document.body;

scrollingElement.addEventListener("wheel", (e) => {
  // Don't override the scroll wheel with open modals
  if (document.querySelector("dialog[open]")) {
    return;
  }

  // Override only vertical scrolling
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault();
    scrollingElement.style.scrollBehavior = "auto";
    scrollingElement.scrollLeft += e.deltaY;
    scrollingElement.style.scrollBehavior = "smooth";
  }
}, { passive: false });
