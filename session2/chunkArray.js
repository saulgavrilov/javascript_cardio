// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// Solution 1
// const chunkArray = (arr, length) => {
//   const chunkedArr = [];

//   let index = 0;

//   while (index < arr.length) {
//     chunkedArr.push(arr.slice(index, index + length));
//     index += length;
//   }

//   return chunkedArr;
// };

// Solution 2
const chunkArray = (arr, length) => {
  const chunkedArr = [];

  arr.forEach((el) => {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === length) {
      chunkedArr.push([el]);
    } else {
      last.push(el);
    }
  });

  return chunkedArr;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
