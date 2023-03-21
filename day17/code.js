// HTML5 Web Storage Objects


// window.sessionStorage - 
// stores data for one session 
// (data is lost when the browser tab is closed)

// window.localStorage - 
// stores data with no expiration date


localStorage.setItem("firstName", "Emre")

localStorage.setItem('age', 200)

/*
Storing an array in a localStorage. 
If we are storing an array, 
an object or object array, 
we should stringify the object first.
*/

let skillss = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skillss)
localStorage.setItem('skillss', skillJSON)

/*
Storing an object in a localStorage. 
Before we storage objects to a localStorage, 
the object has to be stringified.
*/

const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user,undefined,4)
localStorage.setItem('user', userText)



// getting item from localStorage

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skillss')
console.log(firstName,"\n", age,"\n", skills)

// as you can see skills is in a string format
// you should parse it to normal array

let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)


// Clearing the localStorage
localStorage.clear()