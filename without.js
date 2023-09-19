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
    console.log(arrToReturn); 
  }  
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);