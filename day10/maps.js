// Maps
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

console.clear()

// Adding values to the map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

// Getting a value from map
console.log(countriesMap.get('Sweden'))

// Checking a key in map
console.log(countriesMap.has('Finland'))
console.log(countriesMap.has('Turkey'))

// Getting all values
for (const country of countriesMap) {
  console.log(country)
}