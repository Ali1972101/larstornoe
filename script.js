let hamburger = document.querySelector(".icon-hamburger");
let close = document.querySelector(".close-btn");
let nav = document.querySelector(".navdiv2");

hamburger.addEventListener("click", () => {
  close.style.display = "block";
  hamburger.style.display = "none";
  nav.style.display = "flex";
  nav.style.transition = "all 1s ease";
  nav.style.gap = "20px";
  nav.style.alignItems = "center";
  nav.style.justifyContent = "center";
  nav.style.flexDirection = "column";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  hamburger.style.display = "block";
  nav.style.display = "none";
});

function back() {
  window.history.back();
}

