const middle = function(arr) {
 
  let mid = [];

  if(arr.length <= 2) {
    return mid;
  } else if(arr.length % 2 === 1) {
    mid.push(arr[Math.floor(arr.length / 2)]);
  } else {
    mid.push(arr[Math.floor((arr.length / 2) - 1)]);
    mid.push(arr[Math.floor(arr.length / 2)]);
  }
  return mid;
};



module.exports = middle;
