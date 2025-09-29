// Q1 Reserse a String
let name  = "Hello"
console.log(name.split("").reverse().join(""))



// Q2 Check if Prime
const n = 18
function CheckPrime(p) {
    if (p <= 1) return false;
    if (p === 2) return false;
    if (p % 2 === 0) {
        return false
    }

    for (let i = 3; i <= Math.sqrt(p); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(CheckPrime(n))


// Q3 Find the factorial
const nn = 5
function Fac(p) {
    let New = 1;
    for (let i = p; i > 1; i--) {
        if(p==1) return p;

        if (p>2) {
            New *= i
        }
    }
    return New;
}
console.log(Fac(nn))


// Q4 Swap Variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);


// Q5 Check if a string is a palindrome
const namee = "Swaddaws"

function CheckPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        console.log(str[len - 1 - i])
        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

console.log(CheckPalindrome(namee))