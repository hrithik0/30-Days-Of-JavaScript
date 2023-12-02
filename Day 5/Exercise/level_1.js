/*

Q. Declare an empty array

Solution:
const emptyArray = new Array();



Q. Declare an array with more than 5 number of elements

Solution:
const fiveArray = [1, 2, 3, 4, 5];



Q. Find the length of your array

Solution:
console.log(fiveArray.length);



Q. Get the first item, the middle item and the last item of the array

Solution:
const fiveArray_length = fiveArray.length;
console.log(fiveArray[0], fiveArray[fiveArray_length % 2 != 0 ? (((fiveArray_length + 1) / 2) - 1) : fiveArray_length / 2], fiveArray[fiveArray_length - 1]);



Q. Declare an array called mixedDataTypes, put different data types in the array and find the length
of the array. The array size should be greater than 5

Solution:
const mixedDataTypes = [1, true, "string", undefined, null, { name: "hrithik" }];



Q. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft,
Apple, IBM, Oracle and Amazon

Solution:
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
]



Q. Print the array using console.log()

Solution:
console.log(itCompanies)



Q. Print the number of companies in the array

Solution:
console.log(itCompanies.length)



Q. Print the first company, middle and last company

Solution:
const count_itCompanies = itCompanies.length;
console.log(itCompanies[0], itCompanies[count_itCompanies % 2 != 0 ? (((count_itCompanies + 1) / 2) - 1) : count_itCompanies / 2], itCompanies[count_itCompanies - 1]);



Q. Print out each company

Solution:
const print = (param)=>{
    console.log(param);
}

itCompanies.forEach(print)



Q. Change each company name to uppercase one by one and print them out

Solution:
const toUpper_and_print = (param)=>{
    console.log(param)
    return param.toUpperCase()
}
itCompanies = itCompanies.map(toUpper_and_print)



Q. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are
big IT companies.

Solution:
const count_itComp = itCompanies.length
const bigItCom_phrase = itCompanies.slice(0, count_itComp - 2).join(', ) + " and " + itCompanies[count_itComp - 1]



Q. Check if a certain company exists in the itCompanies array. If it exist return the company else
return a text company is not found

Solution:
const checkComp_present = (itCompArray, comp)=>{
    itCompArray = itCompArray.map((comp)=>{
        return comp.toLowerCase()
    })

    itCompArray.includes(comp.toLowerCase()) ? return comp : return "Company is not found!"
}



Q. Filter out companies which have more than one 'o' without the filter method

Solution:
const itCompanies_filtered = new Array();
for (const itCompany of itCompanies) {
    const temp = itCompany.toLowerCase();
    const firstIndex = temp.indexOf('o');
    const secondIndex = temp.lastIndexOf('o');
    if (firstIndex != -1) {
        if (firstIndex != secondIndex)
            itCompanies_filtered.push(itCompany);
        continue
    }
    continue;
}
console.log(itCompanies_filtered)



Q. Sort the array using sort() method

Solution:
itCompanies.sort();
console.log(itCompanies)



Q. Reverse the array using reverse() method

Solution:
itCompanies.reverse()
console.log(itCompanies)



Q. Slice out the first 3 companies from the array

Solution:
console.log(itCompanies.slice(0, 3))



Q. Slice out the last 3 companies from the array

Solution:
console.log(itCompanies.slice(-3))



Q. Slice out the middle IT company or companies from the array

Solution:
const count_itComp = itCompanies.length
const index = Math.floor(count_itComp / 2)
count_itComp % 2 == 0 ? console.log(itCompanies.slice(index - 1, index + 1)) : console.log(itCompanies.slice(index, index + 1))



Q. Remove the first IT company from the array

Solution:
const temp_itComp = [...itCompanies]
console.log(temp.shift())



Q. Remove the middle IT company or companies from the array

Solution:
const count_itComp = itCompanies.length
const index = Math.floor(count_itComp / 2)
count_itComp % 2 == 0 ? console.log(itCompanies.splice(index - 1, 2)) : console.log(itCompanies.splice(index, 1))



Q. Remove the last IT company from the array

Solution:
console.log(itCompanies.pop())



Q. Remove all IT companies

Solution:
itCompanies.length = 0  // or use itCompanies = new Array()
console.log(itCompanies)

*/
