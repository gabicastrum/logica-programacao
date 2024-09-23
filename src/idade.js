function getIdade (anoNascimento){
    // definição de uma função (getIdade) que recebe um parâmetro (ano de nascimento)
    const anoAtual = new Date().getFullYear();
// ano atual é uma constante e atribui a ela o ano atual, que foi obtido usando o getFullYear de um novo objeto Date
    const idade = anoAtual - anoNascimento;
    // aqui calcula a idade subtraindo o ano de nascimento e o ano atual
    return idade;
}

console.log (getIdade(2002)); 