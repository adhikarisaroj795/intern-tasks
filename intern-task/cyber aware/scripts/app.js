document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("change");
  document.querySelector(".overlay").classList.toggle("active");
});
