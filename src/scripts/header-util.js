const toggleBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav#mobile");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (this.scrollY > 10) {
    header.classList.add("background");
  } else {
    header.classList.remove("background");
  }
});

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("rotate");
  nav.classList.toggle("hide");
  setTimeout(() => {
    nav.classList.toggle("show");
  }, 1);
});
