Algoritmo "custo de um produto e mostre o valor de venda"

Var
     custo , venda , percent : real


Inicio

         escreva( " Digite o custo do Produto " )
         leia(custo)
         escreva("Digite o percentual para venda: ")
         leia(percent)
         percent <- (percent/100) * custo
         venda <- custo + percent
         escreval("O valor de venda é: ",venda)

Fimalgoritmo