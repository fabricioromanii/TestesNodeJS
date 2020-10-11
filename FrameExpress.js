//Express é um framework feito para facilitar a criação de aplicações web com node;
//Principal ferramenta para criar aplicacoes backend com node;
//Tras poucos recursos, simples mas sao muito utilizados e essenciais;
//Express é um framework orientado a rotas;

const express = require("express");
//variavel que puxa o modulo express que foi baixado na pasta nodemodules com npm install;
//var express retorna uma funcao que cria o express


const app = express();
//agora essa var app recebe a funcao express que vem do modulo express e cria uma copia do framework pra dentro da var app;
//a variavel é constante pra evitar que subescreva esse codigo; isso é mais utilizado em codigos e projetos muito grandes;


//Definindo rotas da aplicação;

app.get("/",function(req,res){ //essa rota / é definida para o site inicial;
    res.send("O send serve para mandar uma mensagem ao usuario!");
});
//para imprimir algo ao usuario uso uma funcao de callback;
//funcao de callback é uma funcao que é executada sempre que um evento acontece;

app.get("/sobre",function(req,res){  //criando rota sobre;
    res.send("Minha pagina sobre");
});

app.get("/contato",function(req,res){ //criando rota contato;
    res.send("minha pagina contato");
});


//Programa toda a aplicação acima dessa linha;
app.listen(8081, function(){
    console.log("Servidor rodando!");
}); //nessa unica linha ja consigo rodar um servidor usando express;
//Essa funcao precisa ser a ultima do codigo; nao pode ter nada abaixo dela;

