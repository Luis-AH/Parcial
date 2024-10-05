const gameModal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

function openPieModal(game) {
  modalTitle.textContent = game.name;
  modalImage.src = game.image;
  modalDescription.textContent = game.description;
  gameModal.style.display = "block";
}

const games2 = document.querySelectorAll(".games");
games2.forEach((games) => {
  games.addEventListener("click", () => {
    const game = {
      name: games.querySelector(".game-title").textContent,
      image: games.querySelector(".game-img").src,
      description: games.querySelector(".game-description").textContent,
    };
    openPieModal(game);
  });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  gameModal.style.display = "none";
});
