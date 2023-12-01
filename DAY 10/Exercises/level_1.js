const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const emptySet = new Set();
let counter = 0;
const setOfTenNums = new Set();
while(counter != 11){
    setOfTenNums.add(counter);
    counter++
}

setOfTenNums.delete(9);
setOfTenNums.clear()

const setOfFiveStrings = new Set([...countries[0]].slice(0, 5));
console.log(setOfFiveStrings)

const countriesMap = new Map();
countries.forEach(country=>{
    countriesMap.set(country, country.length);
})
console.log(countriesMap)
