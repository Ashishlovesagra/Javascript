//Question-1

//   function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// This is a JavaScript code that creates a function "counter" which returns a nested function "IncreaseCounter". The nested function has access to the outer function's variable "counter", which is initialized to 0. When "IncreaseCounter" is called, it increments the value of "counter" by 1 and returns the new value.
// When this script runs, the variable "counter" is assigned the returned function and four alerts will be displayed in succession, showing the value of counter, which will be 1, 2, 3, and 4.

//----------------------------------------------------------------------------------------------------------------

//Question-2

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

//Output = 1 and 0;

// The first console.log statement inside the if block logs the value of the local variable "count" which is 1. The second console.log statement, which is outside of the if block, logs the value of the global variable "count" which is 0.

// This is because the first console.log statement is inside a block where there is a variable count declared with let keyword which is different from the global variable count.

// It's important to note that the second console.log statement logs the global count because the function is invoked immediately and the global count is accessible inside the function.

//----------------------------------------------------------------------------------------------------------------

//Question-3

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

//Output = 3 3 3

// This script uses the setTimeout function to run a function "log" three times, once per iteration of the for loop. The function "log" simply logs the value of the variable "i".

// However, since the setTimeout function is being used, the function "log" is not invoked until after the for loop has completed. By the time setTimeout function runs, the value of the variable i is 3, so the function "log" will log the value of 3 for three times.

// In other words, all three log statements will output the same value, which is 3.

// If you want to log the correct value of i for each iteration, one way to do this is to wrap the log function in an immediately-invoked function expression (IIFE) and pass the value of i as an argument. This creates a new scope for each iteration and preserves the value of i at the time of the call.

//------------------------------------------------------------------------------------------------------------

//Question-4

// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function rectangle(length) {
//     return function (breadth) {
//       return length * breadth;
//     }
//   }
  
//   var area = rectangle(5);
//   console.log(area(2)); // 10
//   console.log(area(3)); //15
//   console.log(area(4));  //20

//   In this code, the outer function "rectangle" takes in a single parameter "length" and returns an inner function which takes in a single parameter "breadth". The inner function calculates the area of the rectangle by multiplying the "length" and "breadth" parameters.
// The outer function is invoked once with the value 5, which is stored in the variable "area". The "area" variable now holds the inner function, which can be invoked multiple times with different values of "breadth" to calculate the area of the rectangle with the fixed length 5.
// In the example above, the inner function is invoked twice with values 2 and 3 respectively, resulting in an output of 10 and 15 respectively.

//------------------------------------------------------------------------------------------------------------------

//Question-5

// Take a variable in outer function and create an inner function to increase the counter every time it is called

// function counter() {
//     let count = 0;
//     return function increaseCounter() {
//       return ++count;
//     }
//   }
  
//   let myCounter = counter();
//   console.log(myCounter()); // 1
//   console.log(myCounter()); // 2
//   console.log(myCounter()); // 3

// In this code, the outer function "counter" declares a variable "count" which is initialized to 0. It then returns an inner function "increaseCounter" which increments the value of "count" by 1 using the "++" operator and returns the new value.

// The variable "myCounter" is assigned the returned inner function. Each time "myCounter" is called it increases the value of count by 1 and returns the new value.

// In the example above, the inner function is invoked three times, resulting in an output of 1, 2, and 3 respectively.

//---------------------------------------------------------------------------------------------------------------

//Question-6

//Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();

//------------------------------------------------------------------------------------------------------------------

//Question 8

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "" outerArg = "" + outerArg + "\n" +
//         "" innerArg = "" + innerArg + "\n" +
//         "" outerVar = "" + outerVar + "\n" +
//         "" innerVar = "" + innerVar + "\n" +
//         "" globalVar = "" + globalVar);
    
//     })(456);
// })(123);


