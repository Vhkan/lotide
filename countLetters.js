const countLettets = function(text) {
  //creating an empty object
  let countedLetts = {};

  const noSpacesText = text.split(' ').join("").toLowerCase();

  for (const char of noSpacesText) {
    if (countedLetts[char]) {
      countedLetts[char]++;
    }
    else {
      countedLetts[char] = 1;
    }
  }
  return countedLetts;
};

module.exports = countLettets;



