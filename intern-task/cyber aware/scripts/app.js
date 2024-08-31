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

/// custom date

const dateInput = document.querySelector(".date-input");
const placeholderText = document.querySelector(".placeholder-text");
const aboveInput = document.querySelector(".above-input");
const placeholderTextAbove = document.querySelector(".placeholder-text-above");

dateInput.addEventListener("focus", () => {
  placeholderText.classList.add("hidden");
});
aboveInput.addEventListener("focus", () => {
  placeholderTextAbove.classList.add("color-toggle");
});
aboveInput.addEventListener("blur", () => {
  placeholderTextAbove.classList.remove("color-toggle");
});

document.getElementById("icon-click").addEventListener("click", () => {
  document.getElementById("date-input").focus();
});

// file handler

const fileInputs = document.querySelectorAll(".file-input");

fileInputs.forEach((fInput) => {
  fInput.addEventListener("change", function (event) {
    // Hide the specific `.file-data` within the same container
    const fileData = parentContainer.querySelector(".file-data");
    if (fileData) {
      fileData.style.display = "none";
    }

    // Show the specific `.file-name` within the same container
    const fileNameElement = parentContainer.querySelector(".file-name");
    if (fileNameElement) {
      fileNameElement.style.display = "block";

      // Update the file name text
      const fileName = event.target.files[0]
        ? event.target.files[0].name
        : "No file chosen";
      fileNameElement.textContent = fileName;
    }
  });
});

// document
//   .getElementById("fileInput")
//   .addEventListener("change", function (event) {
//     document.querySelector(".file-data").style.display = "none";
//     document.querySelector(".file-name").style.display = "block";
//     const fileName = event.target.files[0]
//       ? event.target.files[0].name
//       : "No file chosen";
//     document.getElementById("fileName").textContent = fileName;
//   });
