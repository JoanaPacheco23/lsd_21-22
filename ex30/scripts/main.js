function validaFormulario(){
    console.log("entrei na função");
    document.getElementById('zona_de_erros').innerText = '';


    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    telefone = document.getElementById('telefone').value;
    morada = document.getElementById('morada').value;
    cp1 = document.getElementById('cp1').value;
    cp2 = document.getElementById('cp2').value;



    if(nome == '' || email == '' || telefone == ''){
        document.getElementById('zona_de_erros').innerText = 'Preencha os campos obrigatórios';

        return false;
    } 
    
    if (morada!=''){
        if (cp1 == '' || (cp1 !='' && cp2 =='')){
            document.getElementById('zona_de_erros').innerText = 'Preencha os campos obrigatórios';

            return false;

        }
    }


}

function validaFormulario2(){
    todos_os_inputs = document.getElementsByTagName('input');

    todos_os_inputs[0]

    for(i = 0; i < todos_os_inputs.lenght; i++){
        todos_os_inputs[i].style="border: 1px solid #000;"
    }

    document.getElementById('zona_de_erros').innerText = '';

    input_nome = document.getElementById('nome');
    nome = input_nome.value;

    input_email = document.getElementById('email');
    email = input_email.value;

    input_telefone = document.getElementById('telefone');
    telefone = input_telefone.value;

    input_morada = document.getElementById('morada');
    morada = input_morada.value;

    erros=0

    if(nome == ''){
        input_nome.style='border: 1px solid red';
        document.getElementById('zona_de_erros').innerText = 'Preencha os campos assinalados';
        erros = erros+1;
    }

    if(email == ''){
        input_email.style='border: 1px solid red';
        document.getElementById('zona_de_erros').innerText = 'Preencha os campos assinalados';
        erros = erros+1;
    }

    if(telefone == ''){
        input_telefone.style='border: 1px solid red';
        document.getElementById('zona_de_erros').innerText = 'Preencha os campos assinalados';
        erros = erros+1;
    }

    if (morada!=''){
        input_cp1 = document.getElementById('cp1');
        cp1 = input_cp1.value;
        input_cp2 = document.getElementById('cp2');
        cp2 = input_cp2.value;

        if (cp1 == '' || (cp1 !='' && cp2 =='')){
            input_cp1.style='border: 1px solid red';
            input_cp2.style='border: 1px solid red';
            document.getElementById('zona_de_erros').innerText = 'Preencha os campos obrigatórios';
            erros = erros+1;
    }
    }

    if(erros == 0){
        return true;
    } else {
        return false;
    }

    
}




