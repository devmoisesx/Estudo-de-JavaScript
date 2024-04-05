// Declarações de variáveis
var n1 = 0; // declara uma variável de escopo global.
let n2 = 0; // variável local de escopo de bloco.
const n3 = 0; // tem escopo de bloco. Valor não pode ser alterado, mas se for um objeto ou matriz, as propriedades poderão ser atualizadas ou removidas.

// Regras de nomenclatura
let minhaVariavel; // nomes compostos usar o estilo camelCase
let soma; // começar com a letra minúscula
let soma2; // pode usar números, mas sem ser o primeiro caracter
// evitar usar caracteres especiais, por exemplo: ;:'"!@#$%ç^&*()
let counter; // usar palavras descritivas
const calcularMedia = () => {}; // para funções usar verbos no infinitivo

// Escopos

function somar() {
  let sum = 1 + 1;
  return console.log(sum);
}

somar();
console.log("---");
// console.log(sum);    retorna um erro pois a variavel let é de escopo de bloco

var text = "Bom dia!";
function exibirTexto() {
  return console.log(text);
}

exibirTexto();
console.log("---");
console.log(text);

// Tipos de Dados
let number = 123;
let boolean = 1; // ou 0
let BigInt = 23568273658736485763872657636255475237546237645762535423; // apenas um ideia
let undefined1;
console.log(undefined1);
let notANumber = 1 / "b";
console.log(notANumber);
let string = "Escola";
let array = [1, 2, 5, 3, 4];
let carroObject = {
  rodas: 4,
  cor: "azul",
  portas: 4,
};
console.log(carroObject);
console.log(typeof(carroObject));
console.log(null);

// Tipos de conversão
// Explicita

let numbers = 123
let numbersString = numbers.toString()
console.log(numbersString);
console.log(parseFloat(numbersString));
console.log(parseInt(numbersString));