// timer
const endDate = "27 July 2024 08:20:00 PM";

const inputs = document.querySelectorAll(".timer-input");
// const clock = () => {

// }

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};

// initial call
clock();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(() => {
  clock();
}, 1000);

// accordion
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionContent = this.nextElementSibling.nextElementSibling;
            const icon = this.querySelector('.icon');
            const iconBox = this.querySelector('.icon-box');
            // Toggle the active class
            this.classList.toggle('active');
            // Toggle the max height and icon
            if (this.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                icon.textContent = '-';
                iconBox.style.backgroundColor = '#FDE9E2';
            } else {
                accordionContent.style.maxHeight = 0;
                icon.textContent = '+';
                iconBox.style.backgroundColor = '#FDE9E2';
            }
            // Close other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.nextElementSibling.style.maxHeight = 0;
                    otherHeader.querySelector('.icon').textContent = '+';
                    otherHeader.querySelector('.icon-box').style.backgroundColor = '#FFDDDD';
                }
            });
        });
    });
});