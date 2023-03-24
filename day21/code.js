// Let us see the different methods 
// to access the h1 elements.


// // getting elements by tag name
// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }


// // getting elements by class name
// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }


// // getting element by id
// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>


// // getting elements by using querySelector methods
// //let firstTitle = document.querySelector('h1') // select the first available h1 element
// //let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title
// console.log(firstTitle)

// // querySelectorAll
// //selects all the available h1 elements in the page
// const allTitles = document.querySelectorAll('h1') 
// // the same goes for selecting using class
// //const allTitles = document.querySelectorAll('.title') 

// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }

// allTitles.forEach(title => console.log(title))


// // Adding attribute
// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// console.log(titles)


// // Adding attribute using setAttribute
// const titles = document.querySelectorAll('h1')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')


// // Adding class using classList
// //
// // another way to setting an attribute: 
// // append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')


// // Removing class using remove
// titles[3].classList.remove('title', 'header-title')
// console.log(titles)


// //  Adding Text to HTML element
// //
// // // Adding Text content using textContent
// //
// // const titles = document.querySelectorAll('h1')
// // titles[3].textContent = "Fourth Title"


// // Adding Text content using innerHTML
// //
// // We use innerHTML property when we like to replace 
// // or a completely new children content to a parent element.
// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//     <li>30DaysOfJavaScript Challenge Ongoing</li>
//     <li>30DaysOfReact Challenge Coming</li>
//     <li>30DaysOfFullStack Challenge Coming</li>
//     <li>30DaysOfDataAnalysis Challenge Coming</li>
//     <li>30DaysOfReactNative Challenge Coming</li>
//     <li>30DaysOfMachineLearning Challenge Coming</li>`

// const ul = document.querySelector('ul')

// ul.innerHTML = lists
// console.log(ul.innerHTML)

// // The innerHTML property can allow us also 
// // to remove all the children of a parent element
// ul.innerHTML = ""
// console.log(ul.innerHTML)



// Adding Style
/*
If the element has even index 
we give it green color else red.
*/
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '50px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
    title.style.backgroundColor = 'black'
  } else {
    title.style.color = 'red'
    title.style.backgroundColor = 'aqua'
    title.style.fontSize = '1em'
  }
})


/*
As you have notice, the properties of css 
when we use it in JavaScript is going to be a camelCase. 
The following CSS properties change from 
background-color to backgroundColor, 
font-size to fontSize, 
font-family to fontFamily, 
margin-bottom to marginBottom.
*/