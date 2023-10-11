const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let arrToReturn = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      arrToReturn.push(element);
    }
  }
  return arrToReturn;
}


module.exports = without;