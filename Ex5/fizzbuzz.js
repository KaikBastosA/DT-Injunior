function check(value){
    if(value % 3 == 0 && value % 5 == 0){
        console.log("fizzbuzz");
    }
    else if(value % 3 == 0){
        console.log("fizz");
    }
    else if(value % 5 == 0){
        console.log("buzz");
    }
}

let value = parseInt(prompt("Digite um número: "));
if(isNaN(value)){
    console.log("Por favor, insira um número válido.");
}
else{
    check(value);
}