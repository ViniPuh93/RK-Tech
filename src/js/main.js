$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        stagePadding: 5,
        loop: true,
        margin: 10,
        nav: true,
        center: true,
        slideBy: 5,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });
});