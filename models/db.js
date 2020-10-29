const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('usuarios','root','11223344', {
    host:"localhost",
    dialect: 'mysql'
});

app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/cad',function(req,res){
    res.render('formulario');
})

app.post('/rotaqlq',function(req,res){
    res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
})

app.listen(8081, function(){
    console.log("Servidor rodando!");
});