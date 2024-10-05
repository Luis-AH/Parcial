const favoriteButton = document.querySelectorAll(".star");

favoriteButton.forEach((star) => {
  star.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("favorited");

    if (this.classList.contains("favorited")) {
      this.textContent = "favorited";
      this.style.backgroundColor = "orange";
    } else {
      this.textContent = "favorite";
      this.style.backgroundColor = "#007bff";
    }
  });
});
