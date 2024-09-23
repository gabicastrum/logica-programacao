// formula: x = (-b ± √(b² - 4ac)) / (2a)
// o delta é b² - 4ac
function calcularBhaskara(a, b, c) {
    // calculando o delta 
    const delta = b ** 2 - 4 * a * c;
    // ** sinal de exponencial
    // verificando se existem raízes reais
    if (delta < 0) {
        return "A equação não possui raízes reais";
    }

    // calculando as raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // retornando as raízes em um array
    return [x1, x2];
    // nesse caso achei melhor deixar sem o toFixed()
}
console.log(calcularBhaskara(2, -8, 6)); 
console.log(calcularBhaskara(1, -5, 6)); 
console.log(calcularBhaskara(3, 2, -8)); 