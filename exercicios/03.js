/*
    3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

    Entrada: nota de 0 a 10 - int.
    Lógica: verificar se foi "Aprovado"(7-10), "Recuperação" (0-6) ou "Reprovado"
    Saída: reornar "Aprovado", "Recuperação" ou "Reprovado"
*/
var prompt = require("prompt-sync")();

function verificaAprovacao(nota) {
  if (nota === "" || isNaN(nota)) {
    return "Error: Por favor digite um número válido.";
  }
  if (nota > 10 || nota < 0) {
    return "Error: A nota deve estar entre 0 e 10.";
  }

  if (nota >= 7) {
    return "Parabéns! Você foi aprovado.";
  } else if (nota >= 4) {
    return "Você está em recuperação.";
  } else {
    return "Você foi reprovado.";
  }
}

let nota = prompt("Digite sua nota: ");

console.log(verificaAprovacao(nota));
