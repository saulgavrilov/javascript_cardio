// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  const filterArr = (arr) => args.indexOf(arr) === -1;

  return arr.filter(filterArr);
}

// Solution 2
const seekAndDestroy = (arr, ...rest) =>
  arr.filter((val) => !rest.includes(val));

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
