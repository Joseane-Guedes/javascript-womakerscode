/**
 * arquivo: iteracaoObjetos.js
 * descrição: explicação de como podemos usar Interações de Objetos
 *  em JavaScript
 * author: Glaucia Lemos - twitter: glaucia_lemos86
 * data: 26/04/2021
 */

// ==> For... in ==> O laço muito bom para usar com formularios. 
/* Observação: Muito boa pratica de programação. Deixando o codigo muito mais elegante, muito mais eficiente,  muito mais rapido e muito mais facil de ler!! */

funcionario = {
    nome: 'Josie',
    sobrenome: 'Guedes',
    profissao: 'Estudante',
    idade: 34,
    empresa: 'Microsoft',
    ativa: true
};
for (let listarFuncionario in funcionario) {
    console.log(funcionario[listarFuncionario]);
};
// O que este codigo pretender fazer? Vai listar todo as propriedades relacionadas ao nosso objeto funcionarios. 


// ==> If... in

funcionario = {
    nome: 'Josie',
    sobrenome: 'Guedes',
    profissao: 'Estudante',
    idade: 34,
    empresa: 'Microsoft',
    ativa: true
};

if ('profissao' in funcionario) {
    console.log("A key profissão existe no objeto Funcionario");
}