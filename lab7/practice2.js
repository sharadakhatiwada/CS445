let arr = [2, 3, 4, 5, 6, 19, 25];
let even = [];
let odd = [];
let newArr = arr.forEach(function (item) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (item % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    });
  });
});
