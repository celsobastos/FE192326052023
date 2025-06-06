console.log('Meu Primeiro JavaScript');

/* Criação de Variaveis */
var nome;
var idade;
var altura;
var sexo;
var e_programador;
var peso;

/* Atribuição de informação */
nome = 'Celso Bastos'; // String
idade = 42; // Number
altura = 1000.75; // Number
sexo = 'M'; //String
e_programador = false; // Boolean {true / false}
peso = null;

/* Operadores aritmeticos */
/* +  - * / */

var printString = "nome:" + nome + " idade:" + idade;
var printString2 = `nome: ${nome} idade ${idade}`;

// console.log(printString2)

/* Operadores Relacionais */
var salario = '5000';
var abono = 5000;
var teste = salario === abono;

/* Operadores Logicos */
/* 
    || "OU" - && "E" - ! "not"
    aluno aprovado nota >= 7 e faltas < 5
    aluno Recuperaçao nota == 6 e faltas < 10
*/
var nota = 6;
var faltas = 5;


var situacao = (nota >= 7) && (faltas < 5);
var recuperacao = (nota === 6) && (faltas < 10);

/*  if - else - ifelse  */
if(situacao) {
    console.log("Aluno aprovado");
} else if (recuperacao) {
    console.log("Aluno Recuperação");
} else {
    console.log("Aluno Reprovado");
}


/* Truthy e Falsy */

var precoGasolina = "fdgfgsdfgsd"
if(precoGasolina) {
    console.log("Campo Obrigatório");
}

/* Conversão de Valores */
var temperatura = '50';
var contersaoParaString = String(temperatura);
var contersaoParaNumber = Number(temperatura);

console.log(typeof contersaoParaString);
console.log(typeof contersaoParaNumber);


var quantidade = '10';
var precoProduto = 10;
var totalCompra = Number(quantidade) + precoProduto;
console.log(totalCompra);

