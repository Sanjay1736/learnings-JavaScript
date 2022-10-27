const arr = [5, 8, 6, 5, 4, 3];
// arr.sort().reverse();
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] < arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

// let promise = new Promise((reoslve, reject) => {});
function even(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("even");
    } else {
      reject("odd");
    }
  });
}

even(2)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
