function verificarIdades(idades, ano) {
    let ages = [];
    for (let i = 0; i < idades.length; i++) {
        if (ano - idades[i] >= 18) {
            console.log(`Pessoa ${i + 1}: Maior de idade.`);
            ages.push('Maior');
        }
        else {
            console.log(`Pessoa ${i + 1}: Menor de idade.`);
            ages.push('Menor');
        }
    }
    return ages;
}