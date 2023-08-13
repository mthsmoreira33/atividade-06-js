const prompt = require('prompt-sync')();
const age = Number(prompt("Digite a sua age: "));

if (age >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
