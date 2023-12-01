// // ----------HIGHER ORDER FUNCTION ---------

// /*Higher order functions are functions which take other
// function as a parameter or return a function as a
// value. The function passed as a parameter is called
// callback.
// */



// // ----------CALLBACK FUNCTION ----------
// /* A callback is a function which can be passed as parameter to
// other function. See the example below.
// */
// const callback = (n)=>{
//     return n**2;
// }

// function cube(callback, n){
//     return callback(n)*n;
// }

// //----------RETURNING FUNCTIONS--------
// const higherOrder = n=>{
//     const doSomething = m =>{
//         const doWhatEver = t=>{
//             return 2 * n + 3 * m + t;
//         }
//         return doWhatEver;
//     }
//     return doSomething
// }

// function newHigher(n, m, t){
//     function newSomething(){
//         function newWhatEver(){
//             return 2 * n + 3 * m + t;
//         }
//         return newWhatEver
//     }
//     return newSomething
// }
// // console.log(newHigher(3, 2, 2)()())

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr =>{
//     let sum = 0
//     const callback = function(element){
//         sum+=element;
//     }
//     arr.forEach(callback);
//     return sum;
// }
// console.log(sumArray(numbers))


// -------------SETTINGS TIME ------------

/*In JavaScript we can execute some activities in a 
certain interval of time or we can schedule(wait) for
some time to execute some activities.

1 : setInterval
2 : setTimeout
*/

// -----------SETTING INTERVAL USING A SETINTERVAL FUNCTION ------------
/*
In JavaScript, we use setInterval higher order function to do
some activity continuously with in some interval of time.
The setInterval global method take a callback function and a
duration as a parameter. The duration is in milliseconds and the
callback will be always called in that interval of time.*/

// let counter = 0;
// function callback(){
//     console.log(counter,"Hello, World!")
//     counter++;
// }
// // setInterval(()=>{
// //     console.log("High School DxD");
// // }, 1000);


// //------------------SETTING A TIME USING A SETTIMEOUT ------------------
// /*In JavaScript, we use setTimeout higher order function to
// execute some action at some time in the future. The setTimeout
// global method take a callback function and a duration as a
// parameter. The duration is in milliseconds and the callback
// wait for that amount of time.*/


// // setInterval(callback, 1000)
// // let riasCounter = 0;
// // setTimeout(()=>{
// //     console.log(riasCounter, "Rias Gremory")
// //     riasCounter++;
// // }, 3000)


//-----------------FUNCTIONAL PROGRAMMING-------------------
/*Instead of writing regular loop, latest version of
JavaScript introduced lots of built in methods which can
help us to solve complicated problems. All builtin
methods take callback function. In this section, we will
see forEach, map, filter, reduce, find, every, some, and sort.
*/

//-------------forEach-----------------
/*forEach: Iterate an array elements. We use forEach
only with arrays. It takes a callback function with
elements, index parameter and array itself.
The index and the array optional.*/
// const listItems_withIndex = (arr)=>{
//     arr.forEach((element, index) => {
//         console.log(index, element)
//     });
// }
// setTimeout(listItems_withIndex.bind(null, [1, 2, 3, 4, 5]), 3000);
// setTimeout(()=>{
//     console.log("Your task is being executed.")
// }, 1000);

// const person = {
//     name: "Alice",
//     greet: function(greeting) {
//       console.log(`${greeting}, ${this.name}!`);
//     }
//   };
  
//   const sayHelloToAlice = person.greet.bind(person, "Hello");
//   sayHelloToAlice(); // Output: "Hello, Alice!"


