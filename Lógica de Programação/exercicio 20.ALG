Algoritmo "concessionária "

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
         escreva("Valor do carro com desconto é de : " , valorFinal)
         escreva("  ")
         escreva("deseja continuar calculando ? (S) Sim - (N) Não - ")
         leia(opc)
         escolha opc
         
         caso "S"
         programa <- "S"
         caso "N"
         outrocaso
         programa <- "S"
         limpatela
           escreval("As opções disponíveis são apenas S ou N!!!")
            leia(opc)

    fimescolha
fimenquanto
escreval("Foram calculados",total2000," carro(s) com ano até 2000")
escreval("Total geral: ",total)
         
         
         

         
         

Fimalgoritmo