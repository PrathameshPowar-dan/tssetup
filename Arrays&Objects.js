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
const arr = [3,1,2,3,3]

function CheckDupe(p) {
    const New = [];
    for (let i = 0; i < p.length; i++) {
        if (New.includes(p[i])) {
            continue;
        } else{
            New.push(p[i])
        }
    }
    return New;
}

console.log(CheckDupe(arr))

// OR

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(arr));


// Q3. Flatten a nested array

