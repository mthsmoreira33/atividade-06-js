const prompt = require('prompt-sync')();
const age = Number(prompt('Digite a sua idade: '));

if (18 >= age <= 67) {
    console.log('Pode doar sangue!');
} else {
    console.log('Não pode doar sangue!');
}
