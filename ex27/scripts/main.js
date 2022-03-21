function accao_do_botao(){
    console.log('entrei na função');

    //ir buscar o número que o user introduziu
    numero_introduzido=document.getElementById('numero_de_utilizador').value ;
    document.getElementById('zona_de_resultados').style="border: none;"
    
    //se nao queremos repetir nada, não precisamos do for
    // se o número introduzido for diferente de vazio. diferente representa-se por !=
    if(numero_introduzido!='' && isNaN(numero_introduzido) == false){
        /* tambem podemos limpar as propriedades apenas quando um número é colocado
        document.getElementById('zona_de_resultados').style="border: none;"
        */
        if(numero_introduzido%2===0){
            mensagem = 'O número é par';
        } else{
            mensagem = 'O número é ímpar';
        }
    } else{
        mensagem = 'Introduza um número';
        document.getElementById('zona_de_resultados').style="border: 1px solid red;"
    }

    //alert(mensagem);
    document.getElementById('zona_de_resultados').innerText = mensagem;

}   