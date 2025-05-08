/*
    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência deFibonacci utilizando um loop for.

    Entrada: -
    Lógica: 
        Começo:
            ValorA: 0;
            ValorB: 1;
            ValorC: indefinido.
        Meio:
            ValorC = ValorA + ValorB;
            ValorA = ValorB;
            ValorB = ValorC.
    Saída: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

let valorA = 0;
let valorB = 1;
let valorC;

function gerarFibbonaci() {
  for (let i = 1; i <= 10; i++) {
    console.log(valorA);
    valorC = valorA + valorB;
    valorA = valorB;
    valorB = valorC;
  }
}

gerarFibbonaci();
