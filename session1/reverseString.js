// ex. reverseString('hello') === 'olleh'

// Solution 1
const reverseString = (str) => str.split("").reverse().join("");

// Solution 2
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}

// Solution 3
function reverseString(str) {
  let revStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
}

// Solution 4
function reverseString(str) {
  let revStr = "";
  for (let char of str) {
    revStr = char + revStr;
  }
  return revStr;
}

// Solution 5
const reverseString = (str) => {
  let revStr = "";
  str.split("").forEach((char) => (revStr = char + revStr));
  return revStr;
};

// Solution 6
const reverseString = (str) => {
  return str.split("").reduce((a, b) => b + a, "");
};

console.log(reverseString("hello"));
