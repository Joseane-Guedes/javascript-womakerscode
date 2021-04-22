/**
 * arquivo: lacoWhile.js
 * descrição: explicação de como podemos usar while e do-while em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 */

// while --> a condição será testada no início de cada iteração do loop
//https://www.w3schools.com/js/js_loop_while.asp
/* Syntax
while (condition) {
  // code block to be executed
} */

/* let i = 1;
while(i <= 10){
  console.log(i);
  i++;
} */

//The Do/While Loop
/* The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. */

/* Syntax
do {
  // code block to be executed
}
while (condition); */

/* let i = 0;
do {
  i = i + 1;
  console.log(i);
}
while (i < 10) */

// while --> a condição será testada no início de cada iteração do loop

/* let numeroInicial = 1;

while (numeroInicial <= 10) {
    console.log('O número é...: ', numeroInicial);
    numeroInicial++;
}  */

// do-while --> sempre será executado uma vez - em questão de performance esse laço é melhor.

let numeroInicial = 1;

do {
    console.log('O número é...: ', numeroInicial);
    numeroInicial++;
} while (numeroInicial <= 10); 
