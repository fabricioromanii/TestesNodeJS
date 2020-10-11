//Handlebars é um template engine; Ele da muitas funcionalidades ao html;
//Conseguimos exibir dados que vem do backend no html;

const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
//Conexao com banco de dados mysql (copiado de ./UsandoSequelize.js);
const Sequelize = require('sequelize');
const sequelize = new Sequelize('usuarios','root','11223344', {
    host:"localhost",
    dialect: 'mysql'
});

//criando rotas;

app.get('/cad',function(req,res){
    res.render('formulario');
    //pela URL so conseguimos acessar rotas do tipo get;
})

app.post('/rotaqlq',function(req,res){
    //setando como post eu estou dizendo que essa rota só vai ser acessada quando houver uma requisição usando metodo post;
    //existem varios tipos de rota; get,post, delete, put, patch...
    res.send("FORMULARIO RECEBIDO!!!");
    //nao consigo acessar uma rota do tipo post pela URL; ela é mais segura e "protegida"; 
})

//configurando template engine;
app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');


app.listen(8081, function(){
    console.log("Servidor rodando!");
});