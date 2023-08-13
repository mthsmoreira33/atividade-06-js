const prompt = require('prompt-sync')();
const stopNumber = Number(prompt('Digite o número para parar contagem: '));

for (let index = 1; index <= stopNumber; index++) {
    if (index % 2 === 1) {
        console.log(index);
    }
}
