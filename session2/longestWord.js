// ex. longestWord('Hello my name is Saul') === 'hello'
// ex. longestWord('Hello there, my name is Saul') === ['hello', 'there']

// Solution 1
const longestWord = (str) => {
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
};

// Solution 2
const longestWord = (str) => {
  const wordArr = str
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    .sort((a, b) => b.length - a.length);

  const longestWordArr = wordArr.filter(
    (word) => word.length === wordArr[0].length
  );

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
};

console.log(longestWord("Hi there, my name is Saul"));
console.log(longestWord("Hello my name is Saul"));
console.log(longestWord("Hello there, my name is Saul"));
