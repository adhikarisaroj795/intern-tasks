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