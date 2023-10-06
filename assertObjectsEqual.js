const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
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

module.exports = assertObjectsEqual;