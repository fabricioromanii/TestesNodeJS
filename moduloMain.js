//Modulos sao quando voce divide seu programa em partes;
//É interessante quando se tem aplicações muito grandes;
//Essa pasta é conectada a moduloSoma.js e moduloSubtracao.js

var FuncSoma = require("./moduloSoma");
var FuncSub = require("./moduloSubtracao");

console.log(FuncSoma(4,5));
console.log(FuncSub(4,5));

