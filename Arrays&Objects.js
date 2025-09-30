// Q1. Find the largest number in an array
const a = [1, 5, 3, 9];

function Large(p) {
    let max = p[0];
    for (let i = 1; i < p.length; i++) {
        if (p[i] > max) {
            max = p[i];
        }
    }
    return max;
}

// console.log(Large(a));


// Q2. Remove duplicates from an array
const arr = [3, 1, 2, 3, 3]

function CheckDupe(p) {
    const New = [];
    for (let i = 0; i < p.length; i++) {
        if (New.includes(p[i])) {
            continue;
        } else {
            New.push(p[i])
        }
    }
    return New;
}

// console.log(CheckDupe(arr))

// OR

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// console.log(removeDuplicates(arr));


// Q3. Flatten a nested array
const arrr = [1, 2, [3, 4]]

function FlatNest(arr) {
    const Nw = [];
    for (const e of arr) {
        if (Array.isArray(e)) {
            for (const inner of e) {
                Nw.push(inner);
            }
        } else {
            Nw.push(e);
        }
    }
    return Nw;
}

// console.log(FlatNest(arrr)); 


// Q4. Find the missing number in an array of 1…n
const miss = [1, 2, 4, 5];

function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

// console.log(findMissing(miss));

// Q5. Group objects by a property

const grp = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

function groupByAge(arr) {
  const result = {};
  for (const obj of arr) {
    const key = obj.age;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
  }
  return result;
}

console.log(groupByAge(grp));
