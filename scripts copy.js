"use strict";
// // Declarações de variáveis
// var n1 = 0; // declara uma variável de escopo global.
// let n2 = 0; // variável local de escopo de bloco.
// const n3 = 0; // tem escopo de bloco. Valor não pode ser alterado, mas se for um objeto ou matriz, as propriedades poderão ser atualizadas ou removidas.

// // Regras de nomenclatura
// let minhaVariavel; // nomes compostos usar o estilo camelCase
// let soma; // começar com a letra minúscula
// let soma2; // pode usar números, mas sem ser o primeiro caracter
// // evitar usar caracteres especiais, por exemplo: ;:'"!@#$%ç^&*()
// let counter; // usar palavras descritivas
// const calcularMedia = () => {}; // para funções usar verbos no infinitivo

// // Escopos

// function somar() {
//   let sum = 1 + 1;
//   return console.log(sum);
// }

// somar();
// console.log("---");
// // console.log(sum);    retorna um erro pois a variavel let é de escopo de bloco

// var text = "Bom dia!";
// function exibirTexto() {
//   return console.log(text);
// }

// exibirTexto();
// console.log("---");
// console.log(text);

// // Tipos de Dados
// let number = 123;
// let boolean = 1; // ou 0
// let BigInt = 23568273658736485763872657636255475237546237645762535423; // apenas um ideia
// let undefined1;
// console.log(undefined1);
// let notANumber = 1 / "b";
// console.log(notANumber);
// let string = "Escola";
// let array = [1, 2, 5, 3, 4];
// let carroObject = {
//   rodas: 4,
//   cor: "azul",
//   portas: 4,
// };
// console.log(carroObject);
// console.log(typeof(carroObject));
// console.log(null);

// // Tipos de conversão
// // Explicita

// let numbers = 123
// let numbersString = numbers.toString()
// console.log(numbersString);
// console.log(parseFloat(numbersString));
// console.log(parseInt(numbersString));

// // Estruturas de dados
// // Arrays
// const receitaBolo = [
//   "farinha",
//   "chocolate",
//   "açucar",
//   "fermento",
//   "leite",
//   "ovos",
// ]; // todo array começa a conta apartir do 0, então a farinha é o elemento 0 e os ovos são o elemento 5

// // Map
// // Principal diferença entre um Map e Object, é que no Map as chaves podem ser qualquer coisa e mais facil descobrir o tamanho de elementos dele
// const sonsAnimais = new Map();
// sonsAnimais.set("cachorro", "auu au au auuu");
// sonsAnimais.set("gato", "miaau miauuu miau");
// console.log(sonsAnimais.size);
// console.log(sonsAnimais.get("cachorro"));
// console.log(sonsAnimais.get("gato"));
// console.log(sonsAnimais.has("passarinho"));
// sonsAnimais.delete("cachorro");
// console.log(sonsAnimais.has("cachorro"));
// sonsAnimais.clear();
// console.log(sonsAnimais.size);

// Comparação de igualdade
// console.log(1 == 1);        // São iguais
// console.log(1 == "1");      // São iguais
// console.log(1 == 2);        // Não são iguais

// console.log(1 === 1);       // São iguais
// console.log(1 === "1");     // Não são iguais
// console.log(1 === 2);       // Não são iguais

// // Loops e Interações
// const receitaBolo = [
//   "farinha",
//   "chocolate",
//   "açucar",
//   "fermento",
//   "leite",
//   "ovos",
// ];

// for (let i = 0; i < receitaBolo.length; i++) {
//   console.log(receitaBolo[i]);
// }
// // (inicializacao; condição; atualização)

// let counter = "";
// do {
//   counter += 1;
//   console.log(counter);
// } while (counter < 100000);

// let n = 0;
// while (n < 20) {
//   n++;
// }
// console.log(n);

// const carro = {cor: "azul", rodas: 4, portas: 2}
// for (const property in carro) {
//   console.log(property + ": " + carro[property]);
// }

// console.log("----");

// for (const element of receitaBolo) {
//   console.log(element);
// }

// console.log("----");

// Controle de Fluxo

// Condicional
// let n = 1;
// if (n < 2) {
//   console.log(true);
// }

// if (n === 2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let doce = "chocolate"
// let salgado = "coxinha"

// switch (doce) {
//   case "chocolate":
//     console.log("tem chocolate!");
//     break
//   default:
//     console.log("error");
//     break
// }

// // Exception Handling
// try {
//   console.log("Start of try runs"); // (1) <--

//   lalala; // error, variable is not defined!

//   console.log("End of try (never reached)"); // (2)
// } catch (err) {
//   console.log(`Error has occurred!`); // (3) <--

//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }

// console.log("---------------");

// let json = "{ bad json }";

// try {
//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log(user.name); // doesn't work
// } catch (err) {
//   // ...the execution jumps here
//   console.log(
//     "Our apologies, the data has errors, we'll try to request it one more time."
//   );
//   console.log(err.name);
//   console.log(err.message);
// }

// console.log("---------------");

// let json2 = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json2); // <-- no errors

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   console.log(user.name);
// } catch (err) {
//   console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
// } finally {
//   console.log("Finally executa independente do resultado");
// }

// Expressões e Operadores

// // Atribuição
// let x = 10

// // // Comparação
// console.log(10 > 20);     // Maior que
// console.log(10 < 20);     // Menor que
// console.log(20 >= 20);    // Maior ou igual a
// console.log(21 >= 20);
// console.log(10 <= 20);    // Menor ou igual a
// console.log(20 <= 20);
// console.log(20 == 20);    // É igual a
// console.log(21 == 20);
// console.log(10 === 10);   // É totalmente igual a
// console.log(10 === "10");
// console.log(10 == "10");
// console.log(10 != "10");  // É igual a (invertendo o resultado)
// console.log(10 !== "10");

// // // Aritmético

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 * 1);
// console.log(4 / 2);
// console.log(1 ** 2);    // Exponenciação
// console.log(10 % 2);    // Módulo

// let n = 1
// console.log(++n);       // Incremento
// console.log(--n);       // Decremento

// // Lógicos

// console.log(true && true);
// console.log(true && false);

// console.log(true || true);
// console.log(true || false);

// // // Strings

// console.log("Banana " + "pera.");

// let fruta = "prata"
// console.log(`Banana ${fruta}.`);

// // // Ternário
// console.log(true ? "verdadeiro" : "falso");
// console.log(false ? "verdadeiro" : "falso");

// // // Funções

// // Definindo e chamando

// function calcularMedia(a, b, c) {
//   return console.log((a + b + c) / 3);
// } // Metodo 1: funcao padrao com nome
// const exibirNome = (nome) => {
//   // Metodo 2: arrow function send atribuida a uma constante
//   return console.log("Olá, " + nome + "!");
// };
// // () => {} arrow function anonima
// // function () {} function anonima

// calcularMedia(10, 9, 8);
// exibirNome("Leandro");

// // Parâmetros
// //() => {} parametros são o q é passado dentro dos ()
// // pode ter 2 tipos o Default: (a, b, nome) e  Rest: (a, b, ...args)

// // IIFE
// // é uma função que roda após ser definida
// (function () {
//   console.log("Banana");
// })()

// // Assíncrono
// setTimeout(function () {
//   console.log("Banana");
// }, 1000); // executa uma função apos um tempo determinado

// let n = 0;
// let timerId = setInterval(function () {
//   console.log(++n);
// }, 1000); // executa uma função a cada tempo determinado

// // Depois de 5 segundos ele para
// setTimeout(() => { clearInterval(timerId) }, 5000);

