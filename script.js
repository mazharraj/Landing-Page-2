let menuBtn = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden-menu")) {
    menu.classList.remove("hidden-menu");
    menu.classList.add("visible-menu");
  } else {
    menu.classList.remove("visible-menu");
    menu.classList.add("hidden-menu");
  }
});
