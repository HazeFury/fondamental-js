// --------------- LES VARIABLES ----------------------
// pour stocker une valeur dans une référence afin de l'utiliser dans mon programme

// Exemple théorique
// const VARIALBE = VALEUR
// let VARIALBE = VALEUR

let a = "toto"; // la valeur peut changer
const b = "titi"; // la valeur ne changera pas

// ---------------  LES FONCTIONS ----------------------
// suite d'instruction (de code) qu'on enveloppe dans une référence afin de s'en reservir plus tard
// dans mon programme

// Exemple théorique
// function NOM_DE_LA_FONCTION() {
//   LE CODE QUE JE VEUX EXECUTER
//  }

// Exemple 1
function helloWorld() {
  console.log("hello world");
}

helloWorld("Marco");
//-----------------------------

// Exemple 2
function sayhello(name) {
  return "hello " + name;
}

console.log(sayhello("Marco"));
//-----------------------------

// Exemple 3
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
//-----------------------------

// Exemple 4
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("ce nombre est pair");
  } else {
    console.log("ce nombre est impair");
  }
}

evenOrOdd(20);
evenOrOdd(57);
//-----------------------------

// Exemple 5
function counter(text) {
  return text.length;
}
// console.log(counter("Thomas"));

// ----------------------   LES BOUCLES   ------------------------
// permet de répéter un instruction tant qu'une condition n'est pas atteinte

// Exemple théorique
// for (VARIABLE POUR ITERER ; CONDITION DE SORTIE ; INCREMENTATION) {
//  ...l'instruction que je veux répéter...
//  }

// Exemple 1
for (let i = 0; i <= 9; i++) {
  console.log(i); // va afficher dans la console les chiffre de 0 à 9
}

// Exemple 2
const array = [1, 2, 3, 4, 5];

for (let a = 0; a < array.length; a++) {
  console.log(array[a] * 2); // fais un boucle sur chaque éléments de mon tableau
  //et affiche dans la console chaque nombre multiplié par 2
}
