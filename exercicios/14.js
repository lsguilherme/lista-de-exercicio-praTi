/*
    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

    Entrada: recebe um número
    Lógica: n * n - 1 * n - (n - 1) * ... * 1
        Exemplo: 5! = 5 * 4 * 3 * 2 *1
    Saída: retornar o valor fatorial
*/

const prompt = require("prompt-sync")();

function calcularFatorial(numero) {
  let valorTotal = numero;

  if (isNaN(numero) || numero === "" || numero < 0)
    return "Error: não é possível calcular a fatorial.";

  if (numero === 0 || numero === 1) return 1;

  for (let i = numero - 1; i >= 1; i--) {
    valorTotal *= i;
  }

  return valorTotal;
}

let valorDoUsuario = prompt("Digite um número para calcular a fatorial: ");
console.log(
  `Valor fatorial de ${valorDoUsuario} é: ${calcularFatorial(valorDoUsuario)}`
);
