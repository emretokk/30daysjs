// Sets
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// set is an iterable object
for (const language of setOfLanguages) {
  console.log(language)
}

// adding element
setOfLanguages.add('turkish')
setOfLanguages.add('dutch')

console.log(setOfLanguages)
console.log(setOfLanguages.size)

// deleting element
console.log(setOfLanguages.delete("dutch"))
console.log(setOfLanguages.size)
console.log(setOfLanguages)

// clearing the set
setOfLanguages.clear()
console.log(setOfLanguages)

console.clear()

// Union of sets
// (A U B)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Intersection of sets
// (A ∩ B)
let aa = [1, 2, 3, 4, 5]
let bb = [3, 4, 5, 6]

let AA = new Set(aa)
let BB = new Set(bb)

let cc = aa.filter((num) => BB.has(num))
let CC = new Set(cc)

console.log(CC)

// Difference of sets
// (A \ B)
let aaa = [1, 2, 3, 4, 5]
let bbb = [3, 4, 5, 6]

let AAA = new Set(aaa)
let BBB = new Set(bbb)

let ccc = aaa.filter((num) => !BBB.has(num))
let CCC = new Set(ccc)

console.log(CCC)

console.clear()