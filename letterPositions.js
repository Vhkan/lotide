const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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