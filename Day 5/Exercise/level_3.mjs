import countries from './countries.mjs';


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//METHOD 1 TO FIND THE MIN AND MAXIMUM AGE USING REDUCE METHOD
const min = ages.reduce((num1, num2) => {
    if (num1 > num2) {
        return num2;
    }
    return num1;
})

const max = ages.reduce((num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    return num2;
})


//METHOD 2 TO SORT THE ARRAY IN ASCENDING ORDER FIRST THEN FIND THE MIN AND MAX
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log(min, minAge);
console.log(max, maxAge);

ages.push(28);
console.log(ages)

function getMedian() {
    const ages_length = ages.length;
    const index = ages_length / 2;
    if (ages_length % 2 == 0)
        return (ages[index - 1] + ages[index]) / 2;
    return ages[Math.floor(index)];
}

console.log(getMedian())


const averageAge = (function () {
    const totalAge = ages.reduce((total, current) => {
        // console.log(total, current);
        return total + current;
    }) / ages.length;
    return totalAge.toFixed(3);
})();

console.log(averageAge)

const rangeOfAge = maxAge - minAge;

console.log(Math.abs(minAge - averageAge) >= Math.abs(maxAge - averageAge));

console.log(countries.slice(0, 10));

function getMiddleCountries() {
    const countries_length = countries.length;
    const index = countries_length / 2;
    if (countries_length % 2 == 0)
        return (`${countries[index - 1]} ${countries[index]}`);
    return countries[Math.floor(index)];
}
// console.log(countries, countries.length)
console.log(getMiddleCountries())
countries.pop();
function divideArray() {
    const countries_length = countries.length;
    if (countries_length % 2 == 0)
        return [[...countries.slice(0, countries_length / 2)], [...countries.slice(countries_length / 2, countries_length)]];
    return [[...countries.slice(0, Math.ceil(countries_length / 2))], [...countries.slice(Math.ceil(countries_length / 2), countries_length)]];
}

console.log(divideArray());