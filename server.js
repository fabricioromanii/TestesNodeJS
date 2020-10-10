'use strict'
//tudo o que bota sem um caminho, apenas com o nome entre '' ele procura na pasta node modules;
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = 3000;
app.set('port', port); //puxa as duas const definidas acima;

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Fabricio",
        idade:"19",
        version: "0.0.1"
    });
});
app.use("/", route);

server.listen(port);
console.log("Api rodando certinho na porta " + port);