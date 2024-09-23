function parouimpar(numero) {
    if (numero % 2 === 0) {
        // o uso do === é para que seja exatamente igual
        return "par";
    }
        else {
            return "ímpar"
        }
    }
console.log(parouimpar(35));