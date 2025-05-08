/*
    10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

    Entrada: um número inteiro.
    Saída: ele mesmo 10 vezes.
*/
const prompt = require("prompt-sync")();

function repeteNumero(numero) {
  let contador = 0;
  while (contador < 10) {
    contador++;
    console.log(contador + " - " + numero);
  }
}

repeteNumero(prompt("Digite um número: "));
