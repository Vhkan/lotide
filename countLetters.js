const countLettets = function(text) {
  //creating an empty object
  let countedNumbers = {};

  const noSpacesText = text.split(' ').join("").toLowerCase();

  for (const char of noSpacesText) {
    if (countedNumbers[char]) {
      countedNumbers[char]++;
    }
    else {
      countedNumbers[char] = 1;
    }
  }
  return countedNumbers;
};


// TEST CODE
console.log(countLettets("Lighthouse labs"));

module.exports = countLettets;



