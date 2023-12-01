const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// const copy_countries = []
// const addCountry = (country, countries_array)=>{
//     countries_array.push(country);
// }
// countries.forEach((country)=>{addCountry.bind(null, country, copy_countries)()});
// console.log(copy_countries);

console.log(numbers.reduce((max, num)=>{
    if(max < num){
        max = num
    }
    return max
}, 0))

// console.log(numbers.find([max = 0, ]))
