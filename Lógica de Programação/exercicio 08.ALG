Algoritmo "cota��o"

Var
     rs, us, cotacao, dolaDisponivel: real



Inicio
       escreval( " Cota��o do D�lar " )
       escreva( " Qual a cota��o atual do d�lar? " )
       leia(cotacao)
       escreva("Quantos d�lares voc� possui? ")
       leia(us)
       rs <- us/cotacao
       escreval(us," D�lares equivalem �: ",rs," R$")



Fimalgoritmo