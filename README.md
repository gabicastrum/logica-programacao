# Projeto de Exercícios com TypeScript e Jest

Este projeto contém uma coleção de exercícios de lógica de programação implementados em TypeScript. Os testes unitários são realizados com Jest para garantir a correção das soluções.


## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

Instale as dependências do projeto:
``` 
npm install
```

## Compilação (opcional)
Para compilar o código TypeScript para JavaScript, execute:
```
npm run build
```

## Testes
Para rodar os testes unitários com Jest, execute:
```
npm run test
```

## Atenção!
Crie um arquivo para cada exercício dentro do diretório src e um teste unitário para cada dentro do diretório tests. Há um exemplo já nesse projeto.

## Exercícios

* Crie uma função que recebe dois parâmetros inteiros e retorne a multiplicação deles. Exemplo:
```
    calcularMultiplicacao(2, 5); // retorna 10 pois 2 * 5 = 10
    calcularMultiplicacao(55, 4); // retorna 220 pois 55 * 4 = 220
```

* Crie uma função que recebe um ano de nascimento e retorne quantos anos a pessoa tem. Exemplo:
```
    getIdade(2000); // retorna 24
    getIdade(1987); // retorna 37
```

* Crie uma função que leia um número e diga se ele é par ou ímpar. Exemplo:
```
    parOuImpar(4); // retorna "par"
    parOuImpar(13); // retorna "impar"
```

* Crie uma função que receba duas notas, caso a média for menor que 6, retornar 'reprovado', caso for maior ou igual a 6, retorne 'aprovado'.
Observação, é necessário validar as notas, caso alguma delas não forem entre 0 e 10, retorne uma mensagem de erro: Exemplo: 
```
    aprovadoOuReprovado(5, 10); // retorna "aprovado"
    aprovadoOuReprovado(3, 5); // retorna "reprovado"
    aprovadoOuReprovado(-3, 7); // retorna erro com mensagem "nota inválida"
```

* Crie uma função que receba um código de uma língua e retorne a frase "Olá mundo!" na lingua escolhida, por exemplo:
```
    getMensagem("pt"); retorna "Olá Mundo";
    getMensagem("en"); retorna "Hello World";
    getMensagem("es"); retorna "Hola Mundo";
    getMensagem("abc"); retorna erro com mensagem "Lingua não suportada"
```

* Crie uma função que receba números separado por virgula em uma string e retorne a soma de todos. Observação, não deixe de validar o valor de entrada. Exemplos:
```
    somar("3,6,10"); // retorna 19 pois 3+6+10 é igual a 19
    somar("5,5,1"); // retorna 11 pois 5+5+1 é igual a 11;
    somar("-5,6"); // retornar 1 pois -5+6 é igual a 1
    somar(","); // retorna null
    somar("abc,0"); // retornar erro com mensagem "valor inválido" já que abc não é um número
```

* Crie uma função onde recebe uma lista de inteiros e retorna o maior número
```
    getMaiorNumero([3, 5, 68, 1, 25]); // retorna 68;
    getMaiorNumero([10, 2]); // retorna 10;
    getMaiorNumero([4, 20, 43]); // retorna 43;
    getMaiorNumero([6]); // retorna 6;
    getMaiorNumero([]); // retorna null;
```

* Crie uma função onde recebe um número inteiro e retorne uma array com todos os números de 0 até ele. Exemplo:
```
    listaDesdeZero(10); // retorna [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    listaDesdeZero(5); // retorna [0, 1, 2, 3, 4, 5]
    listaDesdeZero("aaaa"); // retorna erro com mensagem "valor inválido"
```


* Crie uma função que receba uma lista de notas, caso a média for menor que 6, retornar 'reprovado', caso for maior ou igual a 6, retorne 'aprovado'.
Observação, é necessário validar as notas, caso alguma delas não forem entre 0 e 10, retorne uma mensagem de erro: Exemplo: 
```
    aprovadoOuReprovado([5, 10]); // retorna "aprovado"
    aprovadoOuReprovado([6]); // retorna "aprovado"
    aprovadoOuReprovado([6, 6, 10, 3]); // retorna "aprovado"
    aprovadoOuReprovado([3, 5, 1]); // retorna "reprovado"
    aprovadoOuReprovado([-3, 7]); // retorna erro com mensagem "nota inválida"
```
--  Nível intermediário --

* Crie uma função que recebe notas e pesos e calcula a média ponderada. Se uma nota ou peso for inválido, retorne um erro. Observação, o primeiro parâmetro são a notas e o segundo são os pesos de cada nota. Validação necessária: notas entre 0 e 10; pesos positivos.
Exemplos:
```
    getMediaPonderada([7, 8, 9], [2, 3, 1]); // retorna 7.75
    getMediaPonderada([7, 8, 11], [2, -3, 1]); // retorna erro com mensagem "Nota inválida encontrada: 11, Peso inválido encontrado: -3"
``` 

