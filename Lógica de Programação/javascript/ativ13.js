var t = require("prompt-sync")();
var recebe = Number(t("Digite um valor: "));

var maior = recebe;
var menor = recebe;

for (let conta = 0; recebe != -1; conta++) {
    recebe = Number(t("Digite um valor: "))

    if (recebe > maior) {
        maior = recebe;
    } else if (recebe < menor && recebe != -1) {
        menor = recebe;
    }
}

console.log("O maior número do laço é: " + maior);
console.log("O menor número do laço é: " + menor);