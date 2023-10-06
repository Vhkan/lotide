const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("Arrays are equal.");
  } else {
    console.log("Arrays are not equal.");
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    } else if (!results[sentence[i]]) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions('hello'));


module.exports = letterPositions;