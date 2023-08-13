const prompt = require('prompt-sync')();
const number = Number(prompt("Digite um número de 1 a 7: "));

switch (number) {
  case 1:
    day = "Domingo";
    break;
  case 2:
    day = "Segunda-feira";
    break;
  case 3:
    day = "Terça-feira";
    break;
  case 4:
    day = "Quarta-feira";
    break;
  case 5:
    day = "Quinta-feira";
    break;
  case 6:
    day = "Sexta-feira";
    break;
  case 7:
    day = "Sábado";
    break;

  default:
    day = "Dia Inválido";
    break;
}

console.log(day);
