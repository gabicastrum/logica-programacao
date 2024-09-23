function aprovadoReprovado(notas) {
    // verifica se todas as notas estão entre 0 e 10
    for (const nota of notas) {
        if (nota < 0 || nota > 10) {
            return "Nota inválida";
        }
    }

    // calcula a média das notas
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
    // notas.length traz o número total de notas 

    // verifica se a média é maior ou igual a 6
    return media >= 6 ? "Aprovado" : "Reprovado";
}
console.log(aprovadoReprovado([5, 10])); 
console.log(aprovadoReprovado([6])); 
console.log(aprovadoReprovado([6, 6, 10, 3])); 
console.log(aprovadoReprovado([3, 5, 1])); 
console.log(aprovadoReprovado([-3, 7])); 