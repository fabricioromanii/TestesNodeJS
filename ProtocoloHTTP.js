//HTTP é um protocolo de comunicação entre o servidor e o usuario;

var http = require("http");

//createServer é uma funcao que abre um servidor para a comunicação;
//listen serve para informar em qual porta de rede o usuario quer abrir o servidor;
//Para exibir uma mensagem, se usa uma funcao dentro da funcao create server,
//Essa funcao se chama funcao de callback e recebe dois parametros(req e res)
//Vamos usar o res para mandar uma resposta ao usuario;

http.createServer(function(req,res){
    res.end("Ola voce esta sendo vigiado."); 
    res.end("CORRA!");
}).listen(8081);

console.log("Servidor rodando na porta 8081");