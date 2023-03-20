// High order functions


// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
console.log(cube(callback, 3))

console.clear()


// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

//// the above example can be simplified as follows:

const numbers = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}
console.log(sumArray(numbers))

console.clear()