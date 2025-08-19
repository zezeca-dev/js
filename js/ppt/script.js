function jogarPedraPapelTesoura() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    let jogarNovamente = true;

    while (jogarNovamente) {
        let jogadaUsuario = prompt("Escolha: pedra, papel ou tesoura (ou 'sair' para encerrar)").toLowerCase();
        
        if (jogadaUsuario === 'sair') {
            jogarNovamente = false;
            console.log("Obrigado por jogar!");
            break;
        }

        if (!opcoes.includes(jogadaUsuario)) {
            console.log("Opção inválida. Tente novamente.");
            continue;
        }

        const indiceComputador = Math.floor(Math.random() * 3);
        const jogadaComputador = opcoes[indiceComputador];

        console.log(`Você escolheu: ${jogadaUsuario}`);
        console.log(`Computador escolheu: ${jogadaComputador}`);

        if (jogadaUsuario === jogadaComputador) {
            console.log("Empate!");
        } else if (
            (jogadaUsuario === 'pedra' && jogadaComputador === 'tesoura') ||
            (jogadaUsuario === 'papel' && jogadaComputador === 'pedra') ||
            (jogadaUsuario === 'tesoura' && jogadaComputador === 'papel')
        ) {
            console.log("Você venceu!");
        } else {
            console.log("Computador venceu!");
        }
    }
}

jogarPedraPapelTesoura();