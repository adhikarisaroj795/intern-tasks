document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-bar").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("change");
    document.querySelector(".overlay").classList.toggle("active");
  });

  const asidebtn = document.querySelector(".aside-arrow");
  asidebtn.addEventListener("click", () => {
    document.querySelector(".aside-nav").classList.toggle("aside-side-active");
    document.querySelector(".overlay3").classList.toggle("active3");
  });

  /// custom date

  const dateInput = document.querySelector(".date-input");
  const placeholderText = document.querySelector(".placeholder-text");
  const aboveInput = document.querySelector(".above-input");
  const placeholderTextAbove = document.querySelector(
    ".placeholder-text-above"
  );

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

  // document.querySelectorAll(".file-input").forEach((input) => {
  //   input.addEventListener("change", function (event) {
  //     const fileContainer = this.closest(".attachment-field");
  //     fileContainer.querySelector(".file-data").style.display = "none";
  //     fileContainer.querySelector(".file-name").style.display = "block";
  //     const fileName = event.target.files[0]
  //       ? event.target.files[0].name
  //       : "No file chosen";
  //     fileContainer.querySelector(".file-name").textContent = fileName;
  //   });
  // });

  document.querySelectorAll(".file-input").forEach((fileInput) => {
    console.log(fileInput);
    const attachmentField = fileInput.closest(".attachment-field");
    // console.log(attachmentField);

    if (attachmentField) {
      const fileData = attachmentField.querySelector(".file-data");
      const fileNameDiv = attachmentField.querySelector(".file-name");

      fileInput.addEventListener("change", function (event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
          fileData.style.display = "none";
          fileNameDiv.style.display = "block";

          fileNameDiv.textContent = selectedFile.name;
        } else {
          fileData.style.display = "block";
          fileNameDiv.style.display = "none";

          fileNameDiv.textContent = "No file chosen";
        }
      });
    }
  });
});
