/*
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

    Entrada: número de maças
    Lógica : 
        se forem mais de 12 maças: R$ 0.25
        se forem menos de 12 maças: R$ 0.30
        se for 0 ou menos: Error
        Calcular o valor total da compra
    Saída: [quantidade Maças] - Valor total: R$ valor  
*/

const prompt = require("prompt-sync")();

const PRECO_PADRAO = 0.3;
const PRECO_COM_DESCONTO = 0.25;
const DESCONTO_MINIMO = 12;

function calcularPrecoDaMaca(quantidade) {
  if (quantidade === "" || quantidade <= 0 || isNaN(quantidade)) {
    return "Error: Quantidade inválida.";
  }

  const precoUnitario =
    quantidade >= DESCONTO_MINIMO ? PRECO_COM_DESCONTO : PRECO_PADRAO;
  const valorTotal = quantidade * precoUnitario;

  return `${quantidade} maçã(s) - Valor total: R$ ${valorTotal.toFixed(2)}`;
}

console.log(
  calcularPrecoDaMaca(prompt("Digite quantas maças foram compradas: "))
);
