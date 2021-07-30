// ex. reverseInt(321) === 123

// Solution 1
const reverseInt = (int) =>
  parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);

console.log(reverseInt(-321));
console.log(reverseInt(321));
