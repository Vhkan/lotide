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

module.exports = middle;