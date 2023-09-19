const assertEqual = function(actual, expected) {

 if (actual === expected) {
  console.log (`Assertion Passed: ${actual} === ${expected}`)
  //return assertEqual;
 } else if (actual !== expected) {
  console.log (`Assertion Failed: ${actual} !== ${expected}`);
 }
}

// TEST CODE
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));
