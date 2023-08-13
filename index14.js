const prompt = require('prompt-sync')();
const num = Number(prompt('Digite um número: '));
let soma = 0;

while (soma < 500) {
    soma += num * 3;
}

console.log(soma);
