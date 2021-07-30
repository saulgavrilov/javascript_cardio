// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution 1
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(" ");
}

// Solution 2
const capitalizeLetters = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");

// Solution 3
const capitalizeLetters = (str) =>
  str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());

console.log(capitalizeLetters("i love javascript"));
