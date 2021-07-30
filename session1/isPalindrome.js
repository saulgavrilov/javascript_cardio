// ex. isPalindrome('racecar') === true

// Solution 1
const isPalindrome = (str) => str.split("").reduce((a, b) => b + a, "") === str;

// Solution 2
const isPalindrome = (str) => str.split("").reverse().join("") === str;

// Solution 3
function isPalindrome(str) {
  let revStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    revStr = str[i] + revStr;
  }
  return str === revStr;
}

// Solution 4
function isPalindrome(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return str === revStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
