// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// Solution 1
const sumAllPrimes = (n) => {
  let total = 0;

  const checkForPrime = (i) => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }

  return total;
};

console.log(sumAllPrimes(10));
