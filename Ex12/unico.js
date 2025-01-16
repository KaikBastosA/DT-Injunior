function encontrarElementoUnico(lista){
    let unico = 0;
    for(let i = 0; i < lista.length; i++){
        let qtd = 0;
        for(let j = 0; j < lista.length; j++){
            if(lista[i] == lista[j]){
                qtd++;
            }
        }
        if(qtd == 1){
            unico = lista[i];
        }
    }
    return unico;
}

let lista = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9];
console.log(encontrarElementoUnico(lista));