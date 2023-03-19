// global scope variables
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()


console.log(a, b) // JavaScript 10, accessible


// local scope variables
/*
A variable declared with var only scoped to function 
but variable declared with let or const is block scope(
		function block, if block, loop block, etc). 
Block in JavaScript is a code in between two curly brackets ({}).
*/
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
console.log(gravity)
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3
console.log(i) // 3