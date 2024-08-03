//EXERCICIO 01 : média
var n1 = 6
var n2 = 9
var n3 = 10
var media = (n1+n2+n3)/3
if (media >= 6) {
    console.log("Aprovada");
} else {
    console.log("Reprovada");
}

//EXERCICIO 02 : soma,sub,divisao e mult..
var nu = 10
var nu2 = 30
console.log(nu+nu2);
console.log(nu-nu2);
console.log(nu*nu2);
console.log(nu/nu2);

//EXERCICIO 03 : distancia percorrida
var distancia = 180.7
var combus = 7
var total = 180.7 / 7
console.log(`O gasto foi de ${total}`);

//EXERCICIO 04 : salário do vendedor
var salario = 1.400
var vendas = 129 
var comissao = 0.15
var promo = vendas/comissao
var total = salario+comissao
console.log(`A comissão dele é de ${promo} , e o Novo Salário é de ${total}`);

//EXERCICIO 05 : troca de valores
var a = 12
var b = 80
b = b - 68
a = a + 68
console.log(`o novo valor de a(${a}) e o novo valor de b(${b})`);

//EXERCICIO 06 : temperatura
var f = 9
var c = 5
var m = 32
var fahrenheit = (f/c)-m
console.log(`A temperatura é de ${fahrenheit}`);

//EXERCICIO 07 : cotação dolar
var us = 1
var cota = 5.43
var rs = us*cota
console.log(`A cotação do Dólar esta ${rs}`); 

//EXERCICIO 08 : prestaçoes
var prest = 5
var minhaCompra = 1.200
var valorTotal = minhaCompra*prest
console.log(`Eu vou pagar meu produto em ${valorTotal} prestações`);

//EXERCICIO 09 : receba o preço de custo de um produto e mostre o valor de venda.
var custo = 90.00
var venda = 3
var percent = 23
var total = (percent/100)*custo
var valor = custo+percent
console.log(`o total de tudo é ${valor} mais o percentual de ${total}`);


//EXERCICIO 10 : Custo do Consumidor
var movel = 30.000
var porcentagem = 28
var imposto = 45
var custoFinal = movel+(porcentagem*movel) + (imposto*movel)
var total = custoFinal+(imposto*custoFinal)
console.log(`o total do imovel sai em ${custoFinal} R$ e o total com o custo final e imposto sai em ${total} R$ `);



