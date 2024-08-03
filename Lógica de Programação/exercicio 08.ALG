Algoritmo "cotação"

Var
     rs, us, cotacao, dolaDisponivel: real



Inicio
       escreval( " Cotação do Dólar " )
       escreva( " Qual a cotação atual do dólar? " )
       leia(cotacao)
       escreva("Quantos dólares você possui? ")
       leia(us)
       rs <- us/cotacao
       escreval(us," Dólares equivalem á: ",rs," R$")



Fimalgoritmo