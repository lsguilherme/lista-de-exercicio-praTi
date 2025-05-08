/*
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

    Entrada: 2 valores.
    Lógica: Ordenar em ordem crescente.
    Saída: menor valor - maior valor

*/

const prompt = require("prompt-sync")();

function ordenarAsc(numA, numB) {
  if (isNaN(numA) || isNaN(numB) || numA === "" || numB === "") {
    return "Error: Número inválido";
  }
  return numA > numB ? `[${numB}, ${numA}]` : `[${numA}, ${numB}]`;
}

let numA = prompt("Digite um número: ");
let numB = prompt("Digite outro número: ");
console.log(ordenarAsc(numA, numB));
