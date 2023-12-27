// [EN] Welcome to Decode, your mission is to decode the full message. Good luck
// [FR] Bienvenue dans Decode, votre mission est de décoder le message complet. Bonne chance !

// [EN] EX 01 -  Use a loop to remove the 'X' and use console.log to reveal the message
// [FR] EX 01 - Utiliser une boucle pour supprimer le "X" et utiliser console.log pour révéler le message
let hiddenMessage = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  ",",
  "X",
  " ",
  "X",
];

// TODO Your code goes here
for (let i = hiddenMessage.length - 1; i >= 0; i--) {
  if (hiddenMessage[i] === "X") {
    hiddenMessage.splice(i, 1);
  }
}
console.log(hiddenMessage.join(""));

// [EN] EX 02 - Remove the 'X' and the even numbers
// Hint: As this is a string you should find a way to convert into an array.
// [FR] EX 02 - Supprimez le "X" et les nombres pairs
// Indice : comme il s'agit d'une chaîne de caractères, vous devez trouver un moyen de la convertir en tableau.

const hiddenCode =
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";

// TODO Your code goes here
const charArray = hiddenCode.split("");
console.log(charArray);
const filteredArray = [];
console.log(filteredArray);

for (let i = 0; i < charArray.length; i++) {
  const char = charArray[i];
  if (char !== "X" && parseInt(char) % 2 !== 0) {
    filteredArray.push(char);
  }
}
console.log(filteredArray.join(""));
