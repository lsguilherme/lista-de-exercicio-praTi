/*
    13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

    Entrada: receber números até digitar 0.
    Lógica: somar e retornar a média desses números.
    Saída: retornar a média desses números.
*/

const prompt = require("prompt-sync")();

function calculaMedia(listaDeNumeros) {
  const soma = listaDeNumeros.reduce((acc, val) => acc + val, 0);
  const media = soma / listaDeNumeros.length;

  return media;
}

function exibeMedia() {
  let listaDeNumeros = [];
  let numero;

  while (true) {
    numero = parseFloat(prompt("Digite um número (Para parar: 0): "));

    if (numero === 0) break;

    listaDeNumeros.push(numero);
  }

  return calculaMedia(listaDeNumeros);
}

console.log(`Sua média é: ${exibeMedia()}`);
