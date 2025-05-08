/*
    5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

    Entrada: receber peso e altura - float
    Lógica: 
            Fórmula: peso / (altura)²
            Tabela: 
                Baixo peso: menor que 18.5
                Peso normal: entre 18.5 e 24.9
                Sobrepeso: entre 25.0 e 29.9
                Obesidade: maior que 30
    Saída: retornar "[Categoria] - seu imc é {valor do IMC}" 
*/

const prompt = require("prompt-sync")();

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}
function categorizaPeso(peso, altura) {
  if (isNaN(peso) || peso === "") {
    return "Error: Peso inválido.";
  }
  if (isNaN(altura) || altura === "") {
    return "Error: Altura inválida.";
  }
  let imc = calcularImc(peso, altura).toFixed(2);

  if (imc < 18.5) {
    return `[Baixo peso] - seu imc é: ${imc}`;
  } else if (imc <= 24.9) {
    return `[Peso normal] - seu imc é: ${imc}`;
  } else if (imc <= 29.9) {
    return `[Sobrepeso] - seu imc é: ${imc}`;
  } else {
    return `[Obesidade] - seu imc é: ${imc}`;
  }
}

let peso = prompt("Digite seu peso (Ex: 90.50): ");
let altura = prompt("Digite sua altura (Ex: 1.80): ");

console.log(categorizaPeso(peso, altura));
