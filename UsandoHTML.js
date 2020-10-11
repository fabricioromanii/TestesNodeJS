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

app.get("/ola/:nome/:profissao",function(req,res){ 
    res.send("ola, " + req.params.nome + "! estamos vigiando voce!\n" + "Sua profissao eh: " + req.params.profissao);
});
 
app.get("/usandohtml",function(req,res){ 
    res.sendFile(__dirname + "/html/index.html");
    //mesma logica de antes, mas agora voce esta mandando um arquivo;
    //No nosso caso, uma arquivo html;
    //dirname é como se eu tivesse dizendo que o meu arquivo esta no diretorio da minha aplicação; 
    //No caso do dir name ele diz que esta no diretorio raiz, no diretorio geral;
    //dirname = diretorio absoluto (C:user:fulano:pasta:pasta:arquivo.....);
});

app.listen(8081, function(){
    console.log("Servidor rodando!");
});