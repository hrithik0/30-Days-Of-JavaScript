const arr = new Array();
arr.push("rider");
console.log(arr)

//CREATING AN ARRAY WITH VALUES

const number = [0, 3.14, 9.81, 37, 98.6, 100];
console.log('Numbers: ', number);
console.log("Number of numbers: ", number.length);


//ARRAY CAN HAVE ITEMS OF DIFFERENT DATA TYPES

const diffDataArr = [
    'Asabeneh',
    250,
    true,
    {
        country: 'Finland',
        city: 'Helsinki',
    },
    {
        skills: ['HTML', 'CSS', 'JS', 'REACT', 'PYTHON'],
    },
]

console.log(diffDataArr[3].country, diffDataArr[4].skills[4]);

// CREATING AN ARRAY USING SPLIT

let js = 'JavaScript';
const charsInJavaScript = js.split('');
console.log(charsInJavaScript);

// METHODS TO MANIPULATE ARRAYS
//ARRAY CONSTRUCTOR

const newArr = Array(6).fill("#");
console.log(newArr)

// CONCATENATING ARRAY USING CONCAT
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

//GETTING ARRAY LENGTH
const numbers = [[1, 2], [3, 4, 5]];
console.log(numbers.length);

//GETTING INDEX OF AN ELEMENT IN ARRAY
/* THE BELOW CODE CONTAINS AN ERROR TRY RESOLVING IT
// console.log(numbers.findIndex((num) => {
//     if (Array.isArray(num)) {
//         return (
//             num.forEach(val => {
//                 if (val == 1 || val == 2) return true;
//                 return false
//             }
//             )
//         );
//     }
//     else if (num == 1 || num == 2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }))
*/

//CONVERTING AN ARRAY TO STRING
console.log(numbers.toLocaleString());

//JOINING ARRAY ELEMENTS
/* join: It is used to join the elements of the array, 
the argument we passed in the join method will be joined in
the array and return as a string. By default, it joins with a 
comma, but we can pass different string parameter which can be
joined between the items.
 */

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.join('|'));

//SLICE ARRAY ELEMENTS
/*Slice: To cut out a multiple items in range. 
It takes two parameters:starting and ending position.
It doesn't include the ending position.
 */

const slicednames = (names.slice(1, 3));
console.log(names);

//SPLICE METHOD IN ARRAY
/*
Splice: It takes three parameters:Starting position,
number of times to be removed and number of items to be added.
 */


const newNames = names.splice(0, 3, "sjdfl", "dsuid", "Goku");
console.log(names)

//ADDING ITEM TO AN ARRAY
const addItems = [1, 2];
addItems.push([3, 4], 5, 6);
console.log(addItems);

const poppedItems = new Array();
poppedItems.push(addItems.pop());
console.log(poppedItems);
console.log(addItems)


//REMOVING AN ELEMENT FROM THE BEGINNING
const newNumbers = [1, 2, 3, 4, 5];
newNumbers.shift(); // removes one item from the beginnning

//ADD AN ELEMENT FROM THE BEGINNING
newNumbers.unshift("1");
console.log(newNumbers);

//REVERSING ARRAY ORDER
const reversedArray = newNumbers.reverse();
console.log(reversedArray, newNumbers)


//SORTING ELEMENTS IN ARRAY
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

webTechs.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    return -1;
})
console.log(webTechs);

//ARRAY OF ARRAYS

const firstNums = [1, 2, 3];
const lastNums = [4, 5, 6];
const arrayOfArray = [firstNums, lastNums]
console.log(arrayOfArray)