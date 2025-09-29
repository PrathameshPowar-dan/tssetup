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

console.log(Large(a));
