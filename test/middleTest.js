// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');


//TEST CODE
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2])); // => []
// console.log(middle([1])); // => []

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  // console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  // console.log(middle([1, 2, 3])); // => [2]
  it("returns [2] out of [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  // console.log(middle([1, 2])); // => []
  it("returns [] out of [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  //console.log(middle([1])); // => []
  it("returns [] out of [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

});