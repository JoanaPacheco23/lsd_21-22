$(document).ready(function(){
    console.log('entrei no jquery');
    //$('.caixa1').css('display','block');
    $('.caixa1').fadeIn(4000);

    $('.botao_açao').click(function(){
        $('.caixa2').fadeIn(4000);
    });

    $('.caixa3').mouseenter(function(){
        console.log('entrei com o rato');
        $('.caixa3').addClass('caixa3-ativa');
    });

    $('.caixa3').mouseleave(function(){
        $('.caixa3').removeClass('caixa3-ativa');
    })
});
