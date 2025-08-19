function jogoAdivinhacao() {
    const maxTentativas = 7;
    let jogarNovamente = true;

    while (jogarNovamente) {
        const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativasRestantes = maxTentativas;
        let acertou = false;

        console.log("Bem-vindo ao jogo de adivinhação!");
        console.log(`Tente adivinhar o número secreto entre 1 e 100. Você tem ${tentativasRestantes} tentativas.`);

        while (tentativasRestantes > 0 && !acertou) {
            const palpiteStr = prompt(`Tentativa ${maxTentativas - tentativasRestantes + 1}/${maxTentativas}. Digite seu palpite:`);
            const palpite = parseInt(palpiteStr);

            if (isNaN(palpite)) {
                console.log("Por favor, digite um número válido.");
                continue;
            }

            if (palpite < 1 || palpite > 100) {
                console.log("O número deve estar entre 1 e 100.");
                continue;
            }

            tentativasRestantes--;

            if (palpite === numeroSecreto) {
                console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${maxTentativas - tentativasRestantes} tentativas!`);
                acertou = true;
            } else if (palpite < numeroSecreto) {
                console.log(`O número secreto é maior que ${palpite}. Tentativas restantes: ${tentativasRestantes}`);
            } else {
                console.log(`O número secreto é menor que ${palpite}. Tentativas restantes: ${tentativasRestantes}`);
            }
        }

        if (!acertou) {
            console.log(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
        }

        const resposta = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
        jogarNovamente = resposta === 's';
    }

    console.log("Obrigado por jogar!");
}

jogoAdivinhacao();