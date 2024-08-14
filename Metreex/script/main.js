document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionContent = this.nextElementSibling;
            const icon = this.querySelector('.icon');
            const iconBox = this.querySelector('.icon-box');
            // Toggle the active class
            this.classList.toggle('active');
            // Toggle the max height and icon
            if (this.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                icon.classList.add('fa-angle-up');
                icon.classList.remove('fa-angle-down');
                iconBox.style.backgroundColor = '#f6f7f9';
            } else {
                accordionContent.style.maxHeight = 0;
                icon.classList.remove('fa-angle-up');
                icon.classList.add('fa-angle-down');
                iconBox.style.backgroundColor = '#f6f7f9';
            }
            // Close other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = 0;
                    otherHeader.querySelector('.icon').classList.add('fa-angle-down');
                    otherHeader.querySelector('.icon').classList.remove('fa-angle-up');
                    otherHeader.querySelector('.icon-box').style.backgroundColor = '#f6f7f9';
                }
            });
        });
    });
});

//fixed header 

const header = document.querySelector('.heading_section');
const header_inner = document.querySelector('.header_section_wrapper');
const listItems = document.querySelectorAll('.header_list_a');
const logoWhite = document.querySelector('.white-logo');
const logoBlack = document.querySelector('.black-logo');


window.addEventListener("scroll", on_scroll);

function on_scroll(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop >= 100){
        header.classList.add('scroll');
        header_inner.classList.add('scroll');
        listItems.forEach(Items => {
            Items.classList.add('scroll');
            Items.classList.remove('header_list_a');
            

        })
        logoWhite.classList.add('scroll');
        logoBlack.classList.remove('scroll');


        console.log('its scrolling');
    }
    else{
        header.classList.remove('scroll');
        header_inner.classList.remove('scroll');
        listItems.forEach(Items => {
            Items.classList.remove('scroll');
            Items.classList.add('header_list_a');
        })
        logoWhite.classList.remove('scroll');
        logoBlack.classList.add('scroll');

    }

};

// header dropdown

document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.m-accordionHeader');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionContent = this.nextElementSibling;
            const icon = this.querySelector('.arrDown');
            // Toggle the active class
            this.classList.toggle('active');
            // Toggle the max height and icon
            if (this.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                icon.classList.add('fa-angle-up');
                icon.classList.remove('fa-angle-down');
                
            } else {
                accordionContent.style.maxHeight = 0;
                icon.classList.remove('fa-angle-up');
                icon.classList.add('fa-angle-down');
                
            }
            // Close other accordion items
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = 0;
                    otherHeader.querySelector('.icon').classList.add('fa-angle-down');
                    otherHeader.querySelector('.icon').classList.remove('fa-angle-up');
                    
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function (){
    const page = document.querySelector('.page_outside');
    const hSec = document.querySelector('.m-header_section_wrapper');
    const ham = document.querySelector('.hamburger_button_wrapper');
    const over = document.querySelector('.m-overlay');
    const hMenu = document.querySelector('.m-hamburgerMenu_wrapper');
    const tBar = document.querySelector('.top_bar');
    const mBar = document.querySelector('.middle_bar');
    const bBar =document.querySelector('.bottom_bar');
    // const container =document.querySelector('.container');

    

    ham.addEventListener('click', function () {
        page.classList.toggle('opened');
        hSec.classList.toggle('opened');
        hMenu.classList.toggle('opened');
        tBar.classList.toggle('opened');
        mBar.classList.toggle('opened');
        bBar.classList.toggle('opened');
        over.classList.toggle('opened');
        container.classList.toggle('opened');
        
       
       
    });

    over.addEventListener('click', function () {
        page.classList.toggle('opened');
        hSec.classList.toggle('opened');
        hMenu.classList.toggle('opened');
        tBar.classList.toggle('opened');
        mBar.classList.toggle('opened');
        bBar.classList.toggle('opened');
        over.classList.toggle('opened');
        container.classList.toggle('opened');
        
       
       
    });

    
});

