function fatorial(n) {
    if (n < 0) {
        return "Não existe fatorial de números negativos";
    }

    let resultado = 1;
    // qualquer número multiplicado por 1 é ele mesmo
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5)); 
console.log(fatorial(3)); 
console.log(fatorial(0)); 
console.log(fatorial(-2)); 