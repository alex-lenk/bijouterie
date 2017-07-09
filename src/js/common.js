$(document).ready(function () {
    $('.slider-container').ikSlider({
        speed: 500,
        autoPlay: !1
    });

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


//= init/fixednav.js


//= init/jquery-ui-slider.js


//= init/selectCustom.js
});
