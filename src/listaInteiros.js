function getMaiorNumero(numeros) {
    if (numeros.length === 0) {
        return null;
        // length é usado para obter o número de elementos de uma array
        //Se a lista estiver vazia, retorna null

    }
    return numeros.reduce((maior, numero) => {
        //reduce reduz a array em um único valor
        return numero > maior ? numero : maior;
        //se o número atual for maior do que o maior número encontrado até o momento, a primeira parte do operador ternário é executada. 
        //Mas se a condição não for verdadeira(se o número atual não for maior) o valor de "maior" é retornado
    }, -Infinity);
    // o uso do -Infinity garante que qualquer número será maior e será atribuído ao maior na primeira interação. 
}
console.log(getMaiorNumero([3, 5, 68, 1, 25])); 
console.log(getMaiorNumero([10, 2])); 
console.log(getMaiorNumero([4, 20, 43])); 
console.log(getMaiorNumero([6])); 
console.log(getMaiorNumero([])); 