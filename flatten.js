const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(arr) {
  //returning a flattened version of the array
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flatten(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

module.exports = flatten;