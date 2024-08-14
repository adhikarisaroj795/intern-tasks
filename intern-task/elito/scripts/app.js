const smoothingFactor = 0.1;
let currentX = 0;
let currentY = 0;

function applyTranslation(container, factor) {
  const boundingRect = container.getBoundingClientRect();
  return function (e) {
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;

    const centerX = boundingRect.width / 2;
    const centerY = boundingRect.height / 2;

    const targetX = -(mouseX - centerX) * 0.05 * factor;
    const targetY = -(mouseY - centerY) * 0.05 * factor;

    // Update the current position without reverting to the original place
    currentX += (targetX - currentX) * smoothingFactor;
    currentY += (targetY - currentY) * smoothingFactor;

    // Apply translation to each icon
    document.querySelector(
      ".icon-one"
    ).style.transform = `translate(${currentX}px, ${currentY}px)`;
    document.querySelector(
      ".icon-two"
    ).style.transform = `translate(${currentX}px, ${currentY}px)`;
    document.querySelector(
      ".icon-three"
    ).style.transform = `translate(${currentX}px, ${currentY}px)`;
    document.querySelector(
      ".icon-four"
    ).style.transform = `translate(${currentX}px, ${currentY}px)`;
  };
}

document
  .querySelector(".banner-right-image-holder")
  .addEventListener(
    "mousemove",
    applyTranslation(document.querySelector(".banner-right-image-holder"), 1)
  );

document
  .querySelector(".banner-wrapper")
  .addEventListener(
    "mousemove",
    applyTranslation(document.querySelector(".banner-wrapper"), 0.5)
  );
