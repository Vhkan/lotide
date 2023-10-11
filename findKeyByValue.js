const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj); //will give us keys
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};



module.exports = findKeyByValue;