Algoritmo "salario do vendedor"

Var
    nome: caractere
    salario: real
    vendas: real
    comissao: real
    salarioFinal: real


Inicio
       escreva( " sistema de gestão " )
       escreva( " nome do vendedor " )
       leia(nome)
       escreva( " salario do vendedor " )
       leia(salario)
       escreva( " o total de vendas " )
       leia(vendas)
       comissao <- 0.15 * vendas
       salarioFinal <- salario * comissao
       escreva( " o salario final é " , salarioFinal )


Fimalgoritmo