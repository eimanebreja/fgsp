$(document).ready(function () {
    $(window).scroll(function () {
        $(".nav-item").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
    });
});

// (function () {
//     $('.menu-button').on('click', function () {
//         // $('.hamburger').toggleClass('is-active');
//         // $('.menu-wrap').toggleClass('onn');

//     })
// })();

const menu = document.querySelector(".menu-button");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-wrap");
const links = document.querySelectorAll(".link-nav li");

menu.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navLinks.classList.toggle("onn");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});





$(document).ready(function () {

    $('.carousel').on('init', function (event, slick) {
        var $items = slick.$dots.find('li');
        $items.addClass('transparent-circle');
        $items.find('button').remove();
    });

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    });
});

$(document).ready(function () {
    $("#welcome-link").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});