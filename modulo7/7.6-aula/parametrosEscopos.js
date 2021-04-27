/**
 * arquivo: parametrosEscopos.js
 * descrição: explicação de como podemos usar Parâmetros e Escopos
 * em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 27/04/2021
 */

// ==> Function -> Parâmetros

/* function adicionarNumeros(n1,n2) {
  return n1 + n2;
 
}
  let resultadoFinal = adicionarNumeros(5,5);
  console.log(resultadoFinal); */


// Notas de aula:
/* Dependendo da forma como a gente trabalha com as variaveis dentro ou fora da função, a gente pode enfrentar quebras do nosso codigo. Entao qual seria a diferenca entra uma variavel global e variavel local? */

/* Escopo Global(variavel global)
 Definição: Ela é definida quando declaramos uma variável fora de qualquer função, assim ela se tornará acessível a qualquer parte da nossa aplicação(função). Ou seja, ela pode ser lida ou ate mesmo alterada! 
  */

// Escopo local (variavel local)
/* Sempre vai declarar dentro de uma função. Então, ela so fica acessivel somente a função onde ela foi declarada. */

// Exemplo2

//notas de aula: As vezes declarar uma variavel errada, sendo esse erro de variavel global ou variavel local voce pde enfrentar serios problemas de execucao do codigo. Esse problema é bem comum entre os desenvolvedores, inclusive entre os mais experientes. Esse tipo de erro é motivo desespero para varias pessoas dentro dos codigos. Na maioria das vezes é necessario apenas aprofundar os estudos em variaveis locais e globais.

// ==> Escopo Global

let localNascimento = 'Rio de Janeiro'; //uma variavel dizendo que nasci no RJ ==> variavel global = local de nascimento. Por que global? Porque esta fora da função. 

function mostrarLocalNascimento() { // ==> // Função anônima: nao recebe nenhum parametro dentro dela. 
    let localOndeMorei = 'Buenos Aires'; // ==> criei uma outra variavel de um local onde ja morei em 2015. ==> Variavel local que esta concentrada dentro de um função.
};

console.log(localNascimento);
