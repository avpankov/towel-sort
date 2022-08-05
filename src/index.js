
// You should implement your task here.

module.exports = function towelSort (matrix) {
// function towelSort (matrix) {
  let result = [];
  if (arguments.length !== 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let idx = i % 2 === 0 ? j : matrix[i].length - 1 - j;
        result.push(matrix[i][idx]);
      }
    }
  } else return [];
  return result;
}

// let matrix = [
//   [1, 2, 3], 
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// console.log(towelSort());
// console.log(towelSort(matrix));