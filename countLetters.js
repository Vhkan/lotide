const assertEqual = function(actual, expected) {

  if (actual === expected) {
   console.log (`Assertion Passed: ${actual} === ${expected}`)
   //return assertEqual;
  } else if (actual !== expected) {
   console.log (`Assertion Failed: ${actual} !== ${expected}`);
  }
 };
 
 // create a function that should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
 const countLettets = function (text) {
  //creating an empty object
     let countedNumbers = {};
     
     const noSpacesText = text.split(' ').join("").toLowerCase();

     for (const char of noSpacesText) {
      if (countedNumbers[char]) {
        countedNumbers[char]++;
      }
      else {
        countedNumbers[char]=1;
      }
     }
     return countedNumbers;
 };


 // TEST CODE
 console.log(countLettets("Lighthouse labs"));
 


