const ctx = document.getElementById("progressChart").getContext("2d");

if (!ctx) {
  console.error("Canvas not found");
} else {
  const progressChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["0 Months", "1 Month", "7 Months", "8 Months", "20 Months"],
      datasets: [
        {
          label: "Learner progress",
          data: [1, 1, 2, 5, 2],
          backgroundColor: "#84cd15",
          borderColor: "#84cd15",
          borderWidth: 2,
          fill: true,
          tension: 0,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          align: "end",
          labels: {
            color: "#4A4A4A",
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            containLabel: true,
          },
          ticks: {
            color: "#9B9B9B",
            padding: 20,
          },
        },
        y: {
          ticks: {
            padding: 20,
            display: true,
            stepSize: 2,
            color: "#9B9B9B",
            max: 6,
          },
          grid: {
            drawBorder: false,
            color: function (context) {
              if ([0, 2, 4, 6].includes(context.tick.value)) {
                return "#E0E0E0";
              }
              return "transparent";
            },
          },
        },
      },
      //   layout: {
      //     padding: {
      //       left: 50,
      //     },
      //   },
    },
  });
}

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});
