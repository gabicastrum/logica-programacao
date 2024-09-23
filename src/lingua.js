function getMensagem(lingua) {
    switch (lingua.toLowerCase()) {
        //métoto para que converta todos os caracteres para minúsculas
        case "pt":
            return "Olá, Mundo!";
        case "en":
            return "Hello, World!";
        case "es":
            return "Hola, Mundo!"
        default:
            return "Língua não encontrada";
    }
}
console.log (getMensagem("pt"));
console.log (getMensagem("EN")); // sem o toLowerCase essa língua não seria encontrada
console.log (getMensagem("es"));
console.log (getMensagem("abc"));
