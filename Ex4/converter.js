function convert(currency) {
    const euro = 6.10;
    const dollar = 5.70;
    let convertedCurrency = currency / euro;
    let convertedCurrency2 = currency / dollar;
    console.log(`O valor convertido em euro é: ${convertedCurrency.toFixed(2)} e em dólar é: ${convertedCurrency2.toFixed(2)}`);
}

let currency = parseFloat(prompt("Digite o valor em reais para converter em euro/dólar: "));
if (isNaN(currency)) {
    console.log("Insira um número válido.");
}
convert(currency);