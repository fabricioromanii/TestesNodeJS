//Cria uma variavel e a atribui a uma funcao;
//Agora pode ser chamado em qualquer outra pasta do projeto; 

var soma = function (a,b){
    return a+b;
}

module.exports = soma; //Exportar a variavel soma como um modulo;
//Pode exportar variaveis que sao valores, objetos, numeros, etc...                        