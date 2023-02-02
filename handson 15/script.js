//Question-1

// // Parent Object
// function Person() {}

// Person.prototype.setName = function(name) {
//   this.name = name;
// };

// Person.prototype.getName = function() {
//   return this.name;
// };

// // Child Object
// function Student() {}

// Student.prototype = Object.create(Person.prototype);

// // Use the methods from the parent
// const student = new Student();
// student.setName('Ashish Singh');
// console.log(student.getName()); // Output: Ashish Singh


//Question -2

// // Parent Object
// function Person() {}

// Person.prototype.setName = function(name) {
//   this.name = name;
// };

// Person.prototype.getName = function() {
//   return this.name;
// };

// // Child Object
// function Student() {}

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.setAge = function(age) {
//   this.age = age;
// };

// Student.prototype.getAge = function() {
//   return this.age;
// };

// // Grandchild Object
// function GraduateStudent() {}

// GraduateStudent.prototype = Object.create(Student.prototype);

// GraduateStudent.prototype.setDegree = function(degree) {
//   this.degree = degree;
// };

// GraduateStudent.prototype.getDegree = function() {
//   return this.degree;
// };

// const gradStudent = new GraduateStudent();
// gradStudent.setName('Ashish');
// gradStudent.setAge(23);
// gradStudent.setDegree('B.tech');
// console.log(gradStudent.getName()); // Output: Ashish
// console.log(gradStudent.getAge()); // Output: 23
// console.log(gradStudent.getDegree()); // Output: B.tech


//Question 3

// Adding a method to Array prototype
// Array.prototype.sum = function() {
//     return this.reduce((acc, current) => acc + current, 0);
//   };
  
//   const arr1 = [1, 2, 3, 4];
//   const arr2 = [5, 6, 7, 8];
//   const arr3 = [9, 10, 11, 12];
  
//   console.log(arr1.sum()); // Output: 10
//   console.log(arr2.sum()); // Output: 26
//   console.log(arr3.sum()); // Output: 42



//Question 4  

// function getAllProperties(obj) {
//     let properties = [];
//     let currentObj = obj;
//     while (currentObj !== null) {
//       properties = properties.concat(Object.getOwnPropertyNames(currentObj));
//       currentObj = Object.getPrototypeOf(currentObj);
//     }
//     return properties;
//   }
  
//   const obj = {
//     name: 'John Doe',
//     age: 30,
//   };
  
//   console.log(getAllProperties(obj)); // Output: [ 'name', 'age' ]
  
