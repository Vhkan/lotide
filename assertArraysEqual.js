const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`Arrays ${arr1} === ${arr2} are equal.`);
  } else {
    console.log(`Arrays ${arr1} !== ${arr2} are not equal.`);
  }
}

module.exports = assertArraysEqual;