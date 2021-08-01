// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// Solution 1
const missingLetters = (str) => {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
};

console.log(missingLetters("abce")); // d
console.log(missingLetters("abcdefghjklmno")); // i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")); // undefined
