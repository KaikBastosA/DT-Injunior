let calcDelt = (a, b, c) => b * b - 4 * a * c;

function getRoot(a, b, c) {
    let delta = calcDelt(a, b, c);
    if (delta === 0){
        return [-b / (2 * a)];
    }
    else if(delta < 0){
        return null;
    }
    else{
        let root1 = (-b + Math.sqrt(delta)) / (2 * a);
        let root2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [root1, root2];
    }
}


let a = parseInt(prompt("Digite o valor de a: "));
let b = parseInt(prompt("Digite o valor de b: "));
let c = parseInt(prompt("Digite o valor de c: "));

if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("Por favor, insira números válidos.");
}else{
    let root = getRoot(a, b, c);
    if (root === null){
        console.log("A equação não possui raizes reais.");
    }
    else if(root.length === 1){
        console.log(`A equação possui uma raíz única: ${root[0]}`);
    }
    else{
        console.log(`As raízes são ${root[0]} e ${root[1]}`);
    }
}