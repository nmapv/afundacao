/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

console.log(atob("X19fX19fIF9fX19fIF8gICBfIF8gICBfICBfICAgX19fICAgX19fX19fXyAgIF9fX19fIF9fX19fX19fX19fIF9fX19fICAgXyAgICBfICBfX19fX19fX19fXyBfICAgX18gX19fX18gCnwgIF8gIFwgIF9fX3wgfCB8IHwgXCB8IHx8IFwgfCBcIFwgLyAvICBfX198IC8gIF9fIFwgIF8gIHwgIF8gIFwgIF9fX3wgfCB8ICB8IHx8ICBfICB8IF9fXyBcIHwgLyAvLyAgX19ffAp8IHwgfCB8IHxfXyB8IHwgfCB8ICBcfCB8fCAgXHwgfFwgViAvXCBgLS0uICB8IC8gIFwvIHwgfCB8IHwgfCB8IHxfXyAgIHwgfCAgfCB8fCB8IHwgfCB8Xy8gLyB8LyAvIFwgYC0tLiAKfCB8IHwgfCAgX198fCB8IHwgfCAuIGAgfHwgLiBgIHwgXCAvICBgLS0uIFwgfCB8ICAgfCB8IHwgfCB8IHwgfCAgX198ICB8IHwvXHwgfHwgfCB8IHwgICAgL3wgICAgXCAgYC0tLiBcCnwgfC8gL3wgfF9fX1wgXF8vIC8gfFwgIHx8IHxcICB8IHwgfCAvXF9fLyAvIHwgXF9fL1wgXF8vIC8gfC8gL3wgfF9fXyAgXCAgL1wgIC9cIFxfLyAvIHxcIFx8IHxcICBcL1xfXy8gLwp8X19fLyBcX19fXy8gXF9fXy9cX3wgXF8vXF98IFxfLyBcXy8gXF9fX18vICAgXF9fX18vXF9fXy98X19fLyBcX19fXy8gICBcLyAgXC8gIFxfX18vXF98IFxfXF98IFxfL1xfX19fLyAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA=="))

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

});
