/**
 * arquivo: objetosJavaScript.js
 * descrição: explicação de como podemos usar Objetos em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 26/04/2021
 */

// ==> Objetos
// Usos da chave indica a criação de um objeto, neste caso, objeto pessoa.
// Muito importante o conceito de objetos. Transformar objetos da vida real em codigo. Exemplo 1:
/* let pessoa = {
    nome: 'Joseane',
    sobrenome: 'Guedes',
    idade: 39,
    profissao: 'Estudante',
    empresa: 'Freela'
};
console.log(pessoa); */
//Obter a profissao atraves de notação:


// Brackets (Colchetes) vs Dot (ponto) notation
//Exemplo 2:
let pessoa = {
    nome: 'Joseane',
    sobrenome: 'Guedes',
    idade: 39,
    profissao: 'Estudante',
    empresa: 'Freela'
};
//let listarProfissao = pessoa.profissao; ==> exemplo de notação dot
let listarProfissao = pessoa['profissao']; // Uso raro dos brackets
let idadeFuncionario = pessoa.idade; // Uso mais comum dos dots ou pontos
console.log(idadeFuncionario );