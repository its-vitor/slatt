export default function initDropdown() {
  const dropItem = document.querySelector("[data-drop='menu'");

  dropItem.addEventListener("click", () => {
    dropItem.classList.toggle("show");
  });
}
