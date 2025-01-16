// função que verifica se uma frase é um palindromo, removendo todos os espaços, ignorando a diferença entre letras maiúsculas e minúsculas.
function isPalindrome(phr){
    phr = phr.replace(/ /g, "").toLowerCase();
    let reversed = phr.split("").reverse().join("");
    return phr === reversed;
}

let phrase = prompt("Digite uma frase: ");
if(isPalindrome(phrase)){
    console.log("A frase é um palíndromo.");
}
else{
    console.log("A frase não é um palíndromo.");
}
