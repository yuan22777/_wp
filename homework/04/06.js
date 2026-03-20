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