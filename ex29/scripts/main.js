function verificaPremio(){
    alert('entrei na funcao');

    //vou buscar a aposta
    apostaInserida = document.getElementById("aposta").value;
    aposta = apostaInserida.split(',');

    estrelasApostaInserida = document.getElementById("estrelas_aposta").value;
    estrelasAposta = estrelasApostaInserida.split(',');

    chaveInserida = document.getElementById("chave").value;
    chave = chaveInserida.split(',');

    estrelasChaveInserida = document.getElementById("estrelas_chave").value;
    estrelasChave = estrelasChaveInserida.split(',');

    encontrados = 0;

    for (i = 0; i < 5; i++) // i++ é equivalente a i=i+1
    {
        numero_lido = aposta[i]
        if(
            numero_lido == chave[0] ||
            numero_lido == chave[1] ||
            numero_lido == chave[2] ||
            numero_lido == chave[3] ||
            numero_lido == chave[4] 
        ) {
            encontrados++; //encontrados+1 é igual
        }
    }

    estrelas_encontradas = 0;

    for(i = 0; i < 2; i++){
        numero_lido = estrelasAposta[i];
        if(numero_lido == estrelasChave[0] ||
            numero_lido == estrelasChave[1]){
                estrelas_encontradas++;
            }
    }


    if(encontrados == 5 && estrelas_encontradas == 2){
        mensagem="Ganhou o 1º prémio";
    }

    else if(encontrados == 5 && estrelas_encontradas == 1){
        mensagem="Ganhou o 2º prémio";
    }

    else if(encontrados == 5 && estrelas_encontradas == 0){
        mensagem="Ganhou o 3º prémio";
    }

    else if(encontrados == 4 && estrelas_encontradas == 2){
        mensagem="Ganhou o 4º prémio";
    }

    else if(encontrados == 4 && estrelas_encontradas == 1){
        mensagem="Ganhou o 5º prémio";
    } 
    
    else if(encontrados == 3 && estrelas_encontradas == 1){
        mensagem="Ganhou o 6º prémio";
    }

    else if(encontrados == 4 && estrelas_encontradas == 0){
        mensagem="Ganhou o 7º prémio";
    }

    else if(encontrados == 2 && estrelas_encontradas == 2){
        mensagem="Ganhou o 8º prémio";
    }

    else if(encontrados == 3 && estrelas_encontradas == 1){
        mensagem="Ganhou o 9º prémio";
    }

    else if(encontrados == 3 && estrelas_encontradas == 0){
        mensagem="Ganhou o 10º prémio";
    }

    else if(encontrados == 1 && estrelas_encontradas == 2){
        mensagem="Ganhou o 11º prémio";
    }

    else if(encontrados == 2 && estrelas_encontradas == 1){
        mensagem="Ganhou o 12º prémio";
    }

    else if(encontrados == 2 && estrelas_encontradas == 0){
        mensagem="Ganhou o 13º prémio";
    }
    
    
    else{
        mensagem = "Nao ganhaste nada! Continua a trabalhar"
    }

    document.getElementById("resultado").innerText = mensagem;

    alert(encontrados);
    
}
