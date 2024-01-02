export default function initReadCards() {
  const button = document.querySelector("#read-more-button");

  button.addEventListener("click", function () {
    const cards = document.querySelector(".others-cards");

    cards.classList.toggle("active");
    button.textContent == "Ler mais"
      ? (button.textContent = "Minimizar")
      : (button.textContent = "Ler mais");
  });
}
