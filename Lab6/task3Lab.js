const numbers = [10, 20, 30, 40, 50, 60];
const excludeValue = 30;

function sumExcluding(arr, value) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      sum += arr[i];
    }
  }
  return sum;
}

const total = sumExcluding(numbers, excludeValue);

console.log("Array:", numbers);
console.log("Sum excluding", excludeValue + ":", total);