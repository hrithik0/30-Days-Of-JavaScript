const person = {
    firstName : "Hrithik",
    lastname : "Karmakar",
    country : "India",
    age : 20,
    isMarried : false,
    birthYear : 2003,
};

const getTypeOf = function(key){
    console.log(typeof person[key]);
}
Object.keys(person).forEach(getTypeOf);


console.log(typeof '10' == typeof 10);
console.log(parseInt('9.8') == 10);

const oneLessThanTwo = 1 < 2;
const oneLessThanThree = 1 < 3;
const oneLessThanFour = 1 < 4;

const oneGreaterThanTwo = 1 > 2;
const oneGreaterThanThree = 1 > 3;
const oneGreaterThanFour = 1 > 4;

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
    4 === '4',)

    console.log('Python'.length != 'Jargon'.length)

    console.log(
        4 > 3 && 10 < 12, //true
        4 > 3 && 10 > 12, //false
        4 > 3 || 10 < 12,  //true
        4 > 3 || 10 > 12,  //true
        !(4 > 3),  //false
        !(4 < 3),  //true
        !(false),  //true
        !(4 > 3 && 10 < 12),  //false
        !(4 > 3 && 10 > 12),  //true
        !(4 === '4') //true
        );

        console.log(!('dragon'.includes('on')) && !('python'.includes('on')))

        const now = new Date();
        console.log(now.getFullYear()) // year

        console.log(now.getMonth()); // month

        console.log(now.getDate()); // date

        console.log(now.getDay()); // day of the week

        console.log(now.getHours()); // hours
    
        console.log(now.getMinutes()); // minutes
        console.log(now.getTime());  // the seconds from 1970 to till date