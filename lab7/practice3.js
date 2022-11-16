let numArr = [2, 1, 6, 4, 7, 8, 9, 10];
let promises = [];

numArr.forEach(function (item) {
  promises.push(
    new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(item * 50);
      });
    })
  );
});
Promise.all(promises).then(console.log);
