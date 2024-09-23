function aprovadoOuReprovado(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        return "Nota inválida";
    }
const media = (nota1 + nota2) /2
if (media >= 6) {
    return "Aprovado";
} else {
    return "Reprovado";
}
}
console.log(aprovadoOuReprovado(6, 7))
