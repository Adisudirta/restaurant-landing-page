const toggleBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("rotate");
  nav.classList.toggle("hide");
  setTimeout(() => {
    nav.classList.toggle("show");
  }, 1);
});
