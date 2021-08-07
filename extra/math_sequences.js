// Arithmetric, Geometric or No Pattern
// no negative numbers

const mathSequences = (arr) => {
  const arithmetric = new Set();
  const geometric = new Set();

  for (let i = 1; i < arr.length; i++) {
    let arithmetricNumber = arr[i] - arr[i - 1];
    arithmetric.add(arithmetricNumber);

    let geometricNumber = arr[i] / arr[i - 1];
    geometric.add(geometricNumber);
  }

  return arithmetric.size === 1
    ? "Arithmetric"
    : geometric.size === 1
    ? "Geometric"
    : -1;
};

console.log(mathSequences([2, 4, 6, 8])); // Arithmetric
console.log(mathSequences([3, 9, 27])); // Geometric
console.log(mathSequences([1, 5, 16, 19])); // -1
