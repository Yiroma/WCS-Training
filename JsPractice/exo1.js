// Ecrire une variable contenant ton age (number) et une constante contenant ta date de naissance (string)
let age = 34;
const birthday = "19 septembre 1988";

// Ecrire un code qui t'affiche ton prénom si ton âge est pair (... Quoi ? Pourquoi pas ?!)
const checkAge = () => {
  // methode 1
  if (age % 2 == 0) {
    console.log("Romaric");
  } else {
    console.log("it's not pair");
  }

  // methode 2 (TERNAIRE)
  age % 2 == 0 ? console.log("Romaric") : console.log("it's not pair");
};

checkAge();

// Ecrire un code qui t'affiche ton prénom si ton âge est inférieur à 27, et ton nom dans le cas contraire
const checkAge2 = () => {
  // methode 1
  if (age < 27) {
    console.log("Romaric");
  } else {
    console.log("YI");
  }

  // methode 2 (TERNAIRE)
  age < 27 ? console.log("Romaric") : console.log("YI");
};

checkAge2();

// Ecrire un code qui me copie 10 lignes de "Je ne copierai pas du code bêtement" (oui, c'est du recyclage d'exos :p)
// METHODE 1
let i = 0;

while (i < 10) {
  console.log(`Je ne copierai pas du code bêtement`);
  i++;
}

// METHODE 2 (qui est mieux ;))
for (let j = 0; j < 10; j++) {
  console.log("JE NE COPIERAI PAS DU CODE BETEMENT");
}

// Ecrire une fonction getToto qui me renvoie la string "toto"
function getToto() {
  console.log("toto");
}

getToto();

// Ecrire une fonction getTotoArrow qui me renvoie la string "toto", en utilisant la syntaxe fléchée
const getTotoArrow = () => {
  console.log("toto");
};

getTotoArrow();

// Ecrire une fonction d6 qui me renvoie un nombre alétoire entre 1 et 6
function d6(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(d6(1, 7));

// Ecrire une fonction qui me renvoie la somme de deux nombres passés en paramètres
function sum(a, b) {
  return a + b;
}
console.log(sum(7, 5));

// Ecris un objet littéral (sans POO) qui te représente: nom, age, sexe, loisirs, ton langage de prédilection, une fonction pour te présenter, une fonction qui récite ton elevator speech
const avatar = {
  firstName: "Romaric",
  lastName: "YI",
  age: 34,
  sexe: "homme",
  loisirs: ["Jeux vidéos", "Séries", "dessin", "Web-design"],
  language: ["JavaScript", "React", "Express"],
  greet() {
    return `Bonjour, Je suis ${this.firstName} ${this.lastName}, j'ai ${this.age} ans. J'aime les activité suivant: ${this.loisirs} et je code avec ${this.language}.`;
  },
  elevator() {
    return `I'm tired. But i don't give up !`;
  },
};

console.log(avatar.greet());
console.log(avatar.elevator());

/* Ecris une fonction fizzBuzz(num) qui te renvoie:
  - "fizz" si num est un multiple de 3
  - "buzz" si num est un multiple de 5
  - "fizzbuzz" si num est un multiple de 3 et de 5
  - num dans les autres cas
*/
const fizzBuzz = (num) => {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzBuzz !!!");
  } else if (num % 3 == 0) {
    console.log("fizz...");
  } else if (num % 5 == 0) {
    console.log("Buzz...");
  } else {
    console.log(`le numéro n'est pas un multiple de 3 et/ou de 5`);
  }
};

fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(15);
fizzBuzz(28);
