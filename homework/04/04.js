const prices = [100, 250, 50, 300];

function calculateTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("總金額:", calculateTotal(prices));