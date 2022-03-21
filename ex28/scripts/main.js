function procuraNumero(){
    lista_inserida = document.getElementById('lista').value;
    numero_inserido = document.getElementById('numero').value;

    lista = lista_inserida;
    numero = numero_inserido;
    //Transformar a string num array, onde a separação é ;
    lista_transformada = lista.split(';');
    console.log("O primeiro número é "+lista_transformada[0]);
    resultado = verificaSeExiste(lista_transformada, numero);

    //se for uma variável boleana não precisamos de fazer = true
    if(resultado){
        mensagem = ('Existe na lista');
        document.getElementById('zona_de_resultados').style="background:green; color: #fff;"

    } else{
        mensagem =('Não existe na lista');
        document.getElementById('zona_de_resultados').style="background:red; color: #fff;"

    }

    document.getElementById('zona_de_resultados').innerText = mensagem;
}

function verificaSeExiste(lista_a_pesquisar, numero_a_procurar){
    lista_de_numeros=lista_a_pesquisar;
    tamanho=lista_a_pesquisar.length;
    encontrou = false;
    i=0;
    while(encontrou == false && i<tamanho){
        numero_lido = lista_de_numeros[i];
        if(numero_lido === numero_a_procurar){
            encontrou = true;
        }
            
        i=i+1;
    }

    if(encontrou==true){
        return true;
    } else{
        return false;
    }
}