// //Question-1

// // function processString(str, callback) {
// //     callback(str);
// //   }
  
// //   function printString(str) {
// //     console.log(str);
// //   }
  
// //   processString("Hello, World!", printString); 
//   // Output: "Hello, World!"


// // Question-2
// // function printNumbers(callback) {
// //     for (let i = 1; i <= 7; i++) {
// //         setTimeout(() => {
// //             console.log(i);
// //             if(i==7)
// //             callback();
// //         }, i * 1000);
// //     }
// // }

// // printNumbers(()=>console.log("All numbers are printed"))

// //Question-3

// // const delay = (sec) => {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve();
// //     }, sec * 1000);
// //   });
// // };

// // async function printNumbers() {
// //   for (let i = 1; i <= 7; i++) {
// //     await delay(i);
// //     console.log(i);
// //   }
// // }

// // printNumbers();

// //Question-4
// function myPromise(input) {
//   return new Promise((resolve, reject) => {
//     if (input === 'yes') {
//       resolve('Promise Resolved');
//     } else {
//       reject(new Error('Promise Rejected'));
//     }
//   });
// }

// myPromise('yes')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//   //
// myPromise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });


// //Question-5
// //A simple callback function that logs a message:
// // function logMessage(callback) {
// //     console.log("Starting function");
// //     callback();
// //     console.log("Ending function");
// // }

// // logMessage(() => {
// //     console.log("This is a callback function");
// // });

// //A callback function that takes an argument:
// // function addNumbers(a, b, callback) {
// //     const result = a + b;
// //     callback(result);
// // }

// // addNumbers(2, 3, (result) => {
// //     console.log(`The result is: ${result}`);
// // });

// //A callback function that handles an error:
// // function divideNumbers(a, b, callback) {
// //     if(b==0){
// //         callback(new Error("Cannot divide by zero"));
// //     }else {
// //         const result = a / b;
// //         callback(null,result);
// //     }
// // }

// // divideNumbers(10, 2, (error, result) => {
// //     if (error) {
// //         console.log(error.message);
// //     } else {
// //         console.log(`The result is: ${result}`);
// //     }
// // });


// //Question-6

// // function downloadFiles(urls, callback) {
// //     let results = [];
// //     let completed = 0;
// //     urls.forEach(function (url) {
// //       downloadFile(url, function (err, data) {
// //         if (err) {
// //           callback(err);
// //         } else {
// //           results.push(data);
// //           completed++;
// //           if (completed === urls.length) {
// //             callback(null, results);
// //           }
// //         }
// //       });
// //     });
// //   }













  
