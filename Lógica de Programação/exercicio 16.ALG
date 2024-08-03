Algoritmo "três notas obtidas por um aluno"

Var
   nota1 , nota2 , nota3 , media : real


Inicio

        escreva("PRIMEIRA PROVA ")
        leia(nota1)
        escreva("SEGUNDA PROVA ")
        leia(nota2)
        escreva("TERCEIRA PROVA ")
        leia(nota3)
        media <- (nota1+nota2+nota3)/3
        se media >= 6 entao
        escreva("ALUNO APROVADO ")
        senao
        se media <= 5 entao
        escreva("ALUNO REPROVADO ")

        senao
        escreva("ALUNO EM RECUPERAÇÃO ")
        fimse
        fimse

Fimalgoritmo