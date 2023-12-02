// import countriesObj from "./countries.mjs";
// import web_tech from "./web_tech.mjs";
// const countriesArray = countriesObj.countries
/*

Q. First remove all the punctuations and change the string to array and count the number of words
in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

Solution:
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.trim().match(/[a-zA-Z]+/gi);
console.log(words)
console.log(words.length)



Q. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

@ add 'Meat' in the beginning of your shopping cart if it has not been already added
=>
shoppingCart.includes("Meat") ? console.log("Already added Meat to shopping cart.") : shoppingCart.unshift("Meat")


@ add Sugar at the end of you shopping cart if it has not been already added
=>
shoppingCart.includes("Sugar") ? console.log("Already added Sugar to shopping cart") : shoppingCart.push("Sugar");


@ remove 'Honey' if you are allergic to honey
=>
const allergic = false
allergic ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1) : console.log("okay");


@ modify Tea to 'Green Tea'
=>
const edited_shoppingCart = shoppingCart.map((item) => {
  if (item == "Tea") {
    return "Green Tea";
  }
  return item;
});



Q. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
If it does not exist add to the countries list.

Solution:
const checkCountry = "Ethiopia";
countriesArray.includes(checkCountry) ? console.log(checkCountry.toUpperCase()) : countriesArray.push(checkCountry)



Q. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS
preprocess'. If it does not exist add Sass to the array and print the array.

Solution:
const checkWebTech = "Sass";
web_tech.includes(checkWebTech) ? console.log(`${checkWebTech} is a CSS preprocess`)
  : web_tech.push(checkWebTech);
console.log(web_tech);



Q. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

Solution:
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

*/
