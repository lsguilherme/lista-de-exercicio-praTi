/*
    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

    Entrada: entrar com um núimero.
    Lógica: criar uma tabuada do número escolhido de 1 a 10 - for
    Saída: exibir uma tabuada do número escolhido
*/

const prompt = require("prompt-sync")();

function criaTabuada(numero) {
  let resultado = "";

  if (isNaN(numero) || numero === "" || numero <= 0) {
    return "Error: Número inválido";
  }

  for (let i = 1; i <= 10; i++) {
    let multiplicacao = i * numero;
    resultado += `${numero} x ${i} = ${multiplicacao}\n`;
  }
  return resultado;
}

console.log(criaTabuada(prompt("Digite um número: ")));
