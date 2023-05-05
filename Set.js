const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)]; //comando Set cria um conjunto sem repetições, spread operator recria o conjunto no formato de array

console.log(nomesAtualizados);
