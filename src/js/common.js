$(document).ready(function () {

    $('.slider-container').ikSlider({
        speed: 500,
        autoPlay: !1
    });

    $(function () {
        var mse2_number_slider = $(".mse2_number_slider"),
            minCost = $("#minCost"),
            maxCost = $("#maxCost");

        mse2_number_slider.slider({
            range: true,
            min: 50,
            max: 99000,
            values: [50, 99000],
            stop: function (event, ui) {
                minCost.val(mse2_number_slider.slider("values", 0));
                maxCost.val(mse2_number_slider.slider("values", 1));

            },
            slide: function (event, ui) {
                minCost.val(mse2_number_slider.slider("values", 0));
                maxCost.val(mse2_number_slider.slider("values", 1));
            }
        });
    });


    var mse2_number_slider = $(".mse2_number_slider"),
        minCost = $("#minCost"),
        maxCost = $("#maxCost");

    minCost.change(function () {
        var value1 = minCost.val();
        var value2 = maxCost.val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            minCost.val(value1);
        }
        mse2_number_slider.slider("values", 0, value1);
    });


    maxCost.change(function () {
        var value1 = minCost.val();
        var value2 = maxCost.val();

        if (value2 > 50) {
            value2 = 50;
            maxCost.val(990000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            maxCost.val(value2);
        }
        mse2_number_slider.slider("values", 1, value2);
    });


    var selectCustom = $('select'),
        selectCustomDecor = '.select-custom-decor',
        optionSelected = 'option:selected';

    selectCustom.each(function () {
        $(this).siblings(selectCustomDecor).text($(this).children(optionSelected).text());
    });
    selectCustom.change(function () {
        $(this).siblings(selectCustomDecor).text($(this).children(optionSelected).text());
    });
});

/*
 $(document).ready(function () {
 $('.single-item').slick({
 dots: true,
 arrows: false,
 fade: true
 });

 $('.carousel-gallery').slick({
 dots: true,
 arrows: false,
 fade: true
 });

 $(".navbar-toggle").click(
 function () {
 $('.menu').toggleClass("menu-active");
 }
 );
 });

 var navPos, winPos, navHeight, nav = $(".nav-menu");

 function refreshVar() {
 navPos = nav.offset().top;
 navHeight = nav.outerHeight(true);
 }

 refreshVar();
 $(window).resize(refreshVar);

 $('<div class="clone-nav"></div>').insertBefore(".nav-left").css("height", navHeight).hide();

 $(window).scroll(function () {
 winPos = $(window).scrollTop();

 if (winPos >= navPos) {
 nav.addClass("fixed shadow");
 $(".clone-nav").show();
 } else {
 nav.removeClass("fixed shadow");
 $(".clone-nav").hide();
 }
 });

 */
