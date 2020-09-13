
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
      return [];
  }
  let newSortedArray = [];

  matrix.forEach((subMatrix, i) => {
      if (i % 2 !== 0) {
          newSortedArray = newSortedArray.concat(subMatrix.reverse());
      } else {
          newSortedArray = newSortedArray.concat(subMatrix);
      }
  });
  return newSortedArray;
}
