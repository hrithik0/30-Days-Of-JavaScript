import countries from "./countries.mjs";
import web_tech from "./web_tech.mjs";

console.log(countries);
console.log(web_tech);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.trim().match(/[a-zA-Z]+/gi);
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.includes('Sugar') ? console.log("already added") : shoppingCart.push('Sugar');
const allergic = false;

allergic ? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) : console.log("okay");
console.log(shoppingCart)

const edited_shoppingCart = shoppingCart.map(item =>{
    if(item == 'Tea'){
        return 'Green Tea'
    }
    return item;
})
console.log(edited_shoppingCart);

const checkCountry = 'Ethiopia';
countries.includes(checkCountry) ? console.log(checkCountry.toUpperCase()) : countries.push(checkCountry);

const checkWebTech = 'Sass';
countries.includes(checkWebTech) ? console.log(checkWebTech.toUpperCase()) : web_tech.push(checkWebTech);
console.log(countries);
console.log(web_tech);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)