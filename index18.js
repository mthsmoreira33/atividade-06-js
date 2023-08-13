const precoTabela = 200;
const parcelas = 12;
let precoTotal = 0;
let juros = 0;

if (parcelas === 1) {
    precoTotal = precoTabela - (precoTabela * 0.25);
    console.log(`Preço Total: R$${precoTotal}, Forma de Pagamento: À Vista`);
} else if (parcelas >= 2 && parcelas <= 5) {
    const valorParcelado = precoTabela / parcelas;
    console.log(`Preço Total: R$${precoTabela}, Forma de Pagamento: Parcelado, Parcelamento: ${parcelas}, Preço por Parcela: R$${valorParcelado.toFixed(2)}`);
} else if (parcelas >= 6 && parcelas <= 10) {
    for (let index = 0; index < parcelas; index++) {
        juros += precoTabela * 0.06;
    }
    precoTotal = precoTabela + juros;
    const valorParcelado = precoTotal / parcelas;
    console.log(
        `Preço Total: R$${precoTotal}, Forma de Pagamento: Parcelado, Parcelamento: ${parcelas}, Preço por Parcela: R$${valorParcelado.toFixed(
        2
        )}`
    );
} else if (parcelas >= 11 && parcelas <= 15) {
    for (let index = 0; index < parcelas; index++) {
        juros += precoTabela * 0.13;
    }
    precoTotal = precoTabela + juros;
    precoTotal = precoTabela + juros;
    const valorParcelado = precoTabela / parcelas;
    console.log(
        `Preço Total: R$${precoTotal}, Forma de Pagamento: Parcelado, Parcelamento: ${parcelas}, Preço por Parcela: R$${valorParcelado.toFixed(
        2
        )}`
    );
} else {
  console.log("Valor inválido");
}
