/*
    6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
    
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
        Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
        Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
        Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

    Entrada: os três lados do triangulo. A, B e C.
    Lógica:
        Dois lados iguais: Isósceles
        Todos lados iguais: Equilátero
        Todos lados diferentes: Escaleno
    Saída: 
        [Isósceles] - Dois lados são iguais.
        [Equilátero] - Todos lados são iguais.
        [Escaleno] - Todos lados são diferentes.
*/

const prompt = require("prompt-sync")();

function verificaSeETriangulo(ladoA, ladoB, ladoC) {
  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    return true;
  }

  return false;
}

function verificarTipoDoTriangulo(ladoA, ladoB, ladoC) {
  const eUmTriangulo = verificaSeETriangulo(ladoA, ladoB, ladoC);
  if (
    ladoA === "" ||
    ladoB === "" ||
    ladoC === "" ||
    isNaN(ladoA) ||
    isNaN(ladoB) ||
    isNaN(ladoC)
  ) {
    return "Error: Número inválido.";
  }

  if (eUmTriangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
      return "[Equilátero] - Todos lados são iguais.";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return "[Isósceles] - Dois lados são iguais.";
    } else {
      return "[Escaleno] - Todos lados diferentes.";
    }
  } else {
    return "Não é um triangulo.";
  }
}

let ladoA = Number(prompt("Digite o primeiro lado do triângulo: "));
let ladoB = Number(prompt("Digite o segundo lado do triângulo: "));
let ladoC = Number(prompt("Digite o terceiro lado do triângulo: "));

console.log(verificarTipoDoTriangulo(ladoA, ladoB, ladoC));
