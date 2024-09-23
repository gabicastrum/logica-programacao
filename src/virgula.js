function somar(numeros) {
    if (!numeros || numeros.trim() === '') {
        return null;
    }
    const numerosArray = numeros.split(',');

    for (const numero of numerosArray) {
        if (isNaN(Number(numero))) {
            // isNaN = não é um número; retorna falso se for um número/puder ser convertido para um número, e true se não for um número (tipo "abc").
            return 'Valor Inválido';
        }
    }
    const soma = numerosArray.reduce((total, numero) => total + Number(numero), 0);
    return soma;
}

console.log(somar("3,6,10"));
console.log(somar("5,5,1"));
console.log(somar("-5,6"));
console.log(somar(","));
console.log(somar("abc")); 