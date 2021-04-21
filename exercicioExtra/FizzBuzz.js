//FizzBuzz JavaScript exercise and solution
/*Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se não for múltiplo de nada, retorna o número */
//for (var i = 1; i <= 20; i++)
// for (var i = 1; i <= n; i++)
/*for (var i = 1; i <= 20; i++)
  {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
*/
/*
for (var i = 1; i <= 20; i++) {
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}
*/
// Fonte: https://www.w3schools.com/jsref/jsref_operators.asp
//x=0;
//while(x++<15)
//console.log((x%3?"":"fizz")+(x%5?"":"buzz"))

var i;
for (i = 1; i <= 20; i++) {
  if (i % 15 == 0) {
    console.log('Fizz Buzz')
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }

}