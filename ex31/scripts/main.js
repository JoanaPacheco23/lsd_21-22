function validaNumero(){
    input_telefone = document.getElementById('num_telefone');
    num_telefone = input_telefone.value;

    if(num_telefone[0] != '9' && num_telefone[0]!='2' ){
        document.getElementById('zona_de_erros').innerText='Número de telefone errado';
        return false;
    } else if(telefone[0] == '9'){
        if(telefone[1] != '1' || telefone[1] != '2' || telefone[1]!= '3' || telefone[1]!= '6')
        document.getElementById('zona_de_erros').innerText='Número de telefone errado';
        return false;
    }
}