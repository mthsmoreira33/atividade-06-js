let num = 10,
sum = 0;

do {
  sum += num;
  num++;
} while (num >= 10 && num <= 100);

console.log(`A soma de todos os números entre 10 e 100 é ${sum}`);
