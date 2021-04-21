//Escopo Aninhado Fonte. Eloquent JS

/* O JavaScript não se distingue apenas pela diferenciação entre variáveis locais e globais. Funções também podem ser criadas dentro de outras funções, criando vários níveis de “localidades”.

Por exemplo, a função landscape possui duas funções, flat e mountain, declaradas dentro do seu corpo: */


var landscape = function () {
  var result = "";
  var flat = function (size) {
    for (var count = 0; count < size; count++) result += "";
  };
  var mountain = function (size) {
    result += "/";
    for (var count = 0; count < size; count++) result += "'";
    result += "\\_";
  };
  flat(10);
  mountain(10);
  flat(10);
  mountain(10);
  flat(10);
  return result;
};
console.log(landscape()); // → _/''''\__/'\

