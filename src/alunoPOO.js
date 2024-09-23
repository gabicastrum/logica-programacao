class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = [];
    }

    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            //adiciona nota na array de notas
        } else {
            console.log("Nota inválida. A nota deve estar entre 0 e 10.");
        }
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return "Não há notas para calcular a média.";
        }
        // calcula a média do aluno
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }

    verificarAprovacao() {
        const media = this.calcularMedia();
        if (media >= 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}
const aluno = new Aluno("João");
aluno.adicionarNota(8);
aluno.adicionarNota(6);
aluno.adicionarNota(10);

console.log(aluno.calcularMedia());
console.log(aluno.verificarAprovacao()); 