/* 
    4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

    Entrada: 3 opções - switch-case.
    Saída: retornar a opção escolhida.
*/

const prompt = require("prompt-sync")();

function menuInterativo(opcao) {
  switch (opcao) {
    case "1":
      console.log("Você escolheu: One Piece.");
      break;
    case "2":
      console.log("Você escolheu: Naruto.");
      break;
    case "3":
      console.log("Você escolheu: Dragon Ball.");
      break;
    default:
      console.log("Error: Opção inválida.");
      break;
  }
}

console.log(`
    -=- MENU INTERATIVO -=-
    1. One Piece
    2. Naruto
    3. Dragon Ball
    `);
let opcao = prompt("Escolha uma opção: ");

menuInterativo(opcao);
