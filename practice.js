// Write a function that accepts a string as a parameter and return true if the string uses 50% alphabet, 
// and return false otherwise

const checkString = str => {
  const arr = str.split("");
  const map = {
    "a": true,
    "b": true,
    "c": true,
    "d": true,
    "e": true,
    "f": true,
    "g": true,
    "h": true,
    "i": true,
    "j": true,
    "k": true,
    "l": true,
    "m": true,
    "n": true,
    "o": true,
    "p": true,
    "q": true,
    "r": true,
    "s": true,
    "t": true,
    "u": true,
    "v": true,
    "w": true,
    "x": true,
    "y": true,
    "z": true
  };

  let alphaCount = 0;

  for (i = 0; i < arr.length; ++i) {
    let currentLetter = arr[i].toLowerCase();
    if (map[currentLetter]) {
      alphaCount += 1;
      map[currentLetter] = false;
    };
    if (alphaCount >= 13) return true; 
  }
  return false;
}


let myString = "aBCdefghijkl";
console.log(checkString(myString))
