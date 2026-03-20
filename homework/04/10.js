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