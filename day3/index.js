let asdfdsg
console.log(asdfdsg) //not defined, 
//because it is not assigned to a value yet

let empty = null
console.log(empty) // -> null , means no value


let remainder = 10 % 3  // 1
console.log(remainder);
let powerOf = 2 ** 4  // 16
console.log(powerOf);


// pre increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1


// post increment
count = 0
console.log(count++)        // 0
console.log(count)          // 1


let number = 5
number>0?console.log(`${number} is a positive number`):console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)



//let asdf = prompt('Enter number', 'number goes here')
//console.log(asdf)


//const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
31

console.clear()