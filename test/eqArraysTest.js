const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  // assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  // assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
  it('returns true for (["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  //assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
  it('returns false for (["1", "2", "3"], ["1", "2", 3])', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});
