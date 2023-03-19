const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 27,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true,
  getFullName: function(){
  	return `${this.firstName} ${this.lastName}`
  }
}

console.log(person)

/*
We can access values of object using two methods:

using . followed by key name if the key-name is a one word
using square bracket and a quote
*/

console.log(person.firstName)
console.log(person["firstName"])

console.log(person.getFullName())

/*
Setting new key for an object

An object is a mutable data structure 
and we can modify the content of an object 
after it gets created.
*/
person.title='teacher'
person.skills.push('cpp')

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}

console.log(person)
console.log(person.getPersonInfo())


/*
Object Methods
There are different methods to manipulate an object.
 Let us see some of the available methods.
*/

// Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, person)
console.log(copyPerson)
console.log(person)

// Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys)

// Object.values:To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

// Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))