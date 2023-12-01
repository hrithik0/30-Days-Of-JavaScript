/*Q. Declare a variable named challenge and assign it to an initial
value '30 Days Of JavaScript'.

Solution:
const challenge = '30 Days Of JavaScript'
*/


/*Q. Print the string on the browser console using console.log()

Solution:
console.log(challenge)
*/


/*Q. Print the length of the string on the browser console using console.log()

Solution:
consol.log(challenge.length)
*/


/*Q. Change all the string characters to capital letters using toUpperCase() method

Solution:
let challengeInUpperCaps = challenge.toUpperCase()
*/


/*Q. Change all the string characters to lowercase letters using toLowerCase() method

Solution:
let challengeInLowerCaps = challenge.toLowerCase()
*/


/*Q. Cut (slice) out the first word of the string using substr() or substring() method

Solution:
const firstWord = challenge.substring(3, 3+"days".length)
*/


/*Q. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

Solution:
const slicedPhrase = challenge.slice(3, challenge.length)
*/


/*Q. Check if the string contains a word Script using includes() method

Solution:
const isWordPresent = challenge.includes("Script")
*/


/*Q. Split the string into an array using split() method

Solution:
const stringSplit_atChars = challenge.split("").filter(char=>{
    if char != " "{
        return true
    }
    return false
})
*/


/*Q. Split the string 30 Days Of JavaScript at the space using split() method

Solution:
const stringSplit_atSpaces = challenge.split(" ")
*/


/*Q. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

Solution:
const stringSplit_atCommas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(",")
*/


/*Q. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

Solution:
const replacedString = challenge.replace("JavaScript", "Python")
*/


/*Q. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

Solution:
const charAt_index_15 = challenge.charAt(15)
*/


/*Q. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

Solution:
const charCodeOf_J = challenge.charCodeAt(challenge.indexOf('J'))
*/


/*Q. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

Solution:
const firstIndexOf_a = challenge.indexOf('a')
*/


/*Q. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

Solution:
const lastIndexOf_a = challenge.lastIndexOf('a')
*/


/*Q. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Solution:
const indexOfWord_because = 'You cannot end a sentence with because because because is a conjunction'.indexOf("because")
*/


/*Q. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Solution:
const lastIndexOfWord_because = 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because")
*/


/*Q. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Solution:
const firstOccurOfWord_because = 'You cannot end a sentence with because because because is a conjunction'.search("because")
*/


/*Q. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

Solution:
const trimSpaces = ' 30 Days Of JavaScript '.trim();
*/


/*Q. Use startsWith() method with the string 30 Days Of JavaScript and make the result true

Solution:
const startsWithWord_Days = '30 Days Of JavaScript'.substring(3,).startsWith('Days')
*/


/*Q. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

Solution:
const endsWithWord_30 = '30 Days Of JavaScript'.substring(3,).startsWith('JavaScript')
*/


/*Q. Use match() method to find all the a’s in 30 Days Of JavaScript

Solution:
const char_a_inString = '30 Days Of JavaScript'.match('a')
*/


/*Q. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

Solution:
const concatString = '30 Days of'.concat(' JavaScript')
*/


/*Q. Use repeat() method to print 30 Days Of JavaScript 2 times

Solution:
const repeatString = 'JavaScript'.repeat(2)
console.log(repeatString)
*/