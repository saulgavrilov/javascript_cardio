// ex. addAll(2,5,6,7) === 20

// Solution 1
function addAll() {
  let args = Array.prototype.slice.call(arguments);
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

// Solution 2
const addAll = (...nums) => {
  let sum = 0;
  nums.forEach((n) => (sum += n));
  return sum;
};

// Solution 3
const addAll = (...nums) => nums.reduce((a, b) => a + b, 0);

console.log(addAll(2, 5, 6, 7));
