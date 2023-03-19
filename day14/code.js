try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}

console.clear()

/*
The catch block take a parameter. 
It is common to pass e, err or error as a parameter 
to the catch block. This parameter is an object 
and it has name and message keys. 
*/

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error('Name of the error:', err.name)
  console.error('Error message:', err.message)
} finally {
  console.log('In any case I will be executed')
}

console.clear()

const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()