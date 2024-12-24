import "./font-size.js";
import "./page-turner.js";
import * as state from "./state.js";

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

// Bookmarks
document.querySelectorAll(".header-anchor").forEach((anchor) => {
  anchor.addEventListener("click", () => {
    if (anchor.classList.contains("is-bookmark")) {
      anchor.classList.remove("is-bookmark");
      state.set("bookmark", null);
      return;
    }
    document.querySelectorAll(".header-anchor.is-bookmark").forEach((
      bookmark,
    ) => bookmark.classList.remove("is-bookmark"));
    anchor.classList.add("is-bookmark");
    state.set("bookmark", anchor.getAttribute("href"));
  });
});
