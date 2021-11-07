const toggleBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav#mobile");
const header = document.querySelector("header");
const upBtn = document.querySelector(".go-up");

window.addEventListener("scroll", function () {
  if (this.scrollY > 10) {
    header.classList.add("background");
    upBtn.style.display = "block";
  } else {
    header.classList.remove("background");
    upBtn.style.display = "none";
  }
});

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("rotate");
  nav.classList.toggle("hide");
  setTimeout(() => {
    nav.classList.toggle("show");
  }, 1);
});
