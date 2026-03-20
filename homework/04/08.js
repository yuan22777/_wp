const jsonString = '{"id": 1, "status": "active"}';

// JSON 轉 物件
const dataObj = JSON.parse(jsonString);
dataObj.status = "inactive";

// 物件 轉回 JSON
const newJson = JSON.stringify(dataObj);

console.log("原始字串:", jsonString);
console.log("轉換後字串:", newJson);