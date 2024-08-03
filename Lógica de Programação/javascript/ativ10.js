//EXERCICIO 11 : mostre uma mensagem caso este número seja maior que 10.
var number = 5
if (number > 10 ) {
    console.log("esse numero é maior que 10");
} else {
    console.log("esse numero é menor que 10");
}

//EXERCICIO 12 : leia dois valores inteiro distintos e informe qual é o maior.
var nu = 12
var num = 70
if (nu > num) {
    console.log(`O numero ${nu} é Maior que ${num}`);
}else{
    console.log(`numero ${num} é Maior`);
}

//EXERCICIO 13 : receba um número e diga se este número está no intervalo entre 100 e 200
var ent = 100
var entao = 120
if (ent && 200 == 100 || 200 ) {
    console.log("esse numero esta entre 100 e 200");
}else{
    console.log("esse numero não esta entre 100 e 200");
}


//EXERCICIO 14 : leia o nome e as três notas obtidas por um aluno durante o semestre.
var n1 = 3
var n2 = 8
var n3 = 10
var media = (n1+n2+n3)/3
if (media >= 6) {
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}


//EXERCICIO 15 : Considere a idade a partir de 18 anos como maior de idade.
var id = 18
var ida = 102
if (id >= 18) {
    console.log("Parabens voce um jovem maior de idade");
}if (ida < 55  ) {
    console.log("voce vai morrer logo");
}

//EXERCICIO 16 : A concessionária de veículos CARANGO VELHO está vendendo os seus veículos com desconto.
var ano = 2015
var valorMovel = 33.670
var desconto = 0.15
var valorFinal = (valorMovel/desconto)
if (ano < 2024) {
    console.log(`o valor do imovel é ${valorFinal} R$`);
}else{
    console.log("Voce nao ganha desconto");
}

//EXERCICIO 17 : maior u menor para exercito
var idade = 18
if (idade > 30 < 50) {
    console.log("Cleiton vai pro exercito");
}else{
    console.log("Cleiton nem saiu de casa");
}
