// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// Solution 1
const isAnagram = (str1, str2) => format(str1) === format(str2);

// Helper Function
const format = (str) =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

console.log(isAnagram("elbow", "below"));
console.log(isAnagram("Dormitory", "dirty room##"));
