//AULA 08 : DIA 15/07/24

/*EXEMPLO 01
var nota1 = 6.5
var nota2 = 7.5
let media = (nota1 + nota2)/2
if (media >= 6) {
    console.log("Aprovado");
}else{
    console.log("Reprovado"); 
} */


/** EXEMPLOS 02 : DE NÚMEROS REAIS 
let peso = 78.5
let altura = 1.76
let pi = 3.1415
let precoDaGasolina = 4.96 */


/** EXEMPLO 03 : DECLARACAO DE VARIAVEIS DO TIPO ALFANUMERICOS
let nome = "Edson Arantes do Nascimento";
let cidade = 'Aquidauana';
let uf = "MS";
let curso = "Curso Técnico Integrado em Informática";
let dataCompleta = '18 de fevereiro de 2020'; */

/**EXEMPLO 04 : DECLARAÇÃO DE VARIAVEIS PARA DADOS LÓGICOS
let aprovado = true;
let questaoCorreta = 1; // considerado verdadeiro
let valorVerdadeiro = 5; // qualquer número diferente de 0 (zero)
let valorVerdadeiro = -3; // qualquer número diferente de 0 (zero)
let texto = "Olá"; // contendo caracteres é verdadeiro
// declaração de variáveis para dados lógicos (falso)
let reprovado = false;
let questaoCorreta = 0;
let textoVazio = '';  */


/**TESTE OPERADOR BÁSICO
let a = 5;
let b = 8;
let c = 2;
console.log(a + b); // resultado: 13
console.log(b - a); // resultado: 3
console.log(a - b); // resultado: -3
console.log(a * c); // resultado: 10
console.log(b / c); // resultado: 4
console.log(a / c); // resultado: 2.5 */


/*EXEMPLO 05 : DECLARAÇÃO DE VARIAVEL
let nota1 = 7, nota2 = 6;
let a = 5, b = 8, c = 2;
atenção para a precedência dos operadores
console.log(nota1 + nota2 / 2); // resultado 10
console.log((nota1 + nota2) / 2); // resultado 6.5
console.log(a + c * b - a); // resultado 16
console.log((a + c) * b - a); // resultado 51 */


/**O MÓDULO ALEM DE DIVIDIR MOSTRA O RESTO DA DIVISÃO 
let a = 5, b = 8, c = 2; 
console.log(a % c); // resultado 1
console.log(b % c); // resultado 0
console.log(c % c); // resultado 0
console.log(b % a); // resultado 3
console.log(b % 3); // resultado 2 */


/**EXEMPLO 06 : DECLARÇÃO DE VARIÁVEL
r = 4 * 3 + 7 % 3 - 9 / 3; // Qual o resultado?
r = 4 * 3 + ((7 % 3) - 9 / 3); // Qual o resultado?
r = 4 * (3 + 7 % 3) - 9 / 3; // Qual o resultado?
r = -7 -1 + 2 * (12 / 3 + 1); // Qual o resultado?
r = -7 -1 + 2 * (12 / (3 + 1)); // Qual o resultado? */


//EXERCÍCIOS 01 
var a = 4
var b = 3
var c = 7
var d = 9
var resultado = a*b+c%b-d/b
console.log(resultado);

//EXECICIO 02 
var a = 4
var b = 3
var c = 7
var d = 9
var r = a*b+((c%b)-d/b)
console.log(r);
//EXERCICIO 03
var a = 4
var b = 3
var c = 7
var d = 9
var resuta = a*(b+c%b)-d/b
console.log(resuta);

//EXERCICIO 04
var a = 1
var b = 2
var c = 3
var d = 4
var e = 7
var f = 9
var g = 12
var sulta = -e-a+b*(g/c+a)
console.log(sulta);

//EXERCICIO 05
var a = 1
var b = 2
var c = 3
var d = 4
var e = 7
var f = 9
var g = 12
var res = -e-a+b*(g/(c+1))
console.log(res);

/**EXPRESSÕES RELACIONAIS SÃO AQUELAS QUE REALIZAM COMPARAÇÕES ENTRE DUAS EXPRESSÕES;
O RESULTADO DA COMPARAÇÃO SERÁ SEMPRE UM VALOR LÓGICO, OU SEJA VERDADEIRO(true) OU FALSO(false); */

//EXERCICIO 06 : diferente de .....
var a = "azul"
var b = "rosa"
if (a != b) {
    console.log(true);
}else {
    console.log(false);
}

//EXERCICIO 07
var a = 4
var b = 5
var c = 2
var r = a > b
console.log(r);

//EXERCICIO 08
var a = 4
var b = 5
var c = 2
var re = a < b
console.log(re);

//EXERCICIO 09 
var a = 4
var b = 5
var c = 2
var d = 5
var res = b != d 
console.log(res);

//EXERCICIO 10 
var a = 4
var b = 5
var c = 2
var resu = a == c 
console.log(resu)

//EXERCICIO 11 
var a = 4
var b = 5
var c = 2
var d = 5
var resul = b >= d
console.log(resul);

//EXERCICIO 12 
var a = 4
var b = 5
var c = 2
var resultado = c <= b
console.log(resultado);











