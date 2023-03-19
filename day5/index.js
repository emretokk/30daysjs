/*
// const arr = Array()
// or
// let arr = new Array()
// or
const arr = []
console.log(arr)
*/

// const arr = [
//     250,
//     "sadf",
//     true,
//     { country: "Finland", city: "Helsinki" },
//     { skills: ["HTML", "CSS", "JS"] },
// ];

// console.log(arr);



// let js = 'Java Script'
// const charsInJs = js.split('')

// console.log(charsInJs);

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// // the text has special characters think how you can just get only the words
// // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
// console.log(words.length);
// // 13



// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]


// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]




// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// // indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
// console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// console.log(thirdList.indexOf(5)); // 4



// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
// if(indexOfAvocado === -1){
//    console.log('This fruit does not exist in the array')
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does not exist in the array




// // lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
// let numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers)
// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1



// // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

// numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false



// // isArray:To check if the data type is an array
// numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false



// // toString:Converts array to string
// numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook



// // join: It is used to join the elements of the array,
// // the argument we passed in the join method will be joined
// // in the array and return as a string.
// // By default, it joins with a comma,
// // but we can pass different string parameter
// // which can be joined between the items.

// names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook



// // Slice: To cut out a multiple items in range.
// // It takes two parameters:starting and ending position.
// // It doesn't include the ending position.
// numbers = [1,2,3,4,5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position



// //Push: adding item in the end. To add item to the end of an existing array we use the push method.
// numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// //pop: Removing item in the end.
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]

// //shift: Removing one array element in the beginning of the array.
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]

// //unshift: Adding array element in the beginning of the array.
// numbers.unshift(1) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]

// //reverse: reverse the order of an array.
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// // sort: arrange array elements in ascending order.
// numbers.sort()
// console.log(numbers);



// //Array can store different data types including an array itself
// const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
// console.log(arrayOfArray[0]) // [1, 2, 3]
