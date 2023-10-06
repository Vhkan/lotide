const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    //return assertEqual;
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const eqObjects = function(object1, object2) {
  if (object1.key === object2.key && object1.value === object2.value) {
    return true;
  } else {
    return false;
  }
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject = { size: "medium", color: "red" };

eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


module.exports = eqObjects;