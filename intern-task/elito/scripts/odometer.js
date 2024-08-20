document.addEventListener("DOMContentLoaded", function () {
  const odometers = document.querySelectorAll("#odometer");

  odometers.forEach((odometer) => {
    let startValue = 0;
    const endValue = parseInt(odometer.getAttribute("data-target"), 10);
    const duration = 10000;
    const increment = endValue / (duration / 16);
    const suffix = odometer.getAttribute("data-suffix");

    function updateOdometer() {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        odometer.textContent = startValue + suffix;
        return;
      }
      odometer.textContent = Math.floor(startValue) + suffix;
      requestAnimationFrame(updateOdometer);
    }

    updateOdometer();
  });
});
