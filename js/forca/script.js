function jogoDaForca() {
    const palavras = [
        'javascript', 'programacao', 'computador', 'teclado', 'monitor',
        'internet', 'algoritmo', 'desenvolvimento', 'aplicativo', 'website',
        'banco de dados', 'framework', 'biblioteca', 'funcao', 'variavel',
        'condicional', 'repeticao', 'objeto', 'array', 'string'
    ];
    
    const maxErros = 6;
    let jogarNovamente = true;

    while (jogarNovamente) {

        const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
        let palavraAtual = '_'.repeat(palavraSecreta.length).split('');
        let letrasTentadas = [];
        let erros = 0;
        let acertou = false;

        console.log("Bem-vindo ao Jogo da Forca!");
        console.log(`A palavra tem ${palavraSecreta.length} letras: ${palavraAtual.join(' ')}`);

        while (erros < maxErros && !acertou) {
            const letra = prompt(`Digite uma letra (erros: ${erros}/${maxErros}):`).toLowerCase();

            if (letra.length !== 1 || !letra.match(/[a-z]/)) {
                console.log("Por favor, digite uma única letra válida.");
                continue;
            }

            if (letrasTentadas.includes(letra)) {
                console.log("Você já tentou esta letra. Tente outra.");
                continue;
            }

            letrasTentadas.push(letra);

            if (palavraSecreta.includes(letra)) {
                console.log(`Boa! A letra "${letra}" está na palavra.`);

                for (let i = 0; i < palavraSecreta.length; i++) {
                    if (palavraSecreta[i] === letra) {
                        palavraAtual[i] = letra;
                    }
                }

                console.log(`Palavra atual: ${palavraAtual.join(' ')}`);

                if (!palavraAtual.includes('_')) {
                    acertou = true;
                    console.log(`Parabéns! Você acertou a palavra "${palavraSecreta}"!`);
                }
            } else {
                erros++;
                console.log(`A letra "${letra}" não está na palavra. Erros: ${erros}/${maxErros}`);
                
                if (erros === maxErros) {
                    console.log(`Game Over! A palavra era "${palavraSecreta}".`);
                }
            }
        }

        const resposta = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
        jogarNovamente = resposta === 's';
    }

    console.log("Obrigado por jogar!");
}

jogoDaForca();