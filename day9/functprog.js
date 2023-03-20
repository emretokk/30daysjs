const countriess = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

// forEach

let sum = 0
const numberss = [1, 2, 3, 4, 5]
numberss.forEach(num => sum+=num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(element => console.log(element.toUpperCase()))

console.clear()

// map
const numbersss = [1, 2, 3, 4, 5]
const numbersSquare = numbersss.map(num => num * num)

console.log(numbersSquare)

console.clear()


// filter
const countriesContainingLand = countriess.filter(country =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countriess.filter(country => country.endsWith('ia'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countriess.filter(
  country => country.length === 5
)
console.log(countriesHaveFiveLetters)


const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter(sc => sc.score > 80)
console.log(scoresGreaterEighty)
console.clear()

// sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// to sort the numbers
const nums = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log("this is wrong: ",nums.sort()) //[100, 3.14, 37, 9.81]
nums.sort(function (a, b) {
  return a - b
})

console.log(nums) // [3.14, 9.81, 37, 100]

nums.sort(function (a, b) {
  return b - a
})
console.log(nums) //[100, 37, 9.81, 3.14]