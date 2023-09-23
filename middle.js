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

const middle = function (arr) {
  if (arr.length <=2){
    return [];
  }

  let mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr [Math.floor(mid)];
  } else {
    return [
      arr[mid - 1],
      arr[mid]
    ];
  }
}

console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2])); // => []
console.log(middle([1])); // => []