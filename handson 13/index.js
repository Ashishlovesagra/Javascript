//    function counter(){
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
//---------------------------------------------------------------
//Question 2
// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();


//Question-3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// Question-4
// function calculateArea(l) {
//     function area(b) {
//       return l * b;
//     }
//     return area;
//   }
  
//   const area = calculateArea(10)(8);
//   console.log(area); 
  

//Question-5
//Question -1 is Answer

//Question-6
//Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();

//Question-7
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

//Question-8
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         ""outerArg = "" + outerArg + ""\n"" +
//         ""innerArg = "" + innerArg + ""\n"" +
//         ""outerVar = "" + outerVar + ""\n"" +
//         ""innerVar = "" + innerVar + ""\n"" +
//         ""globalVar = "" + globalVar);
    
//     })(456);
// })(123);