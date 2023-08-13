const prompt = require('prompt-sync')();
const date = new Date();
const thisYear = date.getFullYear();

const birthyear = Number(prompt('Digite o ano que você nasceu: '));

if (thisYear - birthyear >= 18) {
    console.log('Você poderá votar!')
} else {
    console.log('Você não poderá votar!');
}
