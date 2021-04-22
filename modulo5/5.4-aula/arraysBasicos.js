/**
 * arquivo: arraysBasicos.js
 * descrição: explicação de como podemos usar Arrays em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 */

// Lista de Objetos!
//let nome_array = [item1, item2, item3 ...];
//Uma array de eletrodomesticos

/* Metodos básicos de arrays

Pop()  ==> Ele remove o ultimo elemento de um array;
Push() ==> Ele tem como finalidade adicionar um novo elemento ao array e sempre no final deste array;
shift() ==> Ele remove o primeiro elemento do array e desloca todos os outros elementos para o indice inferior.
unshifit() ==> Ele adiciona um novo elemento ao array no inicio

*/


//==> Usos ==> Pop();
/* let eltetrodomesticos = [
  'tv',
  'geladeira',
  'fogao',
  'microondas'
];
console.log(eltetrodomesticos.pop()); */

//==> Usos ==> Push();
/*  let eletrodomesticos = [
    'Televisão',
    'Geladeira',
    'Fogão',
    'Microondas' 
];
console.log('Sem o push..: ', eletrodomesticos);
console.log(eletrodomesticos.push('Cafeteira'));
console.log('Com o push...: ',  eletrodomesticos);  */

//==> Usos ==> Shift();

/* let eletrodomesticos = [
    'Televisão',
    'Geladeira',
    'Fogão',
    'Microondas' 
];
console.log('Sem o shift..: ', eletrodomesticos);
console.log(eletrodomesticos.shift());
console.log('Com o shift...: ',  eletrodomesticos);  */

// ==> unshift();
let eletrodomesticos = [
    'Televisão',
    'Geladeira',
    'Fogão',
    'Microondas' 
];

console.log('Sem o unshift..: ', eletrodomesticos);
console.log(eletrodomesticos.unshift('Batedeira'));
console.log('Com o unshift...: ',  eletrodomesticos);

