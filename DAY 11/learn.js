// //-----------DESTRUCTURING AND SPREAD------------------
// /*Destructuring is a way to unpack arrays, and objects
// and assigning to a distinct variable.*/

// // const numbers = [1, 2, 3, 4, 5];
// // let [numOne, numTwo, numThree] = numbers;
// // console.log(numOne)
// // console.log(numTwo)
// // console.log(numThree)

// // const names = ['Asabeneh', 'Brook', 'David', 'John']
// // let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

// // console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

// // const fullStack = [
// //     ['HTML', 'CSS', 'JS', 'React'],
// //     ['Node', 'Express', 'MongoDB']
// // ]
// // const [frontEnd, backEnd] = fullStack

// // console.log(frontEnd)
// // console.log(backEnd)

// // const numbers = [1, 2, 3]
// // let [numOne, , numThree] = numbers //2 is omitted

// // console.log(numOne, numThree)

// // const names = ['Asabeneh', 'Brook', 'David', 'John'];
// // let [ ,secondPerson, , fourthPerson] = names
// // console.log(secondPerson, fourthPerson)


// // const names = [undefined, 'Brook', 'David']
// // let [
// //   firstPerson = 'Asabeneh',
// //   secondPerson,
// //   thirdPerson,
// //   fourthPerson = 'John'
// // ] = names

// // console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let [num1, num2, num3, ...rest] = nums

// // console.log(num1, num2, num3)
// // console.log(rest)

// //-------------DESTRUCTURING DURING ITERATION----------------
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
//     console.log(country, city)
// }

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]

// for (const [first, second, third] of fullStack) {
//     console.log(first, second, third)
// }

//-----------------DESTRUCTURING OBJECT-----------------
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }
// let { width, height, area, perimeter = 400} = rectangle

// console.log(width, height, area, perimeter)
// console.log(rectangle)

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }
// let { width: w, height: h, area: a, perimeter: p } = rectangle

// console.log(w, h, a, p)

// function perimeter({ width: w, height: h }) {
//     return 2 * (w + h);
// }
// console.log(perimeter(rectangle))