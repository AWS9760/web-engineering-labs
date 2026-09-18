function sumOfDigits(num) {
  num = Math.abs(num);
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

const number = 123456;
console.log("Number:", number);
console.log("Sum of digits:", sumOfDigits(number));