// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// Solution 1
const flattenArray = (arrays) => arrays.reduce((a, b) => a.concat(b), []);

// Solution 2
const flattenArray = (arrays) => [].concat.apply([], arrays);

// Solution 3
const flattenArray = (arrays) => [].concat(...arrays);

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
