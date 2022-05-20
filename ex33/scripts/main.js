onkeydown = function(tecla){
    //alert("carreguei");
    console.log(tecla.key);

    tecla_pressionada = tecla.key;
    
    carro = document.getElementById('carro');
    altura_janela = window.innerHeight;
    largura_janela = window.innerWidth;

    switch(tecla_pressionada){
        case "ArrowUp" : {
            console.log("vou andar para cima"); 

            // ir buscar a posição de um elemento em relação a cima
            posicao_inicial = carro.offsetTop;
            console.log(posicao_inicial);
            nova_posicao = posicao_inicial - 10;

            if(nova_posicao <= -100){
                nova_posicao = altura_janela;
            }

            carro.style.top = nova_posicao + "px";

            carro.src = "imagens/carro_cima.png";

        } break;

        case "ArrowDown" : {
            console.log("vou andar para baixo");

            // ir buscar a posição de um elemento em relação a cima
            posicao_inicial = carro.offsetTop;
            console.log(posicao_inicial);
            nova_posicao = posicao_inicial + 10;

            //fazer o carro aparecer em cima
            if(nova_posicao >= altura_janela){
                nova_posicao = -100;
            }

            carro.style.top = nova_posicao + "px";

            carro.src = "imagens/carro_baixo.png";

        } break;

        case "ArrowLeft" : {
            console.log("vou andar para esquerda");

            posicao_inicial = carro.offsetLeft;
            console.log(posicao_inicial);
            nova_posicao = posicao_inicial - 10;

            if(nova_posicao  <= -100){
                nova_posicao = largura_janela;
            }

            carro.style.left = nova_posicao + "px";

            carro.src = "imagens/carro_esquerda.png";

        }break;

        case "ArrowRight" : {
            console.log("vou andar para direita");

            posicao_inicial = carro.offsetLeft;
            console.log(posicao_inicial);
            nova_posicao = posicao_inicial + 10;

            if(nova_posicao  >= largura_janela){
                nova_posicao = -100;
            }

            carro.style.left = nova_posicao + "px";

            carro.src = "imagens/carro_direita.png";
        }break;
    }
}