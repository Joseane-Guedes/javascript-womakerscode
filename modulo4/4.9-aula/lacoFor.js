/**
 * arquivo: lacoFor.js
 * descrição: explicação de como podemos usar laço For em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * 
 */

// Laço For

//https://www.w3schools.com/js/js_loop_for.asp

/* The For Loop
The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
} */

/* let numeros = [1,2,3]
for (let i = 0; i <= numeros.length; i++)
{
  console.log(numeros[i]);
} */

/* for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
} */
/* //Obs: Sempre que possível, evite usar o laço while e do-while. Prefira usar o laço for porque é mais rapido,simples e performatico
for(let i=1; i <= 10; i++) {
    console.log('O número é...: ', i);
} */



// Outro ex: laço For

// [] ==> O uso de colchetes indica que estamos trabalhando com Array!
// length => Significa fazer leitura de quantos itens temos dentro de uma array!
/* let frutas = ["Maçã", "Banana", "Manga", "Laranja", "Abacaxi"];

for(let i=0; i < frutas.length; i++) {
    console.log('A fruta é...: ', frutas[i]);
} */

let familia = ["Mãe", "Pai", "irmão", "irmã", "gato"];

for (let i = 0; i < familia.length; i++) {
  console.log('O membro da familia é...: ', familia[i]);
}