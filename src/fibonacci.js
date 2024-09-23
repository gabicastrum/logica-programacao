//A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois anteriores. 
//Começa com 0 e 1, e os próximos números são gerados pela adição dos dois últimos.
function getSequenciaFibonacci(n) {
    if (n <= 0) {
        return "O valor deve ser maior que 0";
    }
    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        //para começar a calcular a partir do segundo numero
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, n);
}
console.log(getSequenciaFibonacci(0)); 
console.log(getSequenciaFibonacci(6)); 
console.log(getSequenciaFibonacci(9)); 