function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n){
    for(let i = 0; i < n; i++){
        console.log(fibonacci(i));
    }
}

let n = parseInt(prompt("Digite o valor de n: "));
while(isNaN(n) || n < 0){
    console.log("Por favor, insira um valor válido.");
    n = parseInt(prompt("Digite o valor de n: "));
}
printFibonacci(n);