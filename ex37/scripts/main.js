$(document).ready(function(){
    $('.item_menu button, .um-botao-fixe').on('click', function(){
        $('.caixa_drop').slideToggle(1000);
        //slideToggle - consoante o estado ativo ele abre ou fecha
    });

   /*$('.botao-direita').on('click', function(){
        $('.caixa1').animate({'marginLeft': "+=50px"});
    });

    $('.botao-esquerda').on('click', function(){
        $('.caixa1').animate({'marginLeft': "-=50px"});
    });*/

    $('.botao-direita').on('click', function(){
        $('.caixa1').animate({'left': "250px"}, function(){
            $('.botao-direita').on('click', function(){
                $('.caixa1').animate({'left': "0"});
            });
        });
    });
});