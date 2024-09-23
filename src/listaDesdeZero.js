function listaDesdeZero(numero) {
    // Converter string para um número inteiro
    numero = parseInt(numero);
    // Verificar se o resultado da conversão é um número e se é inteiro
    if (isNaN(numero)) {
        throw new Error("Valor inválido");
    }

    const resultado = [];
    for (let i = 0; i <= numero; i++) {
        // primeiro inicia com o valor 0
        // enquanto i for menor ou igual ao numero, o loop continua sendo executado;
        // a cada iteração do loop, o valor de i é incrmentado em 1.
        resultado.push(i);
        // push adiciona o i no array resultado
    }
    return resultado;
}

console.log(listaDesdeZero(23)); 