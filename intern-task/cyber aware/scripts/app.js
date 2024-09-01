document.addEventListener("DOMContentLoaded", function () {
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
