Array.prototype.removeDuplicatesAsync = async function () {
  let outputArray = [];
  for await (let item of this) {
    if (!outputArray.includes(item)) {
      outputArray.push(item);
    }
  }
  console.log(outputArray);
};

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]
