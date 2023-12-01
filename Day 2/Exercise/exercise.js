let challenge = "30 Days Of JavaScript" 
console.log(challenge);
console.log(challenge.length);
const upperChallenge = challenge.toUpperCase();
const lowerChallenge = challenge.toLowerCase();

let firstWord = challenge.substring(0, challenge.indexOf(' '));
// console.log(firstWord);
let wordSliced = challenge.substring(firstWord.length + 1);
console.log(wordSliced)

let checkWord = challenge.includes('Script');
let words = challenge.split(' ');

let givenText = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const givenText_split = givenText.split(', ');

const replacedChallenge = challenge.replace('JavaScript', 'Python');
console.log(replacedChallenge)

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.indexOf('J')));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))

console.log(' 30 Days Of JavaScript '.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith("JavaScript"))

console.log(challenge.match(/a/gi));
const first = '30 Days of';
const second = ' JavaScript';

const firs_plus_second = first.concat(second);
console.log(firs_plus_second)


console.log("30 Days Of JavaScript".repeat(2));