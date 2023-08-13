const prompt = require('prompt-sync')();
const height = Number(prompt("Digite a altura em metros: "));
const gender = Number(prompt("Digite o gênero: \n 1 para Feminino \n 2 para Masculino \n"));

switch (gender) {
    case 1:
        console.log(`Seu peso ideal é ${(62.1 * height) - 44.7} kgs`);
        break;
    case 2:
        console.log(`Seu peso ideal é ${(72.7 * height) - 58} kgs`);
        break;
    default:
        console.log('Opção Inválida!');
        break;
}
