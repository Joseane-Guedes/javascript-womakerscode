/*arquivo: parametrosEscopos.js
 * descrição: explicação de como podemos usar Parâmetros e Escopos
 * em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 27/04/2021
 */

//Hoisting ==> para o topo da função ==> tema muito mais avançado.

/* 
Uma das vantagens do javascript é colocar declarações de função na memoria antes de executar qualquer seguimento de codigo. Isso vai nos permitir usar uma funcao antes de declara-la em dentro do meu codigo. 
 */

// ==> Exemplo1

/* let animalEstimacao;
console.log(animalEstimacao);
animalEstimacao = 'Jake'; */


//Exemplo2
function mostrarNome() {
  console.log('Oi! Tudo bem? Me chamo...: ' + nome);
};

let nome;

mostrarNome();

nome = 'Glaucia Lemos';