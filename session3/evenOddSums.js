// ex. evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

// Solution 1
const evenOddSums = (arr) => {
  let even = 0;
  let odd = 0;

  arr.forEach((n) => (n % 2 === 0 ? (even += n) : (odd += n)));

  return [even, odd];
};

console.log(evenOddSums([50, 60, 60, 45, 71]));
