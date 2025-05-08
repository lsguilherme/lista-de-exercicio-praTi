/*
    2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura decontrole if-else.

    Entrada: idade - Integer.
    Lógica: verifica se é criança, adolescente, adulto ou idoso - if.
    Saída: retornar se é  criança, adolescente, adulto ou idoso.

*/

var prompt = require("prompt-sync")();

function classificaIdade(idade) {
  if (isNaN(idade) || idade == "") {
    return "Erro: Por favor digite um número válido.";
  }

  if (idade < 0) {
    return "Erro: idade tem que ser positiva.";
  } else if (idade < 12) {
    return "É uma criança.";
  } else if (idade < 18) {
    return "É um adolescente.";
  } else if (idade < 65) {
    return "É um adulto.";
  } else {
    return "É um idoso.";
  }
}

let idade = Number(prompt("Digite um número: "));

console.log(classificaIdade(idade));
