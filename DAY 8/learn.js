//---------CREATING AN EMPTY OBJECT--------

/* =========CURIOUSITY DRIVEN NOT EMPTY OBJECT LEAVE THIS========


// const person = new Object();
// Object.defineProperties(person,{
//     name : {
//         value : {
//             0 : {
//                 value : "Hrihtik",
//                 writable : false,
//             },
//             1 : {
//                 value : "Jade",
//                 writable : false,
//             }
//         },
//         writable : true,
//     },
//     age : {
//         value : 20,
//         writable : true,
//     }
// })
*/


// const newPerson = Object.assign({});   //EMPTY OBJECT



// ---------CREATING OBJECT WITH VALUES--------

// const rectangle = {
//     length: 20,
//     width: 20
//   }
//   console.log(rectangle) // {length: 20, width: 20}

//   const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     isMarried: true
//   }
//   console.log(person)


//--------------GETTING VALUES FROM AN OBJECT--------

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}

//   // accessing values using .
//   console.log(person.firstName)
//   console.log(person.lastName)
//   console.log(person.age)
//   console.log(person.location) // undefined

//   // value can be accessed using square bracket and key name
//   console.log(person['firstName'])
//   console.log(person['lastName'])
//   console.log(person['age'])
//   console.log(person['age'])
//   console.log(person['location']) // undefined

//   // for instance to access the phone number we only use the square bracket method
//   console.log(person['phone number'])

