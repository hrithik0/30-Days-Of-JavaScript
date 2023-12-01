// // //-----------------SET----------------
// // /*Set is a collection of elemnts. Set can only contains unique elements.
// // Let us see how to create a set in the section below
// // */
// // const companies = new Set();
// // console.log(companies)

// // const languages = [
// //     'English',
// //     'Finnish',
// //     'English',
// //     'French',
// //     'Spanish',
// //     'English',
// //     'French',
// // ]

// // const setOfLanguages = new Set(languages);
// // console.log(setOfLanguages)


// // console.log(setOfLanguages)
// // // for(const language of setOfLanguages){
// // //     console.log(language)
// // // }



// /// -------------Adding an element to a set-----------------

// const companies = new Set();
// console.log(companies.size);
// companies.add({name: "hrithik"});
// const copyComp = new Set(companies);
// const comp = {name : "Jade"}
// console.log(copyComp.forEach(com=>{
//     if(com.name !== comp.name){
//         companies.add(comp)
//     }
//     return com
// }))
// const compArray = new Array("Google", "Microsoft", "Amazon");
// const new_copyComp = new Set(compArray.reduce((companies, company)=>{
//     companies.add(company);
//     return companies
// }, companies))

// console.log(companies, new_copyComp)

// console.log(companies.delete("Google"), new_copyComp)


// function checkObject_present(obj, set){
//     return set.has(obj)
// }

// console.log(checkObject_present(comp, companies))
// companies.clear()
// console.log(companies)


// let a = [1, 2, 3, 4, 5]

// let b = [3, 4, 5, 6]
// let c = [...a, ...b];
// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// const intersection = new Set(a.filter(num=>{
//     return b.includes(num);
// }))
// console.log(intersection)

// const aMinusB = new Set();
// A.forEach(num=>{
//     if(!B.has(num)){
//         aMinusB.add(num);
//     }
// })
// console.log(aMinusB)



// //-----------------------Map-----------------
const map = new Map();
map.set("Hrithik", {
    nickname : "chotu",
    phone : "--------",
    age : 20,
    getInfo : function(){
        return (compeleteInfo = ()=>{
            return this;
        })
    }
})
console.log(map.get("Hrithik").getInfo()())

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const countriesMap = new Map(countries);
console.log(countriesMap.has("Finland"))

///adding new values to the map
countriesMap.set("India", "New Delhi");
console.log(countriesMap)
for(const [country, capitalCity] of countriesMap){
    console.log(country, capitalCity);
}