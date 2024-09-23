function Palindromo(palavra) {
    // convertendo a palavra para minúsculas (tolowercase) e remover espaços em branco(replace)
    const palavraInicial = palavra.toLowerCase().replace(/\s/g, '');

    // Inverter a palavra limpa
    const palavraInvertida = palavraInicial.split('').reverse().join('');
    //split divide a palavra em um array de caracteres individuais
    //reverse inverte a ordem dos caracteres no array
    //join junta os caracteres de volta em uma string

    // comparação da palavra inicial com a invertida
    return palavraInicial === palavraInvertida;
}
console.log(Palindromo("radar"));
console.log(Palindromo("Python"));
console.log(Palindromo("Ana"));