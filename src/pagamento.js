function getValorTotal(formaPagamento, itens) {
    // confirmar forma de pagamento
    const formasDePagamentoValidas = ["credito", "debito", "dinheiro"];
    if (!formasDePagamentoValidas.includes(formaPagamento.toLowerCase())) {
        throw new Error("Forma de pagamento inválida");
    }

    // confirmar valores dos itens
    if (itens.some(item => item <= 0)) {
        throw new Error("Valor de item inválido");
    }

    // valor total inicial
    const valorTotalInicial = itens.reduce((total, item) => total + item, 0);

    //descontos e acréscimos
    let valorTotalFinal = valorTotalInicial;
    switch (formaPagamento.toLowerCase()) {
        case "credito":
            valorTotalFinal *= 1.03; // acréscimo de 3%
            break;
        case "dinheiro":
            valorTotalFinal *= 0.95; // desconto de 5%
            break;
    }

    return valorTotalFinal.toFixed(2);
}
console.log(getValorTotal("credito", [5, 15, 20, 80]));
console.log(getValorTotal("debito", [10, 5, 2.99]));
console.log(getValorTotal("dinheiro", [99.90, 10]));
console.log(getValorTotal("dinheiro", [9.90, -3])); 
console.log(getValorTotal("blablabla", [5.99]));// depois que mostra o erro, ele para de executar e não executa o ultimo