var prompt = require('prompt-sync')();
var count = 0;
var count1;
var count2;
var count3;
var count4;

var p1 = prompt("Telefonou para a vítima? ")
if (p1 == 's') {
    count1 = count + 1;
} else {
    count1 = count + 0;
}
var p2 = prompt("Esteve no local do crime? ")
if (p2 == 's') {
    count2 = count1 + 1;
} else {
    count2 = count1 + 0;
}
var p3 = prompt("Mora perto da vítima? ")
if(p3 == 's'){
    count3 = count2 + 1;
}else {
    count3 = count2 + 0;
}
var p4 = prompt("Devia para a vítima? ")
if(p4 == 's'){
    count4 = count3 + 1;
}else {
    count4 = count3 + 0;
}
var p5 = prompt("Já trabalhou com a vítima? ")
if(p5 == 's'){
    count = count4 + 1;
}else {
    count = count4 + 0;
}

if (count == 2) {
    console.log('Suspeita');
} else if(count == 3 || count == 4){
    console.log('Cumplice');
} else if(count == 1){
    console.log('Nada a declarar');
} else if(count == 5){
    console.log('Assasino');
} else{
    console.log("Nada a declarar");
}