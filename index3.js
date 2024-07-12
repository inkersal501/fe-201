// Pure Function? In simple terms, pure functions do not have an internal state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.

// let intialData = 10;

function sum(a, b) {
  const c = a + b;
  return c;
}

sum(2, 3);
sum(2, 3);
sum(2, 4);

// sum(2,3); // 15
// sum(2,3); // 15
// sum(2,3); // 15
// sum(2,3); // 15
// sum(2,3); // 15
// sum(2,3); // 15
// intialData = 15;
// sum(2,3); // 20

/**
 * Advantages of pure functions:
 * A pure function works as an independent function that gives the same output for the same inputs.
 * Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug.
 * You can clone an external state into a pure function, but it does not change the purity of the function.
 */

//Impure Function: An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.

// let temp = 3;
// mutation -> changing
// function impureSum(a,b) {
// obj.name = 'Crio'
//     return a + b + temp;
// }

// const test = {}
// impureSum(2, 3) // 10

/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */

function temp(obj) {
  const tempObj = { ...obj };
  tempObj.name = "Crio";
  return tempObj;
}
const temp = 1;
function sum2(a, b) {
  const c = temp + a + b;
  return c;
}

function sum(a, b) {
  const c = a + b;
  sum2();
  return c;
}

function addProperty(obj, property, value) {
  const test = { ...obj };
  test[property] = value;
  return test;
}

const obj = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "IN",
  },
};

const copy = { ...obj, address: { ...obj.address } };

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return clone;
};

const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

a.obj.a = 2;

console.log(a);
console.log(b);

function printName() {
  console.log("CrioDo");
}

function executor(cb) {
  cb();

  return () => {
    console.log("Hey There");
  };
}

function executorPart2() {
  return () => {
    console.log("Executor 2");
  };
}

const temp = executor(printName);
temp();
