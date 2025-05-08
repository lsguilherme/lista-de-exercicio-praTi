/*
    11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

    Entrada: Entrar cinco números - for
    Lógica: Somar os cincos números - +=
    Saída: Retornar a soma dos 5 números.
*/

const prompt = require("prompt-sync")();
const QUANTIDADE_DE_NUMEROS = 5;

function somaNumeros() {
  let valorTotal = 0;
  for (let i = 0; i < QUANTIDADE_DE_NUMEROS; i++) {
    let numero = parseFloat(prompt("Digite um número: "));

    if (isNaN(numero)) {
      console.log("Entrada inválida. Por favor, digite um número válido.");
      i--;
      continue;
    }

    valorTotal += numero;
  }

  return valorTotal;
}

console.log(`Valor total: ${somaNumeros()}`);
