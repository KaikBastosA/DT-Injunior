function recieveNumbers(){
    let num = [];
    let qtd = parseInt(prompt("Digite a quantidade de números que queira inserir: "));
    for (let i = 0; i < qtd; i++){
        num.push(parseInt(prompt(`Digite o ${i+1}º número: `)));
    }
    return num;
}

function contOrder(num){
    let qtdOrder = 0;
    for(let i = 0; i < num.length - 1; i++){
        if(num[i] < num[i+1]){
            qtdOrder++;
        }
    }
    return qtdOrder;
}

let numbers = recieveNumbers();
console.log(contOrder(numbers));