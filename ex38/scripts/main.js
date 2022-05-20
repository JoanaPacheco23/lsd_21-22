$('textarea[name=mensagem]').keyup(function(){
    caracteres = $(this).val().length;
    caracteres_em_falta = 100-caracteres;
    $('#caracteres_restantes').text(caracteres_em_falta);

    //document.getElementByID('caracteres_restantes').innerText = caracteres_em_falta
});


function vaiParaArtigo(destino){
    $('html, body').animate({
        scrollTop:$(destino).offset().top-40
    }, 2000);
};

function validarNome(){
    nome = $('input[name=nome_inserido]').val();
    if(nome!=''){
        $('button').removeAttr('disabled');
    } else{
        $('button').attr('disabled');
    }
};