// Q.1 Implement debounce functions
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset timer if called again
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Example usage
const log = debounce(() => console.log("Hello from debounce!"), 2000);

// log();
// log();
// log(); // Only this one runs after 2s


// Q.2 Implement throttle functions
function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);   // Run immediately
      inThrottle = true;      // Block future calls
      setTimeout(() => {
        inThrottle = false;   // Reopen gate after "limit"
      }, limit);
    }
  };
}

// Example usage
const log2 = throttle(() => console.log("Hello from throttle!"), 2000);

// log2();
// log2();
// log2(); // Only first runs immediately, others ignored until 2s pass


// Q.3 Write a function that returns a function (closure)
function Saty(name) {
    return function () {
        console.log("Hello", name)
    }
}

const greet = Saty("Jade")
// greet()

// Q.4 Currying example
function add(a) {
  return function (b) {
    return function (c) {
      if (a == null || b == null || c == null) {
        return "Put numbers";
      } else {
        return a + b + c;
      }
    }
  }
}

const add1 = add(1)

// console.log(add1(1)(3))

// Q.5 Implement your own bind function
const person = {
  name: "Alice",
};

function sayHello(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const boundHello = sayHello.bind(person, "Hi"); // bind ensures this inside sayHello always refers to person.

boundHello(); // "Hi, my name is Alice"




// Q.6 Implement map

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// ✅ Example
const arr = [1, 2, 3];
const doubled = arr.myMap(x => x * 2);

console.log(doubled); // [2, 4, 6]


