const myArray = ["hello", true, "world", 42];
console.log(myArray.slice());
console.log(myArray.slice(1));
console.log(myArray.slice(1, 3));
console.log(myArray.slice(-1));

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
fireSigns.splice(2, 1, "♐");

// the line below is for testing, don't touch it :)
console.log(fireSigns[fireSigns.length - 1] === "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁 [EN] Remove the last element of an array
      Sagittarius should not be on earth Signs, please remove Sagittarius from the array, and verify the result.
*/
/* 🏁 [FR] Supprimer le dernier élément d'un tableau
      Sagittarius ne devrait pas être sur les Signes de la Terre, veuillez supprimer Sagittarius du tableau, et vérifiez le résultat.
*/

// TODO ✒️  Write your code here
earthSigns.splice(3, 1);

// the line below is for testing, don't touch it :)
console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁 [EN] Remove one element at the begining of an array
      Pisces should not be on air Signs, please remove Pisces from the array, and verify the result.
*/
/* 🏁 [FR] Enlever un élément au début d'un tableau
      Les Poissons ne devraient pas être sur les Signes d'air, veuillez retirer les Poissons du tableau, et vérifiez le résultat.
*/

// TODO ✒️ Write your code here
airSigns.splice(0, 1);

// the line below is for testing, don't touch it :)
console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

/*  🏁 [EN] Add one element at the beginning of an array
    Cancer is missing from water signs please add it at the BEGINNING of the array and verify the result.
*/
/*  🏁 [FR] Ajouter un élément au début d'un tableau
    Le cancer est absent des signes d'eau, veuillez l'ajouter au DÉBUT du tableau et vérifiez le résultat.
*/

// TODO ✒️ Write your code here
waterSigns.splice(0, 0, "♋");

// the line below is for testing, don't touch it :)
console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");
