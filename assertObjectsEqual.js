
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // Util library's inspect function

  const areEqual = eqObjects(actual, expected);

  if (areEqual) {
    console.log(`Objects are equal: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Objects are not equal: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Test

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };

assertObjectsEqual(obj1, obj2); 