$(document).ready(function(){
    $('.caixa1').fadeIn(4000, function(){
        $('.caixa2').fadeIn(4000, function(){
            $('.caixa3').fadeIn(4000, function(){
                $('.caixa4').fadeIn(4000);
            });
        });
    });
});