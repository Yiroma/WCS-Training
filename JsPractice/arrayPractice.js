const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
console.log("step 0 : ", mysteriousString); // iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f

// step1 : split the myserious string it into an array, so that each letter becomes an item (the separator should be an empty string).
const step1 = mysteriousString.split(""); // TODO : change this line
console.log("step 1 : ", step1); // [ 'i', 'u', '@', 'z', 'f', 'i', 'z', ')', '!', 'u', 'z', 'q', 'z', 'f', '!', 's', 'n', 'o', 'i', '?', '?', 'a', 'l', 'u', 't', 'a', 'r', 'g', 'n', 'o', 'c', 'z', 'e', '&', 'g', 'f', 'u', 'z', 'y', 'a', 'f', 'z', 'y', 'g', 'f', 'z', 'm', 'g', 'f', 'u', '%', 'f' ]

// step2 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0 !)
const step2 = step1.slice(14, 31); // TODO : change this line
console.log("step 2 : ", step2); // [ '!', 's', 'n', 'o', 'i', '?', '?', 'a', 'l', 'u', 't', 'a', 'r', 'g', 'n', 'o', 'c' ]

// step3 : Splice the array to replace 2 elements from index 5 with only one element : the letter 't'
step2.splice(5, 2, "t");
const step3 = step2.slice(); // making a copy
// TODO : call splice on step3 with the correct arguments
// step3.splice(...)
console.log("step 3 : ", step3); // [ '!', 's', 'n', 'o', 'i', 't', 'a', 'l', 'u', 't', 'a', 'r', 'g', 'n', 'o', 'c' ]

// step4 : reverse the array
const step4 = step3.reverse(); // TODO : change this line
console.log("step 4 : ", step4); // [ 'c', 'o', 'n', 'g', 'r', 'a', 't', 'u', 'l', 'a', 't', 'i', 'o', 'n', 's', '!' ]

// step5 : each element of the array back into a string (the separator should be an empty string)
const step5 = step4.join(""); // TODO : change this line
console.log("step 5 : ", step5); // congratulations!
