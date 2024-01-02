export default function initCarousel() {
  const carousel = document.querySelector("[data-carousel='scroll']");
  const rightBtn = document.querySelector("[data-carousel='right']");
  const leftBtn = document.querySelector("[data-carousel='left']");

  leftBtn.addEventListener("click", () => {
    carousel.scrollLeft -= 300;
  });
  rightBtn.addEventListener("click", () => {
    carousel.scrollLeft += 300;
  });
}
