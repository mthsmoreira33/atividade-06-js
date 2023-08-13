const prompt = require('prompt-sync')();
const age = Number(prompt('Digite a sua idade: '));

if (age >= 18) {
  const hasHabilitation = prompt('Tem habilitação? \n [s] para sim \n [n] para não \n');

  switch (hasHabilitation.toLowerCase()) {
    case 's':
        console.log('Pode dirigir')
        break;
    case 'n':
        console.log('Não pode dirigir');
        break;
    default:
        console.log('Opção inválida')
        break;
  }

} else {
  console.log('Não pode dirigir');
}
