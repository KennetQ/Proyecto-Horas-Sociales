/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // <- image slider - Actividades ->
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const images = document.querySelector('.carousel').children;
    const totalImages = images.length;
    let index = 0;
    
    prev.addEventListener('click', () => {
      nextImage('prev');
    })
    
    next.addEventListener('click', () => {
      nextImage('next');
    })
    
    function nextImage(direction) {
      if(direction == 'next') {
        index++;
        if(index == totalImages) {
          index = 0;
        }
      } else {
        if(index == 0) {
          index = totalImages - 1;
        } else {
          index--;
        }
      }
    
      for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
      }
      images[index].classList.add('main');
    }
    





});
