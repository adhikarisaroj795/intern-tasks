$(document).ready(function () {
  // Array of image sources corresponding to each slide
  const imageSources = [
    "assets/images/testi-middle.jpg", // Image for Slide 1
    "assets/images/testi-1.jpg", // Image for Slide 2
    "assets/images/testi-2.jpg", // Image for Slide 3
    "assets/images/testi-3.jpg", // Image for Slide 4
    "assets/images/testi-4.jpg", // Image for Slide 5
  ];

  // Initialize the slider
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
  });
  $(".slick-carousel-1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="prev-arrow sld-btn-2-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="next-arrow sld-btn-2-next"><i class="fa-solid fa-arrow-right"></i></button>',
  });
  $(".slick-carousel-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="prev-arrow sld-btn-3-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="next-arrow sld-btn-3-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
  });

  function updateMainImage(currentSlide) {
    const imgElement = $(".main-img img");

    imgElement.css("opacity", 0);

    setTimeout(() => {
      imgElement.attr("src", imageSources[currentSlide]);

      imgElement.css("opacity", 1);
    }, 300);
  }

  $(".slick-carousel").on("init", function (event, slick) {
    updateMainImage(slick.currentSlide);
  });

  $(".slick-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      updateMainImage(nextSlide);
    }
  );
});
