const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const callback = map(words, word => word[0]);

console.log(callback);

//test case
console.log(assertArraysEqual(callback, ['g', 'c', 't', 'm', 't'], ['g', 'c', 't', 'm', 't']));
console.log(map(words, word => word[0]));


module.exports = map;