Algoritmo "Custo do Consumidor"

Var
    custoFabrica, custoFinal: real


Inicio

       escreva("Informe o custo de f�brica do ve�culo: ")
       leia(custoFabrica)
       custoFinal <- custoFabrica + (0.28 * custoFabrica) + (0.45 * custoFabrica)
       custoFinal <- custoFinal + (0.45 * custoFinal)
       escreval("O custo para o consumidor final � de: ",custoFinal)


Fimalgoritmo