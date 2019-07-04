const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
console.log(s.size);
const set = new Set();
set.add({});
set.add({});
console.log(set.size);
console.log(set.delete(1));