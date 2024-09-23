class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class FormaPagamento {
    calcularValorFinal(valorTotal) {
        return valorTotal; // Valor padrão, pode ser escrito nas subclasses
    }
}

class Debito extends FormaPagamento {
    calcularValorFinal(valorTotal) {
        return valorTotal.toFixed(2);
    }
 }

class Credito extends FormaPagamento {
    calcularValorFinal(valorTotal) {
        return (valorTotal * 1.03).toFixed(2); // Acréscimo de 3%
    }
}

class Dinheiro extends FormaPagamento {
    calcularValorFinal(valorTotal) {
        return (valorTotal * 0.93).toFixed(2); // Desconto de 7%
    }
}

class Pix extends FormaPagamento {
    calcularValorFinal(valorTotal) {
        return (valorTotal * 0.95).toFixed(2); // Desconto de 5%
    }
}
class CaixaService {
    efetuarPagamento(formaPagamento, produtos) {
        const valorTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
        //0 dia que o total inicia com 0
        //na primeira iteração: o total (0) é somado com o preco do peimeiro produto, e se tona o novo valor do total. o process se repete. 
        return formaPagamento.calcularValorFinal(valorTotal);
    }
}
const chocolate = new Produto("Chocolate", 5.99);
const salgadinho = new Produto("Salgadinho", 7.90);
const produtos = [chocolate, salgadinho];
const caixaService = new CaixaService();

console.log(caixaService.efetuarPagamento(new Credito(), produtos)); 
console.log(caixaService.efetuarPagamento(new Dinheiro(), produtos)); 
console.log(caixaService.efetuarPagamento(new Pix(), produtos)); 
console.log(caixaService.efetuarPagamento(new Debito(), produtos)); 