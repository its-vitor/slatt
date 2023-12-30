export default function initMenuMobile() {
  const btn = document.querySelector("[data-menu='btn']");
  const closeBtn = document.querySelector('[data-menu="close"]');
  const menu = document.querySelector(".nav-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
  });
}
