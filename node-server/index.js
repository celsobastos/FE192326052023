console.log('Meu Primeiro JavaScript');

/* Criação de Variaveis */
var nome;
var idade;
var altura;
var sexo;
var e_programador;
var peso; // undefined

/* Atribuição de informação */
nome = 'celso'; // String
idade = 42; // Number
altura = 1000.75; // Number
sexo = 'M'; //String
e_programador = false; // Boolean {true / false}
var peso = null;

/* Operadores aritmeticos */
/* +  - * / */
var preco_batata = 40.58;
var qtde_comprada = 5;
var resultadoCompra = (40 + preco_batata * qtde_comprada / 100) - 10;
// console.log(resultadoCompra)

// Concatenação e Interpolação
var printString = "nome:" + nome + " idade: " + idade;
var printString2 = `nome: ${nome} idade: ${idade}`;
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
    // console.log("Aluno aprovado");
} else if (recuperacao) {
    // console.log("Aluno Recuperação");
} else {
    // console.log("Aluno Reprovado");
}


/* Truthy e Falsy */
var precoGasolina = "fdgfgsdfgsd"
if(precoGasolina) {
    // console.log("Campo Obrigatório");
}

/* Conversão de Valores */
var temperatura = '50';
var contersaoParaString = String(temperatura);
var contersaoParaNumber = Number(temperatura);

// console.log(typeof contersaoParaString);
// console.log(typeof contersaoParaNumber);

var quantidade = '10';
var precoProduto = 10;
var totalCompra = Number(quantidade) + precoProduto;
// console.log(totalCompra);


/*
    Produto e quantida

    total = (valorProduto * quantidade)
    imposto = total / 100 * 30

    totalCompra = total + imposto

*/

/*
var aviso = "Compra acima de 1000,00 terão desconto de 5%";
function calculoCompraImposto(quantidade, imposto, produto, valor){
    var zLproduto = produto;
    var zLvalorProduto = valor;
    var zLquantidadeProduto = quantidade;

    var zLtotalCompra =  zLvalorProduto * zLquantidadeProduto;
    var zlImposto = zLtotalCompra / 100 * imposto;
    var zLTotalAPagar = zLtotalCompra + zlImposto;
    aviso = "novo texto"
    mensagem(zLproduto + ' : ' + zLTotalAPagar);
}
function mensagem(compra) {
    console.log("Compra Efetuado com sucesso\n");
    console.log(compra)
}
calculoCompraImposto(1, 0, 'camisa', 25.5);
console.log(zLproduto)
*/

// function calc(n1, n2) {
//     var soma = n1 + n2
//     return "Total: " + soma;
// }
// var totalSoma = calc(5, 20);
// console.log(totalSoma)

var calculadora = function (n1, n2) {
    var soma = n1 + n2
    return soma;
}

var resultado = calculadora(2, 3)
console.log(resultado)