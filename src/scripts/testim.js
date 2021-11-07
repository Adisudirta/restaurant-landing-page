const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cardTestim = document.querySelectorAll(".card-testim");
const dots = document.querySelectorAll(".dot");

prevBtn.addEventListener("click", function () {
  for (let i = 0; i < cardTestim.length; i++) {
    if (cardTestim[i].style.display === "block") {
      const currentCard = cardTestim[i];
      const currentDot = dots[i];

      currentCard.style.display = "none";
      currentDot.classList.remove("active");

      if (i === 0) {
        cardTestim[cardTestim.length - 1].style.display = "block";
        dots[dots.length - 1].classList.add("active");
      } else {
        cardTestim[i - 1].style.display = "block";
        dots[i - 1].classList.add("active");
      }

      break;
    }
  }
});

nextBtn.addEventListener("click", function () {
  for (let i = 0; i < cardTestim.length; i++) {
    if (cardTestim[i].style.display === "block") {
      const currentCard = cardTestim[i];
      const currentDot = dots[i];

      currentCard.style.display = "none";
      currentDot.classList.remove("active");

      if (i === cardTestim.length - 1) {
        cardTestim[0].style.display = "block";
        dots[0].classList.add("active");
      } else {
        cardTestim[i + 1].style.display = "block";
        dots[i + 1].classList.add("active");
      }

      break;
    }
  }
});
