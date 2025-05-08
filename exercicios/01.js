/* 
    1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

    Entrada: um número inteiro - Integer.
    Lógica: verifica se é par ou ímpar - if.
    Saída:  retorna se é par ou ímpar.
*/
var prompt = require("prompt-sync")();

function parOuImpar(numero) {
  if (isNaN(numero)) {
    return `Erro: Por favor digite um número válido.`;
  }

  if (numero % 2 === 0) {
    return `${numero} é par.`;
  }
  return `${numero} é impar.`;
}

let numero = Number(prompt("Digite um número: "));

console.log(parOuImpar(numero));