* Faça um programa que gere os primeiros N números da sequência de Fibonacci, onde N é fornecido pelo usuário.
```
    getSequenciaFibonacci(2); // retorna [1, 1]
    getSequenciaFibonacci(6); // retorna [1, 1, 2, 3, 5, 8]
    getSequenciaFibonacci(8); // retorna [1, 1, 2, 3, 5, 8, 13, 21]
```

* Crie uma função que receba uma forma de pagamento e valores dos itens que o cliente deseja comprar e retorne o valor total:
Formas de pagamentos e regras:
    - "credito", acrescenta 3% do valor total dos itens;
    - "debito", valor total não sofre alteração;
    - "dinheiro", desconta 5% do valor total dos itens;
Exemplo:
```
    getValorTotal("credito", [5, 15, 19.99, 79.90]); // retorna 123.48
    getValorTotal("debito", [10, 5, 2.99]); // retorna 17.99
    getValorTotal("dinheiro", [99.90, 10]); // retorna 104.40
    getValorTotal("dinheiro", [9.90, -3]); // retorna erro com mensagem "valor de item -3 é inválido"
    getValorTotal("blablabla", [5.99]); // retorna erro com mensagem "forma de pagamento inválido"
```

* Implemente uma função que calcule o fatorial de um número.
```
    fatorial(5); // 120, pois 5 * 4 * 3 * 2 * 1 = 120
    fatorial(3); // 6, pois 3 * 2 * 1 = 6
    fatorial(0); // 1, pois o fatorial de 0 é 1 por definição
``` 

* Desenvolva um programa que verifique se uma palavra é um palíndromo.
```
    isPalindromo("radar");  // True, pois "radar" é igual a "radar" ao inverso
    isPalindromo("Python");  // False, pois "Python" não é igual a "nohtyP"
    isPalindromo("Ana");  // True, pois "ana" é igual a "ana" ao inverso (após conversão para minúsculas)
```

* Desenvolva um programa que calcule a Bhaskara passando o valor de A, B e C. Obs: Pode ser retornado os dois resultados em um array.
```
    calcularBhaskara(2, -8, 6); // retorna [3, 1]
    calcularBhaskara(1, -5, 6); // retorna [3, 2]
    calcularBhaskara(3, 2, -8); // retorna [1.33, -2]
``` 

* Implemente o algoritmo de ordenação Bubble Sort para ordenar uma lista de números em ordem crescente. (https://blog.betrybe.com/tecnologia/bubble-sort-tudo-sobre/). Exemplo:
```
    bubbleSort([64, 34, 25, 12, 22, 11, 90]); // retorna [11, 12, 22, 25, 34, 64, 90]
```

### POO

* Crie uma classe Aluno que possui propriedades como nome, notas (um array de números) e métodos para adicionar uma nota, calcular a média das notas e verificar se o aluno foi aprovado (média maior ou igual a 6). Valide as notas para garantir que estão no intervalo de 0 a 10.
Exemplo de uso:
```
const aluno = new Aluno("João");
aluno.adicionarNota(8);
aluno.adicionarNota(6);
aluno.adicionarNota(10);
aluno.calcularMedia(); // retona 8
aluno.verificarAprovacao(); // retorna "Aprovado"
```

* Implemente uma classe ContaBancaria com propriedades como titular (nome do titular) e saldo. A classe deve ter métodos para depositar (adicionar valor ao saldo), sacar (subtrair valor do saldo se houver saldo suficiente) e consultarSaldo (retornar o saldo atual). Adicione validação para que o saque não ocorra se o saldo for insuficiente.
Exemplo de uso:
```
const conta = new ContaBancaria("Maria");
conta.depositar(1000);
conta.sacar(300); // retorna "Saque efetuado com sucesso"
conta.consultarSaldo(); // retorna 700
conta.sacar(800); // retorna "Saldo insuficiente"
```

* Crie uma classe Produto com propriedades como nome e preco. Crie classes de forma de pagamento como Debito, Credito, Dinheiro e Pix, e uma classe chamada CaixaService com método chamado efetuarPagamento onde recebe uma forma de pagamento e uma lista de produtos.
Regras:
    - quando forma de pagamento for Credito, valor total da compra deve ter um acréscimo de 3%;
    - quando forma de pagamento for Dinheiro, valor total da compra deve ter um desconto de 7%;
    - quando forma de pagamento for Pix, valor total da compra deve ter uma desconto de 5%;
    - quando forma de pagamento for Debito, nada é alterado no valor total da compra;
Exemplo de uso:
```
    const chocolate = new Produto("Chocolate", 5.99);
    const salgadinho = new Produto("Salgadinho", 7.90);
    const produtos = [chocolate, salgadinho];
    const caixaService = new CaixaService();
    caixaService.efetuarPagamento(new Credito(), produtos); // retorna 14.30 pois 5.99 + 7.90 + 3% = 14.30
    caixaService.efetuarPagamento(new Dinheiro(), produtos); // retorna 12.91 pois 5.99 + 7.90 - 7% = 12.91
    caixaService.efetuarPagamento(new Pix(), produtos); // retorna 13.19 pois 5.99 + 7.90 - 5% = 13.19
    caixaService.efetuarPagamento(new Debito(), produtos); // retorna 13.89
```