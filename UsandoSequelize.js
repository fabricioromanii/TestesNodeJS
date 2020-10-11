//Sequelize abstrai toda a camada de banco de dados; Vai ajuadar a gente a usar o mysql;
//conseguimos usar as linhas de comando do mysql diretamente no node;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('usuarios','root','11223344', {
    host:"localhost",
    dialect: 'mysql'
});

//sequelize tera dois resultados: sucesso ou falha;
sequelize.authenticate().then(function(){
    //then é como se fosse uma funcao de callback;
    //executada quando algum evento acontece;
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
});

//model é uma referencia da sua tabela dentro do sequelize;
//vamos criar um model para criar uma tabela direto do node;

//Postagem;
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
        //DIferença entre o string e o text é que o string tem um limite de caracteres;
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

//sincronizar seu modulo com o mysql;


//Usuarios;
const Usuario = sequelize.define('usuarios', {

    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }

});

//Usuario.sync({force:true});  Cria uma tabela com os parametros que eu passei em Usuario;



//Para inserir dados;
/*
Postagem.create({
    titulo: "UM TITULO",
    conteudo:"AAAAAAAAAAAAAAAAAAAAAAAAAA"
})
*/

//Para criar um usuario;
Usuario.create({
    nome:"Fabricio",
    sobrenome:"Romani",
    idade:19,
    email:"fabricio@outlook"
})
