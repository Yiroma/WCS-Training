// Je suis un commentaire simple.

/* Je suis un commentaire Multi-Ligne
car je suis sur plusieurs lignes. */

/**
 * Je suis un
 * commentaire
 * pour faire de la
 * documentation.
 */

console.log("Hello Romaric ;)");

console.log("Je suis le console.log");
console.info("Je suis le console.info");
console.error("Je suis le console.error");
console.warn("Je suis le console.warn");

// STRICTEMENT EGAL (valeurs ET types)
1 === 1; // true
1 === "1"; // false
"Bob" === "Bob"; // true
"Bob" === "bob"; // false

// EGAL (valeur uniquement)
1 == 1; // true
1 == "1"; // true
1 == 2; // false
1 == "Bob"; // false

// DIFFERENT (valeur uniquement)
1 != 2; // true
1 != "1"; // false

// DIFFERENT (valeur ou type)
1 !== "1"; // true
1 !== 1; // false

// SUPPERIEUR à || SUPPERIEUR OU EGAL à
2 > 1; // true
2 >= 2; // true

// INFERIEUR à || INFERIEUR OU EGAL à
2 < 3; // true
2 <= 2; // true

const firstName = "David";
const lastName = "Bruno";

let bio = "Hi, I'm David Bruno from SF, I like to cook and meet new people.";

let imgProfile = "http://www.go.com/davif.png";

let city = "San Francisco";

let followers = 109;
let following = 200;

following++;

console.log(firstName);
console.log(lastName);
console.log(bio);
console.log(imgProfile);
console.log(following);

// INSTRUCTIONS CONDITIONNELLES
const person = "Not Bob";

if (person === "Bob") {
  console.log("Hello Bob!");
} else {
  console.log("You're not Bob, go away !");
}

// PROMPT
const password = prompt("Password ?");

if (password === "secret") {
  console.log("Welcome !👋");
} else {
  console.log("Wrong password !❌");
}

// ELSE IF

const age = parseInt(prompt("How old are you ?"));

if (age <= 3) {
  console.log("Hello, baby !🍼");
} else if (age < 18) {
  console.log("Hi !👋");
} else if (age < 100) {
  console.log("Greetings !🖖");
} else {
  console.log("Wow...😲");
}

// EXERCICE VARIABLE

const a = 1;
const b = 2;
const c = 3;

if (a === b && a === c && b === c) {
  console.log("Les trois variables sont identiques");
} else if (a === b || a === c || b === c) {
  console.log("Deux des variables sont identiques");
} else {
  console.log("Toutes les variables sont différentes");
}

// CONDITIONS IMBRIQUEE

const userName = prompt("what's your name ?");

if (userName === "Bob") {
  const userAge = parseInt(prompt("what's your age ?"));
  if (userAge === 30) {
    console.log("Welcome");
  } else {
    console.log("Go away !");
  }
} else {
  console.log("Go away !");
}

// SWITCH

const today = new Date().getDay();
console.log(today);

switch (today) {
  case 0:
    console.log("Dimanche");
    break;
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  default:
    console.log("Invalid date");
    break;
}

// LES TERNAIRES

pseudo = prompt("what's your name ? (Bob)");
pseudo === "Bob" ? console.log("Hello, Bob") : console.log("Go away !");

const animal = {
  name: "Lucky",
  species: "Cat",
  age: "3",
};

animal.name === "Lucky" ? console.log("Welcome Lucky !") : console.log("Wrong Cat detected !");

// PARAMETRES & ARGUMENTS D'UNE FONCTION

function sayHello(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

sayHello("Mickey", "Mouse");
sayHello("Romaric", "YI");
sayHello("Frederico", "Cassola");

// RETURN

function login(name, password) {
  if (name === "Bob" && password === "secret") {
    return true;
  } else {
    return false;
  }
}

let userName1 = prompt("What's your name?");
let userPassword1 = prompt("What's your password?");

if (login(userName1, userPassword1)) {
  console.log("Welcome!");
} else {
  console.log("Wrong credentials...");
}

// FONCTION FLECHEES

const sayHello2 = (name) => {
  return `Hello, ${name}`;
};

console.log(sayHello("Bob (encore)"));
