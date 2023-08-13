const prompt = require('prompt-sync')();
const number = Number(prompt("Digite um número de 1 a 7: "));
const daysOfWeek = [
  "",
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

if (number >= 1 && number <= 7 && number !== 0) {
    console.log(daysOfWeek[number]);
} else {
    console.log("Opção inválida");
}
