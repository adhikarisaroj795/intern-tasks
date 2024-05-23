document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
});

document.getElementById("overlay").addEventListener("click", function () {
  document.querySelector(".navbar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
});

console.log("hello");
