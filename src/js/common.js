$(document).ready(function () {

    $(".main-nav").click(
        function () {
            $(this).toggleClass("menu-visible");
        }
    );

    $(".filter-toggle").click(
        function () {
            $('#mse2_filters').toggleClass("open-filter");
        }
    );

    $('.img-zoom').zoom({
        magnify: 0.5
    });


//= init/fixednav.js

//= init/selectCustom.js

    $('.panel-group li:first-child .panel-collapse').addClass('in');

    $('.panel-group li:first-of-type .panel-heading').removeClass('collapsed');
});

$('.slider-container').slick({
    prevArrow: '<div data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"><span><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path d="M13.89 17.418c.27.272.27.71 0 .98s-.7.27-.968 0l-7.83-7.91c-.268-.27-.268-.706 0-.978l7.83-7.908c.268-.27.7-.27.97 0s.267.71 0 .98L6.75 10l7.14 7.418z"/></svg></span></div>',
    nextArrow: '<div data-role="none" class="slick-next" aria-label="Next" tabindex="0"><span><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path d="M13.25 10L6.11 2.58c-.27-.27-.27-.707 0-.98.267-.27.7-.27.968 0l7.83 7.91c.268.27.268.708 0 .978l-7.83 7.908c-.268.27-.7.27-.97 0s-.267-.707 0-.98L13.25 10z"/></svg></span></div>',
    dots: true
});
