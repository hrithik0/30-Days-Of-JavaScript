const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const emptyArray = new Array();
const fiveArray = [1, 2, 3, 4, 5];
console.log(fiveArray.length);
const fiveArray_length = fiveArray.length;
console.log(fiveArray[0], fiveArray[fiveArray_length % 2 != 0 ? (((fiveArray_length + 1) / 2) - 1) : fiveArray_length / 2], fiveArray[fiveArray_length - 1]);

const mixedDataTypes = [1, true, "string", undefined, null, { name: "hrithik" }];

let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
]

itCompanies.forEach(company => {
    console.log(company);
})

console.log(itCompanies.length);
const itCompanies_length = itCompanies.length;

console.log(itCompanies[0], itCompanies[itCompanies_length % 2 != 0 ? (((itCompanies_length + 1) / 2) - 1) : itCompanies_length / 2], itCompanies[itCompanies_length - 1])

let counter = itCompanies_length - 1;
while (counter != -1) {
    itCompanies[counter] = itCompanies[counter].toUpperCase();
    counter--
}
console.log(itCompanies)

console.log(itCompanies.join(','));

const company = "";

if (itCompanies.includes(company)) {
    console.log(company, "Exists!");
}
else {
    console.log(company, "Not found");
}
const itCompanies_filtered = new Array();
// itCompanies.flatMap((value, index, flattenArray)=>{
//     value.match(/0+/gi).length;
//     flattenArray.push(value);
// })

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

itCompanies.sort();
console.log(itCompanies)

itCompanies.reverse();
console.log(itCompanies)

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(-3));

console.log(itCompanies[Number.parseInt(itCompanies.length / 2)]);

console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));

console.log(itCompanies.pop());

console.log(itCompanies.slice(0));
console.log(itCompanies.splice(0))