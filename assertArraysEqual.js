const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log("Arrays are equal.");
  } else {
    console.log("Arrays are not equal.");
  }
}

module.exports = assertArraysEqual;