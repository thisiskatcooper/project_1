// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // convert input to lower case
    let lowercaseInput = input.toLowerCase().split("");
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let secretMessage = "";

    // if no alphabet provided or if provided alphabet is greater or less than 26
    // return false
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    // loop through alphabet and compare to see if there are duplicate characters
    for (let i = 0; i < alphabet.length; i++) {
      let duplicateLetters = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          duplicateLetters++;
        }
      }
      if (duplicateLetters > 1) return false;
    }
    // two if statements if encode, if !encode
    // encode (below)
    if (encode) {
      // iterate through letters of lowercaseInput
      for (let letter of lowercaseInput) {
        // if there is a space,
        // maintain space, add to secretMessage, and continue
        if (letter === " ") {
          secretMessage += letter;
          continue;
        }
        // if not a space, iterate through characters of standardAlphabet
        for (let character of standardAlphabet) {
          // and compare letter of input to character of standardAlphabet
          // if they match...
          if (letter === character) {
            // let codedLetter = index of corresponding standardAlphabet character
            let codedLetter = standardAlphabet.indexOf(letter);
            // add to secretMessage charAt for encodedLetter
            // using provided alphabet
            secretMessage += alphabet.charAt(codedLetter);
          }
        }
      }
      return secretMessage;
    }
    // decode (below)
    if (!encode) {
      // iterate through letters of lowercaseInput
      for (let letter of lowercaseInput) {
        // if there is a space,
        // maintain space, add to secretMessage, and continue
        if (letter === " ") {
          secretMessage += letter;
          continue;
        }
        // if not a space, iterate through characters of provided alphabet
        for (let character of alphabet) {
          // and compare letter of input to character of standardAlphabet
          // if they match...
          if (letter === character) {
            // let codedLetter = index of corresponding alphabet character
            let codedLetter = alphabet.indexOf(letter);
            // add to secretMessage charAt for encodedLetter
            // using standardAlphabet
            secretMessage += standardAlphabet.charAt(codedLetter);
          }
        }
      }
      return secretMessage;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
