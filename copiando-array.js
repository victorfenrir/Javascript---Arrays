const notas = [7, 7, 8, 9];

const novasNotas = [5, ...notas, 10]; //"..." aqui é chamado de spread operator

console.log(`As novas notas são ${novasNotas}.`);
console.log(`As notas originais são ${notas}.`);


