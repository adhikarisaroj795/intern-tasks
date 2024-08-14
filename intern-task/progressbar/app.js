document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".progressbar");
  const button = document.getElementById("btn");
  let progress = 0;

  button.addEventListener("click", function () {
    if (progress < 100) {
      progress += 20;
    } else {
      progress = 0;
    }
    progressBar.style.width = progress + "%";
  });
});
