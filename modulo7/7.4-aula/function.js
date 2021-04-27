/**
 * arquivo: funcoes.js
 * descrição: explicação de como podemos usar Funções em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 27/04/2021
 */

// O que são Funções: Responsável por executar uma determinada tarefa!
//Exemplo:

/*Tarefas de uma cafeteira :
1 - Ligar cafeteira;
2 - Desligar cafeteira;
3 - Esquentar agua;
4 - Saída do café. */

// ==> Função anônima

/* 
function mostrarMensagem() {
  return console.log('Parabéns! Você chegou ao final do treinamento de JavaScript');
}
mostrarMensagem(); */


// ==> Exemplo 2 = Nomenclatura das funções seguem um padrão camel case

/* function multiplicarNumeros(n1, n2) {
  return n1 * n2
}
let resultadoFinal = multiplicarNumeros(3,2);
console.log(resultadoFinal)
 */
//==>  Exemplo 3

let numeros = [ 1,2,3,4,5,6,7,8,9,10];

function mostrarNumerosImpares(){
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      console.log(numeros[i]);
    }
  }
  
}
mostrarNumerosImpares();

