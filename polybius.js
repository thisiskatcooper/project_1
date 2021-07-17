// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// create three helper functions to obtain column value, row value,
// and combined total to be assigned to letters: 5 rows x 5 columns
// set variable equal to letters of standard alphabet
const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

// create function to set corresponding row number value for each letter
function rowNum(letter) {
  const letterIndex = standardAlphabet.indexOf(letter);
  // establish values for each letter's "row"
  let rowValue =
    letterIndex % 5 === 0
      ? Math.floor(letterIndex / 5)
      : Math.floor(letterIndex / 5) + 1;
  if (letterIndex === 0 || letterIndex === 5) {
    rowValue += 1;
    return rowValue;
  }
  return rowValue;
}

// create function to set corresponding column number value for each letter
function columnNum(letter) {
  let letterIndex = standardAlphabet.indexOf(letter);
  // merge j with i and move k one to the left
  if (letter === "j" || letter === "k") {
    letterIndex--;
  }
  // establish values for each letter's "column"
  let columnValue =
    letterIndex <= 10
      ? (letterIndex % 5) + 1
      : letterIndex % 5 === 0
      ? letterIndex % 5
      : letterIndex % 5;
  return columnValue;
}

// create function to combine column and row values for coded number pair
function combinedNum(letter) {
  const columnNumber = columnNum(letter);
  const rowNumber = rowNum(letter);
  let combinedNumber = `${columnNumber}${rowNumber}`;
  return combinedNumber;
}

// create helper function to convert words to numberPair values
function convertWordToNumberPair(word) {
  // take numerical input to convert to letters
  // isolate number pairs
  let result = "";
  let newWord = word;
  for (let i = 0; i < word.length; i += 2) {
    const numberPair = `${word[i]}${word[i + 1]}`;
    // compare letters in standardAlphabet to converted numberPairs
    for (let character of standardAlphabet) {
      let convertedLetter = combinedNum(character);
      console.log(convertedLetter);
      if (convertedLetter === numberPair) {
        result += character;
      }
    }
  }
  return result;
}

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    // convert input to lower case
    input = input.toLowerCase();
    let secretMessage = "";
    if (encode) {
      // iterate through letters of input
      for (let letters in input) {
        let letter = input[letters];
        // if space, add to secretMessage or obtain
        // combinedNum of letter
        secretMessage += letter === " " ? letter : combinedNum(letter);
      }
      return secretMessage;
    }
    // check to ensure that the length of input is even
    else {
      const isNotEven = input.split(" ");
      console.log(isNotEven);
      for (let i = 0; i < isNotEven.length; i++) {
        if (isNotEven[i].length % 2 !== 0) {
          return false;
        }
      }
      secretMessage = input.split(" ").map(convertWordToNumberPair).join(" ");
      return secretMessage;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
