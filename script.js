const hamburgerIcon = document.querySelector(".hamburger-icon");
const menu = document.querySelector("#menu");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  menu.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menu.style.display = "none";
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".menu") &&
    !event.target.classList.contains("hamburger-icon")
  ) {
    menu.style.display = "none";
  }
});
