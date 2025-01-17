function adicionarJogador(nome, idade, posicao, pontuacao){
    time.push({nome, idade, posicao, pontuacao});
}

function buscarPorPosicao(posi){
    const jogadores = time.filter(jogador => jogador.posicao === posi);
    if(jogadores.length === 0){
        console.log("Nenhum jogador encontrado");
    } else {
        jogadores.forEach((jogador, index) => console.log(`Jogador ${index+1}: ${jogador.nome}`));
    }
}

function listarTime(){
    time.forEach(jogador => console.log(jogador));
}

function calcularPontuacaoMedia(){
    const totalPontuacao = time.reduce((total, jogador) => total + jogador.pontuacao, 0);
    return totalPontuacao/time.length;
}

const time = [];
let opcao = 0;
while(opcao !== 5){
    opcao = parseInt(prompt("Digite a opção desejada:\n1- Adicionar jogador\n2- Buscar por posição\n3- Listar time\n4- Calcular pontuação média\n5- Sair"));
    switch(opcao){
        case 1:
            const nome = prompt("Digite o nome do jogador: ");
            const idade = parseInt(prompt("Digite a idade do jogador: "));
            const posicao = prompt("Digite a posição do jogador: ");
            const pontuacao = parseInt(prompt("Digite a pontuação do jogador: "));
            adicionarJogador(nome, idade, posicao, pontuacao);
            break;
        case 2:
            const posicaoBusca = prompt("Digite a posição desejada: ");
            buscarPorPosicao(posicaoBusca);
            break;
        case 3:
            listarTime();
            break;
        case 4:
            console.log(calcularPontuacaoMedia());
            break;
        case 5:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}

