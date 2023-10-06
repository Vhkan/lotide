const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("Arrays are equal.");
  } else {
    console.log("Arrays are not equal.");
  }
}

const without = function (source, itemsToRemove) {
  let arrToReturn = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      arrToReturn.push(element);
    }
  }  
  return arrToReturn; 
}

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;