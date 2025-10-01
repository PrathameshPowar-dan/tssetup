if ([]==true) {
    console.log("Absent")
} else {
    console.log("Present")
}

let obj = {
    a:{
        b: undefined
    }
}

console.log(obj.a?.b?.c?.d ?? "Jit") // gave output Jit



var abc = 123;

if (function f(){}) {
    abc = abc + typeof f;
}

console.log(abc)

function add(a) {
    function add2(b) {
        if (b === undefined) {
            return a;
        } else {
            return b + a;
        }
    }
    return add2;
}

const fn = add(1);
console.log(fn());
console.log(fn(5));  


const aaa = [12,22,34,34,12,3,34,5,6,77,88,33,44]

function dupes(a) {
    const b = []
    for (let i = 0; i < a.length; i++) {
        if (a[i]==a[i+1]) {
            continue;
        } else{
            b.push(a[i])
        }

    }
    return b;
}

function dupe(a) {
    let b = []
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                b.push(a[i])
            }
        }
    }
    return b;
}

console.log("Dupes", dupes(aaa))
console.log("Dupe",dupe(aaa))

function Dupe(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                b.push(a[i])
            }
        }
    }
    return b;
}

function DupesUnique(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            b.push(a[i]);
        }
    }
    return b;
}

// let a = [1, 2, 2, 2, 3, 4, 4, 5];
let at = [2,1, 2, 2, 3, 33, 44, 4,4, 5, 6, 7, 8, 7, 8]
console.log("Unique",DupesUnique(at)); // [2, 4]


let aa = "Harry";

function reverse(a) {
    return a.split("").reverse().join("")
}

console.log("Reverse", reverse(aa))


let a = "Mysh Namesh ish Prathamesh ";
function Name(a){
    if(a.includes("sh") == true){
        console.log("Present")
        // console.log(a.indexOf(" "))
    } else{
        console.log("Not Present")
    }
}

Name(a)

function count(a) {
    let count = 0;
    let sub = "sh"
    for (let i = 0; i < a.length; i++) {
        let temp = "";
        for (let j = i; j < a.length; j++) {
            temp += a.charAt(j)
            // console.log(temp)
            if (temp == sub) {
                count++;
            }
        }
    }
    console.log(count)
}
count(a)


const s1 = "Me"
const s2= "PL"
const s3 = s2 && s1

console.log(s3)

// [a]=[2100,300,400]
// console.log(a) //2100


let T =100
let B= ++T + T++
console.log(B)

// T++ is 100 post increament
// ++T is 101 post increament
// doing ++T again is 102 post increament
// T++ + T++ is 201
// ++T + ++T is 203
// T++ + ++T is 202
// ++T + T++ is 202


const name = "PRathamesh"

console.log(name.includes("q"))