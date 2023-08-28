/*
let a = 'aspas simples';
let b = "aspas duplas";
let c = `crase`;

console.log(a);
console.log(b);
console.log(c);
*/

/*
let nome = prompt("Qual seu nome?");
let cor = prompt("Qual sua cor favorita?");

console.log('Seu nome é ' + nome + 'sua cor favorita é ' + cor);
*/

/*
//retornar o numero de caractéres em uma string;
console.log(nome.length);
//retornar a string convertida para minusculo;
console.log(nome.toLowerCase());
//retorna a string convertida para maiusculo;
console.log(nome.toUpperCase());
//retira os espaços ao redor da string;
console.log(nome.trim());
//método para buscar determinado texto dentro de uma string;
console.log(nome.includes('cenoura'));

console.log(nome.replaceAll('cenoura','batata'));
*/

//Exercício 2
/*
let frase = prompt('Escreva uma frase');

console.log(frase.toUpperCase());

console.log(frase.replaceAll("o", "i"));

console.log(frase.length);
*/

//arrays
/*
let listaDeExercicios = ['elevação lateral' , 'supino' , 'voador'];

console.log(listaDeExercicios[0]);
console.log(listaDeExercicios[1]);
console.log(listaDeExercicios[2]);
console.log(listaDeExercicios);
*/

//Exercício 3
/*
let listaCachorro = ['pug' , 'pitbull' , 'pastor alemão' , 'buldogue' , 'labrador'];
let numero = Number(prompt('Digite um número de 0  4'));

console.log(listaCachorro[numero]);
*/

/*
const pokemon = ['bulbassauro' , 'squirtle' , 'charmander'];

console.log(pokemon);
console.log(pokemon[0].length);
*/

/*
const seriesBoas = ['Breaking Bad' , 'Brooklyn Nine-Nine'];
console.log(seriesBoas.includes('Breaking Bad'));
console.log(seriesBoas.includes('Game of Thrones')); //false
*/

/*
let instrumentos = ['violão' , 'guitarra' , 'bateria'];
console.log(instrumentos);

instrumentos.push('teclado');
console.log(instrumentos);
instrumentos.pop();
console.log(instrumentos);
//instrumenntos.pop();
console.log(instrumentos);
instrumentos.splice(2, 2);
console.log(instrumentos);
*/

//Exercício 4
let numeros = [1,2,3,4,5,6];
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);

console.log(numeros.length);
numeros.push(7);
console.log(numeros);
numeros.splice(3, 2);
console.log(numeros);
console.log(numeros.length);
