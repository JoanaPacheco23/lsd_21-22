$(document).ready(function(){
    $('.menu-principal').load('menu.html', function(){
        $('nav li:nth-child(1)').addClass('active');
    });
    $('.content').load('home.html');
});

function colocaContent(numero){
    $('nav li').removeClass('active');
        switch(numero){
            case 1 : {
                $('nav li:nth-child(1)').addClass('active');
                $('.content').load('home.html');
            }  break;

            case 2 : {
                $('nav li:nth-child(2)').addClass('active');
                $('.content').load('galeria.html');
            }  break;

            case 3 : {
                $('nav li:nth-child(3)').addClass('active');
                $('.content').load('informacao.html');
            }  break;

            case 4 : {
                $('nav li:nth-child(4)').addClass('active');
                $('.content').load('contactos.html');
            }  break;

            default : {
                alert('bananas');
            } break;
        }
};