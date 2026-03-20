function checkNumber(num) {
  if (num > 0) {
    return "正數";
  } else if (num < 0) {
    return "負數";
  } else {
    return "這是零";
  }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));