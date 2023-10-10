const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }

  let mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return [arr[Math.floor(mid)]];
  } else {
    return [
      arr[mid - 1],
      arr[mid]
    ];
  }
}

//Test Code
console.log(middle([1, 3, 5, 7, 9, 11 ,13, 15, 17]));

module.exports = middle;