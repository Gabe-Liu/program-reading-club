const transformMarix = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const list = matrix[i];
    for (let j = 0; j < list.length; j++) {
      const item = list[j];
      if (!newMatrix[j]) {
        newMatrix[j] = [];
      }
      newMatrix[j][matrix.length - i - 1] = item;
      // newMatrix[j].unshift(item);
    }
  }
  return newMatrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(transformMarix(matrix))