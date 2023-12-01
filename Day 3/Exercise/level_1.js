/*

Q. Declare firstName, lastName, country, city, age, isMarried, year variable and
assign value to it and use the typeof operator to check different data types.

Solution:
const person = {
    firstName: "Chizuru",
    lastname: "Katou",
    country: "Sweden",
    age: 43,
    isMarried: false,
    birthYear: 2003,
}

const getTypeOf = function (val) {
    console.log(typeof val)
}
Object.values(person).forEach(getTypeOf)



Q. Check if type of '10' is equal to 10

Solution:
console.log(typeof '10' == typeof 10)



Q. Check if parseInt('9.8') is equal to 10

Solution:
console.log(parseInt('9.8') == 10);



Q. Boolean value is either true or false.

@ Write three JavaScript statement which provide truthy value.
=>
const oneLessThanTwo = 1 < 2;
const oneLessThanThree = 1 < 3;
const oneLessThanFour = 1 < 4;


@ Write three JavaScript statement which provide falsy value.
=>
const oneGreaterThanTwo = 1 > 2;
const oneGreaterThanThree = 1 > 3;
const oneGreaterThanFour = 1 > 4;



Q. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

@ 4 > 3
@ 4 >= 3
@ 4 < 3
@ 4 <= 3
@ 4 == 4
@ 4 === 4
@ 4 != 4
@ 4 !== 4
@ 4 != '4'
@ 4 == '4'
@ 4 === '4'

Solution:
console.log(
    4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4'
)



Q. Find the length of python and jargon and make a falsy comparison statement.

Solution:
console.log('Python'.length != 'Jargon'.length)



Q. Figure out the result of the following expressions first without using console.
log(). After you decide the result confirm it by using console.log()

@ 4 > 3 && 10 < 12, //true
@ 4 > 3 && 10 > 12, //false
@ 4 > 3 || 10 < 12,  //true
@ 4 > 3 || 10 > 12,  //true
@ !(4 > 3),  //false
@ !(4 < 3),  //true
@ !(false),  //true
@ !(4 > 3 && 10 < 12),  //false
@ !(4 > 3 && 10 > 12),  //true
@ !(4 === '4') //true
@ There is no 'on' in both dragon and python //false


Solution:
console.log(
    4 > 3 && 10 < 12,
    4 > 3 && 10 > 12
    4 > 3 || 10 < 12, 
    4 > 3 || 10 > 12, 
    !(4 > 3),
    !(4 < 3),
    !(false), 
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12), 
    !(4 === '4'),
    !("dragon".includes('on')) && !("jargon".includes('on'))
)



Q. Use the Date object to do the following activities

@ What is the year today?
@ What is the month today as a number?
@ What is the date today?
@ What is the day today as a number?
@ What is the hours now?
@ What is the minutes now?
@ Find out the numbers of seconds elapsed from January 1, 1970 to now.

Solution:
const now = new Date(); //date object

console.log(now.getFullYear()) // year

console.log(now.getMonth()); // month

console.log(now.getDate()); // date

console.log(now.getDay()); // day of the week

console.log(now.getHours()); // hours

console.log(now.getMinutes()); // minutes

console.log(now.getTime());  // the seconds from 1970 to till date


*/