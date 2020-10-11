//Parametros sao formas de tornas as rotas dinamicas;
//Para entender melhor sobre a estrutura das rotas use o ./FrameExpress.js;

const express = require("express");
const app = express();

app.get("/",function(req,res){ 
    res.send("O send serve para mandar uma mensagem ao usuario!");
});

app.get("/sobre",function(req,res){  
    res.send("Minha pagina sobre");
});

app.get("/contato",function(req,res){ 
    res.send("minha pagina contato");
});

//Parametro é um valor dinamico que o usuario consegue passar;
//dentro das rotas se usa : para identificar como um parametro;
//só é possivel enviar um send em cada rota;

app.get("/ola/:nome/:profissao",function(req,res){ 
    res.send("ola, " + req.params.nome + "! estamos vigiando voce!\n" + "Sua profissao eh: " + req.params.profissao);
});

//req serve para obter dados de uma requisição, inclusive parametros; 
//quando o usuario digita os parametros, ele envia esses dados atraves de uma requisição p nosso servidor node;

app.listen(8081, function(){
    console.log("Servidor rodando!");
});