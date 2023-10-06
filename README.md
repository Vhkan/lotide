# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vhkan/lotide`

**Require it:**

`const _ = require('@vhkan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(head)`: the function returns 1st array elements
* `function(middle)`: the function returns 2 middle array elements
* `function(tail)`: the function returns the last array element
* `function(map)`: the function returns a new array after taking every array value
* `function(assertArraysEqual)`: the function asserts 2 arrays values
* `function(assertEqual)`: the function asserts 2 arrays values
* `function(eqArrays)`: the function checks the equality of 2 arrays
* `function(takeUntil)`: the function returns the array of elements until the point mentioned in the function conditions 
* `function(without)`: the function returns a new array of elements from the 1st array not found in the 2nd array
* `function(countLetters)`: the function takes in a sentence and returns a count of each of the letter in that sentence
* `function(countOnly)`: the function takes allItems: an array of strings that we need to look through, and itemsToCount: an object specifying what to count
* `function(eqObjects)`: the function compares 2 objects and returns "true" if they're equal, and "false" if not
* `function(findKey)`: the function takes 2 parameters: obj,callback. The obj where it looks for a specific key, and callback that defines the condition to look for a key
* `function(findKeyByValue)`: the function returns a key with a specific value (key by value)
* `function(letterPositions)`: the function takes a string as a parameter and returns the object with character positions
* `function(assertObjectsEqual)`: the function compares 2 objects and asserts if they are equal
* `function(flatten)`: the function returns a flattened version of the array


