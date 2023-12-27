const fruits = ["Kiwi", "Apple", "Pineapple"];

console.log(fruits); // check all array
console.log(fruits[0]); // Will print "Kiwi"
console.log(fruits[1]); // Will print "Apple"
console.log(fruits[2]); // Will print "Pineapple'

fruits[0] = "Banana"; // Will change the first element to Banana

console.log(fruits); // check all array. The first element are changed
console.log(fruits[0]); // Will print "Banana"

const animals = ["Dog", "Cat", "Turtle", "Bird"];
animals.push("monkey"); // Add element on last
animals.unshift("rat"); // Add element on first
animals.pop(); // Delete element on last
animals.shift(); // Delete element on first

// [EN] Here are our Astro signs provided as a string.
// [FR] Voici nos signes astro fournis sous forme de chaîne.

const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;

// [EN] In Western Astrology there are 12 signs, organized by Earth Elements (Eart, Water, Air, Fire)
// You are going to manipulate the following arrays along with this challenge:
// [FR] Dans l'astrologie occidentale, il y a 12 signes, organisés par les éléments de la Terre (Terre, Eau, Air, Feu).
// Vous allez manipuler les tableaux suivants dans le cadre de ce défi :

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [pisces, gemini, libra, aquarius];
const waterSigns = [scorpio, pisces];

/*  🏁 [EN] Add one final element to an array 
    Sagittarius is missing from fire signs please add it at the END of the array and verify the result.
*/
/*  🏁 [FR] Ajouter un dernier élément à un tableau 
    Sagittarius est absent des signes de feu, veuillez l'ajouter à la fin du tableau et vérifiez le résultat à la fin du tableau et vérifiez le résultat.
*/

// TODO ✒️ Write your code here
fireSigns.push("♐");

// the line below is for testing, don't touch it :)
console.log(fireSigns[fireSigns.length - 1] === "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁 [EN] Remove the last element of an array
      Sagittarius should not be on earth Signs, please remove Sagittarius from the array, and verify the result.
*/
/* 🏁 [FR] Supprimer le dernier élément d'un tableau
      Sagittarius ne devrait pas être sur les Signes de la Terre, veuillez supprimer Sagittarius du tableau, et vérifiez le résultat.
*/

// TODO ✒️  Write your code here
earthSigns.pop("♐");

// the line below is for testing, don't touch it :)
console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁 [EN] Remove one element at the begining of an array
      Pisces should not be on air Signs, please remove Pisces from the array, and verify the result.
*/
/* 🏁 [FR] Enlever un élément au début d'un tableau
      Les Poissons ne devraient pas être sur les Signes d'air, veuillez retirer les Poissons du tableau, et vérifiez le résultat.
*/

// TODO ✒️ Write your code here
airSigns.shift("♓︎");

// the line below is for testing, don't touch it :)
console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

/*  🏁 [EN] Add one element at the beginning of an array
    Cancer is missing from water signs please add it at the BEGINNING of the array and verify the result.
*/
/*  🏁 [FR] Ajouter un élément au début d'un tableau
    Le cancer est absent des signes d'eau, veuillez l'ajouter au DÉBUT du tableau et vérifiez le résultat.
*/

// TODO ✒️ Write your code here
waterSigns.unshift("♋");

// the line below is for testing, don't touch it :)
console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");

const animals2 = ["Lion", "Monkey", "Tiger"];
console.log(animals2.includes("Lion")); // true

function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
}

console.log(arrayIncludes(["Lion", "Fish"], "Lion"));
// should be true
console.log(arrayIncludes(["Fish", "Cat", "Dog"], "Cat"));
// should be true
console.log(arrayIncludes(["Fish", "Cat", "Dog"], "Parrot"));
// should be false

const fruits2 = ["Kiwi", "Apple", "Pineapple"];
const fruits2String = fruits2.join();
console.log(fruits2String);
// Kiwi,Apple,Pineapple

const fruits2String2 = fruits2.join("-");
console.log(fruits2String2);
// Kiwi-Apple-Pineapple

const fruits2String3 = fruits2.join("*");
console.log(fruits2String3);
// Kiwi*Apple*Pineapple

const withUnderscores = "Wild_Code_School";
const withSpaces = withUnderscores.split("_").join(" ");
console.log(withSpaces);
