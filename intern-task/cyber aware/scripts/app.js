document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("change");
  document.querySelector(".overlay").classList.toggle("active");
});

document.querySelector(".aside-arrow").addEventListener("click", () => {
  document
    .querySelector(".main-content-left")
    .classList.toggle("active-sidebar");

  document
    .querySelector(".main-content-right")
    .classList.toggle("active-sidebar");

  const asideSidelinks = document.querySelectorAll(".aside-navlink");

  asideSidelinks.forEach((asidelink) => {
    asidelink.classList.toggle("aside-a-block");
  });
});
