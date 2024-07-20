document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const allContents = document.querySelectorAll(".accordion-content");
      const arrow = this.querySelector(".arrow");
      const headerP = this.querySelector(".acc-header");
      const allArrows = document.querySelectorAll(".arrow");
      const allHeaderText = document.querySelectorAll(".acc-header");

      allContents.forEach((item) => {
        if (item !== content) {
          item.classList.remove("show");
          item.style.maxHeight = null;
        }
      });

      allArrows.forEach((item) => {
        if (item !== arrow) {
          item.classList.remove("rotate");
        }
      });

      allHeaderText.forEach((item) => {
        if (item !== headerP) {
          item.classList.remove("headerColor");
        }
      });

      if (content.classList.contains("show")) {
        content.classList.remove("show");
        content.style.maxHeight = null;
      } else {
        content.classList.add("show");
        content.style.maxHeight = content.scrollHeight + "px";
      }

      arrow.classList.toggle("rotate");
      headerP.classList.toggle("headerColor");
    });
  });
});
