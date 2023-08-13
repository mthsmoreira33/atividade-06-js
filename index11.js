const prompt = require('prompt-sync')();
const shift = prompt('Digit o seu turno. \n m para matutino \n v para vespertino \n n para noturno \n');

switch (shift.toLowerCase()) {
    case 'm':
        console.log('Bom dia!');
        break;
    case 'v':
        console.log('Boa tarde!');
        break;
    case 'n':
        console.log('Boa noite!');
        break;
    default:
        console.log('Opção Inválida!');
        break;
}
