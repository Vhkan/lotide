// const assertEqual = require('../assertEqual');
// const tail = require ('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!



const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  //Assertion Failed: 2 === 3?
  it("returns 3 for words.length", () => {
    assert.deepStrictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 3);
  });

  //Assertion Failed: Lighthouse,Labs !== Lighthouse,Labs
it("returns ['Lighthouse', 'Labs'] for input ['Yo Yo', 'Lighthouse', 'Labs']", () => {
  assert.deepStrictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
});
});


