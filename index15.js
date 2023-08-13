const prompt = require('prompt-sync')();
const a = Number(prompt('Tamanho do lado A do triângulo: '));
const b = Number(prompt('Tamanho do lado B do triângulo: '));
const c = Number(prompt('Tamanho do lado C do triângulo: '));

if (a !== b && b !== c && c !== a) {
    console.log('Triângulo Escaleno');
} else if (a === b && b === c) {
    console.log('Triangulo Equilátero');
} else {
    console.log('Triângulo Escaleno');
}
