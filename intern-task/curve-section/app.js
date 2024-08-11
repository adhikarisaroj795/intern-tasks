document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step) => {
    step.addEventListener("mouseover", () => {
      step.style.backgroundColor = "#e0e0e0";
    });

    step.addEventListener("mouseout", () => {
      step.style.backgroundColor = "#f9f9f9";
    });
  });
});
