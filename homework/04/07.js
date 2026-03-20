const cart = [
  { name: "蘋果", price: 30 },
  { name: "香蕉", price: 15 },
  { name: "西瓜", price: 100 }
];

for (let i = 0; i < cart.length; i++) {
  console.log(`品名: ${cart[i].name}, 價格: ${cart[i].price}`);
}