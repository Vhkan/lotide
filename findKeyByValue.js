const assertEqual = function(actual, expected) {

  if (actual === expected) {
   console.log (`Assertion Passed: ${actual} === ${expected}`)
   //return assertEqual;
  } else if (actual !== expected) {
   console.log (`Assertion Failed: ${actual} !== ${expected}`);
  }
 }
 
 const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (obj, val) {
  const keys = Object.keys(obj); //will give us keys
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    } 
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);