document
  .querySelector(".custom-placeholder input")
  .addEventListener("focus", function () {
    // Clear the custom placeholder when the input gains focus
    var placeholder = document.querySelector(".placeholder");
    placeholder.style.display = "none";
  });

document
  .querySelector(".custom-placeholder input")
  .addEventListener("blur", function () {
    // Restore the custom placeholder when the input loses focus
    var placeholder = document.querySelector(".placeholder");
    if (!this.value) {
      placeholder.style.display = "block";
    }
  });
