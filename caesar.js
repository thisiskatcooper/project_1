// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// create alphabet array
const standardAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // convert input to lowercase
    let lowercaseInput = input.toLowerCase();

    // create variables for result and codedIndex
    let secretMessage = "";
    let characterIndex = 0;

    // return false if no shift value, = 0, < -25, or > 25
    if (shift < -25 || shift > 25 || !shift || shift === 0) {
      return false;
    }

    // loop through letters of message and compare to characters in alphabet
    for (let letters in lowercaseInput) {
      let letter = lowercaseInput[letters];
      standardAlphabet.find((character) => {
        // compare characters of alphabet to letters of message
        if (character === letter) {
          // if encode: add shift to character index, decode: subtract from character index
          encode
            ? (characterIndex = standardAlphabet.indexOf(character) + shift)
            : (characterIndex = standardAlphabet.indexOf(letter) - shift);
          // wrap if index is >= 26 or <= -1 (beyond the range of alphabet)
          if (characterIndex >= 26) {
            characterIndex -= 26;
          } else if (characterIndex <= -1) {
            characterIndex += 26;
          }
          secretMessage += standardAlphabet[characterIndex];
        }
      });
      // if character != letter of alphabet, return character as it is
      if (standardAlphabet.indexOf(letter) === -1) secretMessage += letter;
    }
    return secretMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
