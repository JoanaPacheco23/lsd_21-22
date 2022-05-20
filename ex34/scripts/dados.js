carro1 ={
    marca : "Fiat",
    modelo : "Punto",
    cilindrada : "1000cc",
    caracteristicas : ['vidros eletricos', 'AC']
};

carro2 ={
    marca : "Toyota",
    modelo : "Yaris",
    cilindrada : "1200cc",
    caracteristicas : ['alarme', 'direçao assistada']
};

carro3 ={
    marca : "BMW",
    modelo : "320",
    cilindrada : "2000cc",
    caracteristicas : ['alarme', 'direçao assistada', 'bancos aquecidos']
};

carro4 ={
    marca : "Audi",
    modelo : "R8",
    cilindrada : "3000cc",
    caracteristicas : ['direçao assistada', 'bancos aquecidos']
};

carro5 ={
    marca : "Audi",
    modelo : "R8",
    cilindrada : "3000cc",
    caracteristicas : ['direçao assistada', 'bancos aquecidos']
};

lista_de_carros = [carro1 , carro2 , carro3 , carro4, carro5];

//lista_de_caracteristicas = ['alarme' , 'direçao assistada', 'bancos aquecidos']
//caracteristica = 'bancos aquecidos'

function encontraCaracteristica(lista_de_caracteristicas, caracteristica){
    
    for(j=0; j < lista_de_caracteristicas.length; j++){

        if(lista_de_caracteristicas[j] == caracteristica){
            return true;
        }
    }

    return false;

}