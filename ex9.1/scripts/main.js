function mostraMenu(){

    items_do_menu = document.getElementById('items-menu-mobile');

    if(items_do_menu.style.display=='block'){
        items_do_menu.style="display:none";
    } else{
        items_do_menu.style="display:block";
    }
}

function escondeABrutaOMenu(){

    largura_janela=window.innerWidth;
    console.log(largura_janela);

    if(largura_janela > 600){
        items_do_menu = document.getElementById('items-menu-mobile');
        items_do_menu.style="display:none";
    }



}