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
