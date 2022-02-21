const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function handleClick(event) {
    card.classList.toggle("flipped");
  });
});
