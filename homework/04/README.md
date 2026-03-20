## 習題4

AI問答 -- https://gemini.google.com/share/4433c3102012

## 我的測試結果

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 01.js
正數
負數
這是零

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 02.js
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 03.js
5
4
3
2
1
Liftoff!

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 04.js
總金額: 700

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 05.js
你好，我是 Gemini

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 06.js
[ 22, 30, 18 ]

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 07.js
品名: 蘋果, 價格: 30
品名: 香蕉, 價格: 15
品名: 西瓜, 價格: 100

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 08.js
原始字串: {"id": 1, "status": "active"}
轉換後字串: {"id":1,"status":"inactive"}

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 09.js
最大值是: 99

PS C:\Users\yuan0\Desktop\html\_wp\homework\js\_wp\homework\04> node 10.js
及格名單: [ '小明', '小華', '小美' ]

## 摘要
好的！這裡將 10 個練習題依照你的要求，先呈現 **程式碼實作**，隨後緊接著 **執行結果**。

---

## 1. 基礎數字判斷 (if/else)
這練習展示了如何使用條件判斷式處理多種可能性。

**程式碼：**
```javascript
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
```
**執行結果：**
> 正數
> 負數
> 這是零

---

## 2. 乘法表生成器 (for 迴圈)
使用迴圈自動重複執行相似的計算任務。

**程式碼：**
```javascript
for (let i = 1; i <= 9; i++) {
  console.log(`2 * ${i} = ${2 * i}`);
}
```
**執行結果：**
> 2 * 1 = 2
> 2 * 2 = 4
> 2 * 3 = 6
> 2 * 4 = 8
> 2 * 5 = 10
> 2 * 6 = 12
> 2 * 7 = 14
> 2 * 8 = 16
> 2 * 9 = 18

---

## 3. 倒數計時器 (while 迴圈)
當你不確定要跑幾次，但知道終止條件時，`while` 是最佳選擇。

**程式碼：**
```javascript
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log("Liftoff!");
```
**執行結果：**
> 5
> 4
> 3
> 2
> 1
> Liftoff!

---

## 4. 陣列總和計算 (Array + for)
練習如何透過索引值 (index) 存取陣列內的所有元素。

**程式碼：**
```javascript
const prices = [100, 250, 50, 300];

function calculateTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("總金額:", calculateTotal(prices));
```
**執行結果：**
> 總金額: 700

---

## 5. 聯絡人資訊管理 (Object)
物件（Object）讓我們能將相關的數據與功能（方法）封裝在一起。

**程式碼：**
```javascript
const user = {
  name: "Gemini",
  age: 1,
  greet: function() {
    console.log(`你好，我是 ${this.name}`);
  }
};

user.greet();
```
**執行結果：**
> 你好，我是 Gemini

---

## 6. 進階過濾器 (Array + if + function)
結合函式與邏輯判斷來篩選資料。

**程式碼：**
```javascript
function filterAdults(ages) {
  let adults = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      adults.push(ages[i]);
    }
  }
  return adults;
}

const members = [15, 22, 12, 30, 18];
console.log(filterAdults(members));
```
**執行結果：**
> [22, 30, 18]

---

## 7. 簡易購物車 (Array of Objects)
這是網頁開發中最常見的資料結構：由物件組成的陣列。

**程式碼：**
```javascript
const cart = [
  { name: "蘋果", price: 30 },
  { name: "香蕉", price: 15 },
  { name: "西瓜", price: 100 }
];

for (let i = 0; i < cart.length; i++) {
  console.log(`品名: ${cart[i].name}, 價格: ${cart[i].price}`);
}
```
**執行結果：**
> 品名: 蘋果, 價格: 30
> 品名: 香蕉, 價格: 15
> 品名: 西瓜, 價格: 100

---

## 8. JSON 格式轉換 (JSON)
JSON 是前後端溝通的橋樑，掌握轉換邏輯非常重要。


**程式碼：**
```javascript
const jsonString = '{"id": 1, "status": "active"}';

// JSON 轉 物件
const dataObj = JSON.parse(jsonString);
dataObj.status = "inactive";

// 物件 轉回 JSON
const newJson = JSON.stringify(dataObj);

console.log("原始字串:", jsonString);
console.log("轉換後字串:", newJson);
```
**執行結果：**
> 原始字串: {"id": 1, "status": "active"}
> 轉換後字串: {"id":1,"status":"inactive"}

---

## 9. 尋找最大值 (for + if)
不依賴內建工具，從頭撰寫邏輯來訓練演算法思維。

**程式碼：**
```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [23, 56, 12, 99, 45];
console.log("最大值是:", findMax(numbers));
```
**執行結果：**
> 最大值是: 99

---

## 10. 學生資料庫搜尋 (綜合練習)
綜合運用所有技巧處理複雜的資料篩選與回傳。

**程式碼：**
```javascript
const students = [
  { name: "小明", score: 85 },
  { name: "小華", score: 60 },
  { name: "小美", score: 92 },
  { name: "小強", score: 45 }
];

function getTopStudents(studentList, threshold) {
  let result = [];
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].score >= threshold) {
      result.push(studentList[i].name);
    }
  }
  return result;
}

const passList = getTopStudents(students, 60);
console.log("及格名單:", passList);
```
**執行結果：**
> 及格名單: ["小明", "小華", "小美"]

---

這些練習完成後，你已經掌握了 JavaScript 的基礎語法。

**想試試看如何把這些數據顯示在網頁上（HTML + DOM），還是想進入更進階的陣列方法（如 `map`, `filter`, `reduce`）？**