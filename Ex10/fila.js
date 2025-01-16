function newClient(fila){
    let name = prompt("Digite o nome do cliente: ");
    fila.push(name);
    return fila;
}

function attendClient(fila){
    let name = fila.shift();
    console.log("Cliente atendido: " + name);
}

fila = [];
let option = 0;
while(option != 3){
    option = parseInt(prompt("Digite a opção desejada: \n1 - Novo Cliente\n2 - Atender Cliente\n3 - Encerrar Programa"));
    if(option == 1){
        fila = newClient(fila);
    }else if(option == 2){
        attendClient(fila);
    }
    if (option != 3) {
        console.log("Fila de espera: ");
        for(let i = 0; i < fila.length; i++){
            console.log((i+1) + "º " + fila[i]);
        }
    }
}