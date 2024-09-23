function getMediaPonderada(notas, pesos) {
    //validação se o número de nota é igual ao de pesos
    if (notas.length !== pesos.length) {
        throw new Error('Quantidade de notas e pesos deve ser a mesma.');
    }
    let mensagemErro = "";
    // string para armazenar a mensagem de erro
    for (let i = 0; i < notas.length; i++) {
        // essa é uma estrutura básica do loop for, para percorrer cada elemento um a um. 
        // enquanto o valor de i for menor que o comprimento da array (notas) o loop vai continuar.
        if (notas[i] < 0 || notas[i] > 10) {
            // se a nota for menor do que zero ou maior do que 10:
            mensagemErro += `Nota inválida encontrada: ${notas[i]} `;
        }
        if (pesos[i] <= 0) {
            // se o peso for menor ou igual a zero:
            mensagemErro += `Peso inválido encontrado: ${pesos[i]} `;
        }
    }

    if (mensagemErro !== "") {
        throw new Error(mensagemErro);
        // se estiver vazio ele gera um erro
    }

    // Cálculo da média ponderada
    // numerador nota1*peso1 + nota2*peso2 + nota3*peso3 /denominador(soma dos pesos)
    let somaNumerador = 0;
    let somaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        //começa o loop
        somaNumerador += notas[i] * pesos[i];
        //acessa o valor da nota ou peso na posição i da array notas ou pesos
        somaPesos += pesos[i];
        // soma o peso atual à variável somaPesos para utilizar na divisão para calcular a média
    }
    const mediaPonderada = somaNumerador / somaPesos;
    return mediaPonderada.toFixed(2);
}
console.log(getMediaPonderada([7, 8, 9], [2, 3, 1])); 
console.log(getMediaPonderada([7, 8, 11], [2, -3, 1])); 
console.log(getMediaPonderada([7, 8], [2, 3, 1])); 
