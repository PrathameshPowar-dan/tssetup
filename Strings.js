// Q1. Count vowels in a string
const vowels = ["a", "e", "i", "o", "u"]

function CheckVowels(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) {
            count++;
        }
    }
    return count;
}

// console.log(CheckVowels("eeeee")) //5


// Q2. Check if two strings are anagrams
function CheckAna(s1, s2) {
    if (s1.length !== s2.length) return false;

    const SortedS1 = s1.split("").sort().join("");
    const SortedS2 = s2.split("").sort().join("");

    return SortedS1 === SortedS2
}

// console.log(CheckAna("silent","listen"))

// Q3. Capitalize first letter of each word
const Wo = "hello world";

function CapThem(a) {
    const A = a.split(" ");
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i][0].toUpperCase() + A[i].slice(1);
    }
    return A.join(" ");
}

// console.log(CapThem(Wo))


// Q.4 Find the first non-repeating character in a string

const nnn = "aabcc";

function CheckRepeat(a) {
    const split = a.split("");
    let b =""
    for (let i = 0; i < split.length; i++) {
        if (a[i]==a[i+1]) {
            b+=a[i]
        }
    }
    return b;
}

console.log(CheckRepeat(nnn))
