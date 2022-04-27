function adicionaAlgarismo(algarismo){

    operacaoEscolhida = document.getElementById('operacaoEscolhida').value;

    if(operacaoEscolhida == ''){
        numeroAntigo = document.getElementById('parcela1').value;
        novo_numero = numeroAntigo + algarismo;
        document.getElementById('parcela1').value=novo_numero;
    } else {
        numeroAntigo = document.getElementById('parcela2').value;
        novo_numero = numeroAntigo + algarismo;
        document.getElementById('parcela2').value=novo_numero;
    }
    
}

function atribuiOperacao(operacao){
    document.getElementById('operacaoEscolhida').value=operacao;
}


function fazConta(){
    p1 = document.getElementById('parcela1').value;
    /* elementop1 = document.getElementById('parcela1')
    elementop1.value */
    p2 = document.getElementById('parcela2').value;
    op = document.getElementById('operacaoEscolhida').value;

    /* converter para valor inteiro
    parcela1 = parseInt(p1);
    parcela2 = parseInt(p2); */

    //permitir valores decimais
    parcela1 = parseFloat(p1);
    parcela2 = parseFloat(p2);

    /*if(op == 'soma'){
        resultado = parcela1 + parcela2;
    }*/

    switch(op){
        case 'soma' : {
            resultado = parcela1 + parcela2;
        } break;

        case 'sub' : {
            resultado = parcela1 - parcela2;
        } break;

        case 'mult' : {
            resultado = parcela1 * parcela2;
        } break;

        case 'divi' : {
            resultado = parcela1 / parcela2;
        } break;
    }

    resultadoArredondado = Math.round(resultado * 100) / 100;
    document.getElementsByClassName('resultado')[0].innerText = resultadoArredondado;
    document.getElementById('parcela1').value = resultado;
    document.getElementById('parcela2').value = '';
    document.getElementById('operacaoEscolhida').value = '';


}

function limpa(){
    document.getElementById('parcela1').value = '';
    document.getElementById('parcela2').value = '';
    document.getElementById('operacaoEscolhida').value = '';
    document.getElementsByClassName('resultado')[0].innerText = '';

}




