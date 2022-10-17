
$(function(){
    $('.burger_btn').click(function(){
        $('.popup_container').fadeIn(500);
        $('.popup').css({'transform':'translateX(0px)','transition':'.25s'});
        $('.burger_btn').html('<i class="fa-solid fa-xmark"></i>');
    })
});

$(function(){
    $('.popup_container').click(function(){
        $('.popup_container').fadeOut(500);
        $('.popup').css({'transform':'translateX(-300px)','transition':'.25s'});
        $('.burger_btn').html('<i class="fa-solid fa-bars"></i>');
    })
});

$(function(){
    $('.palet').click(function(){
       $('.palet').toggleClass('show_palet');
       $('.color_palette').toggleClass('color_palette_show');
    })
})

$(function(){
    $('.color_1').click(function(){
        $('.purchase_btn').css('background-color','#6e45e2');
        $('.left_block').css('background-color','#6e45e2');
        $('.servisec_btn').css('background-color','#6e45e2');
        $('.bg_block').css('background-color','rgb(195, 253, 243)');
        $('.color').css('color','#6e45e2');
        $('.circle').css('background-color','#38f9d7');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_1').html('<i class="fa-solid fa-check"></i>');
        $('.color_3').html('');
        $('.color_4').html('');
        $('.color_5').html('');
        $('.color_6').html('');
        $('.color_7').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_2').html('');
    })
});

$(function(){
    $('.color_2').click(function(){
        $('.purchase_btn').css('background-color','#6e45e2');
        $('.left_block').css('background-color','#38f9d7');
        $('.servisec_btn').css('background-color','#6e45e2');
        $('.bg_block').css('background-color','rgb(29, 29, 29)');
        $('.color').css('color','#6e45e2');
        $('.circle').css('background-color','#6e45e2');
        $('header').css('background-color','black');
        $('.creative').css('background-color','black');
        $('.dropdown_btn').css('color','white');
        $('.fa-angle-down').css('color','white');
        $('h1').css('color','white');
        $('.burger_btn').css('color','white');
        $('p').css('color','white');
        $('.logo_img').attr('src','img/logo-white.png');
        $('.color_2').html('<i class="fa-solid fa-check"></i>');
        $('.color_3').html('');
        $('.color_4').html('');
        $('.color_5').html('');
        $('.color_6').html('');
        $('.color_7').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});

$(function(){
    $('.color_3').click(function(){
        $('.purchase_btn').css('background-color','#e8a49c');
        $('.left_block').css('background-color','rgb(60, 76, 173)');
        $('.servisec_btn').css('background-color','#e8a49c');
        $('.bg_block').css('background-color','rgb(196, 201, 231)');
        $('.color').css('color','#e8a49c');
        $('.circle').css('background-color','#e8a49c');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_3').html('<i class="fa-solid fa-check"></i>');
        $('.color_2').html('');
        $('.color_4').html('');
        $('.color_5').html('');
        $('.color_6').html('');
        $('.color_7').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});

$(function(){
    $('.color_4').click(function(){
        $('.purchase_btn').css('background-color','#f04393');
        $('.left_block').css('background-color','#f9c449');
        $('.servisec_btn').css('background-color','#f04393');
        $('.bg_block').css('background-color','rgb(253, 237, 200)');
        $('.color').css('color','#f04393');
        $('.circle').css('background-color','#f04393');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_4').html('<i class="fa-solid fa-check"></i>');
        $('.color_2').html('');
        $('.color_3').html('');
        $('.color_5').html('');
        $('.color_6').html('');
        $('.color_7').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});

$(function(){
    $('.color_5').click(function(){
        $('.purchase_btn').css('background-color','#367bc3');
        $('.left_block').css('background-color','#88cdf6');
        $('.servisec_btn').css('background-color','#367bc3');
        $('.bg_block').css('background-color','rgb(194, 215, 237)');
        $('.color').css('color','#367bc3');
        $('.circle').css('background-color','#367bc3');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_5').html('<i class="fa-solid fa-check"></i>');
        $('.color_3').html('');
        $('.color_4').html('');
        $('.color_2').html('');
        $('.color_6').html('');
        $('.color_7').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});

$(function(){
    $('.color_6').click(function(){
        $('.purchase_btn').css('background-color','#88d8b0');
        $('.left_block').css('background-color','#45ADA8');
        $('.servisec_btn').css('background-color','#88d8b0');
        $('.bg_block').css('background-color','rgb(199, 230, 229)');
        $('.color').css('color','#88d8b0');
        $('.circle').css('background-color','#88d8b0');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_6').html('<i class="fa-solid fa-check"></i>');
        $('.color_3').html('');
        $('.color_4').html('');
        $('.color_5').html('');
        $('.color_2').html('');
        $('.color_7').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});

$(function(){
    $('.color_7').click(function(){
        $('.purchase_btn').css('background-color','#bbbbbb');
        $('.left_block').css('background-color','#dddddd');
        $('.servisec_btn').css('background-color','#bbbbbb');
        $('.bg_block').css('background-color','rgb(240, 240, 240)');
        $('.color').css('color','#bbbbbb');
        $('.circle').css('background-color','#bbbbbb');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_7').html('<i class="fa-solid fa-check"></i>');
        $('.color_3').html('');
        $('.color_4').html('');
        $('.color_5').html('');
        $('.color_6').html('');
        $('.color_2').html('');
        $('.color_8').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});

$(function(){
    $('.color_8').click(function(){
        $('.purchase_btn').css('background-color','#E52B50');
        $('.left_block').css('background-color','#FFA07A');
        $('.servisec_btn').css('background-color','#E52B50');
        $('.bg_block').css('background-color','rgb(250, 221, 221)');
        $('.color').css('color','#E52B50');
        $('.circle').css('background-color','#E52B50');
        $('header').css('background-color','white');
        $('.creative').css('background-color','white');
        $('.dropdown_btn').css('color','black');
        $('.fa-angle-down').css('color','black');
        $('h1').css('color','black');
        $('.burger_btn').css('color','black');
        $('p').css('color','black');
        $('.logo_img').attr('src','img/logo-dark.png');
        $('.color_8').html('<i class="fa-solid fa-check"></i>');
        $('.color_3').html('');
        $('.color_4').html('');
        $('.color_5').html('');
        $('.color_6').html('');
        $('.color_7').html('');
        $('.color_2').html('');
        $('.color_9').html('');
        $('.color_1').html('');
    })
});