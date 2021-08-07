// Return true only if all values are unique, otherwise return false

// Solution 1
const unique = (str) => {
  const values = [];

  for (let letter of str) {
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values.push(letter);
  }

  return true;
};

// Solution 2
const unique = (str) => {
  const values = {};

  for (let letter of str) {
    if (values[letter]) {
      return false;
    }
    values[letter] = 1;
  }

  return true;
};

// Solution 3
const unique = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
};

console.log(unique("abcde")); // true
console.log(unique("abcdab")); // false
