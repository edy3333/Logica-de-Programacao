Algoritmo "concession�ria "

Var
         programa , opc : caractere
         ano , total , total2000 : inteiro
         valor , valorFinal , desconto : real


Inicio

         programa <- "S"
         enquanto programa <> "N" faca
         limpatela
         escreva("Qual valor do carro " )
         leia(valor)
         escreva("Digite o Ano do Carro ")
         leia(ano)
         se ano <= 2000 entao
         desconto <- 0.12
         total2000 <- total2000  + 1
         total <- total + 1
         fimse
         
         desconto <- desconto * valor
         valorFinal <- valor - desconto
         escreva("Valor do carro com desconto � de : " , valorFinal)
         escreva("  ")
         escreva("deseja continuar calculando ? (S) Sim - (N) N�o - ")
         leia(opc)
         escolha opc
         
         caso "S"
         programa <- "S"
         caso "N"
         outrocaso
         programa <- "S"
         limpatela
           escreval("As op��es dispon�veis s�o apenas S ou N!!!")
            leia(opc)

    fimescolha
fimenquanto
escreval("Foram calculados",total2000," carro(s) com ano at� 2000")
escreval("Total geral: ",total)
         
         
         

         
         

Fimalgoritmo