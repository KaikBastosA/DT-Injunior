function calcfat(num){
    if(num==0){
        return 1;
    }else{
        return num*calcfat(num-1);
    }
}

function askNumber(){
    let number = parseInt(prompt("Digite um número: "));
    if(number < 0 || isNaN(number)){
        console.log("O número é negativo ou inválido, insira um valor válido:");
        return askNumber();
    }
    return number;
}

let confirm = 's';
while(confirm.toLowerCase() === 's'){
    let number = askNumber();
    console.log(`O fatorial de ${number} é ${calcfat(number)}`);
    confirm = prompt("Deseja calcular o fatorial de outro número? (s/n): ");
} 