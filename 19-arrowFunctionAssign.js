// 1. With no args and no return value
const greet = () => {
  console.log("Good Morning, Today is Monday");
};
greet();


// 2. With 3 args and no return value (multiplication)
const multiply = (num1, num2, num3 = 1) => {
  const result = num1 * num2 * num3;
  console.log(`Multiplication is : ${result}`);
};

// 2.a
multiply(5, 5, 2);

// 2.b
multiply(10, 4);   // default 3rd arg = 1


// 3. With 5 args and return value (addition)
const addFive = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

// 3.a (Numbers)
const sumNumbers = addFive(100, 100, 200, 349, 756);
console.log(`Addition of number = ${sumNumbers}`);

// 3.c (Strings concatenation)
const sumWords = addFive("I am ", "Learning ", "ES6 ", "Features ", "in Depth");
console.log(`Addition of Words is : ${sumWords}`);



