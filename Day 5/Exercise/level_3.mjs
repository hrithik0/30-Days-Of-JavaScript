// import countriesObj from "./countries.mjs";
// const countriesArray = countriesObj.countries;
/*

Q. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

@ Sort the array and find the min and max age
=>
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


@ Find the median age(one middle item or two middle items divided by two)
=>
function getMedian() {
    const ages_length = ages.length
    const index = Math.floor(ages_length / 2)
    if (ages_length % 2 == 0)
        return (ages[index - 1] + ages[index]) / 2
    return ages[index]
}
console.log(getMedian())


@ Find the average age(all items divided by number of items)
=>
const averageAge = (function () {
    const totalAge = ages.reduce((total, current) => {
        // console.log(total, current);
        return total + current;
    }) / ages.length;
    return totalAge.toFixed(3);
})();

console.log(averageAge)


@ Find the range of the ages(max minus min)
=>
const rangeOfAge = maxAge - minAge;
console.log(rangeOfAge)


@ Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first
ten countries from the countries array
=>
console.log(Math.abs(minAge - averageAge) >= Math.abs(maxAge - averageAge));

console.log(countriesArray.slice(0, 10));



Q. Find the middle country(ies) in the countries array

Solution:
function getMiddleCountries() {
    const countries_length = countriesArray.length;
    const index = Math.floor(countries_length / 2);
    if (countries_length % 2 == 0)
        return (`${countriesArray[index - 1]} ${countriesArray[index]}`);
    return countriesArray[index];
}
console.log(getMiddleCountries())



Q. Divide the countries array into two equal arrays if it is even. If countries array is not
even , one more country for the first half.

Solution:
function divideArray() {
    const countries_length = countriesArray.length;
    if (countries_length % 2 == 0)
        return [[...countriesArray.slice(0, countries_length / 2)], [...countriesArray.slice(countries_length / 2, countries_length)]];
    return [[...countriesArray.slice(0, Math.ceil(countries_length / 2))], [...countriesArray.slice(Math.ceil(countries_length / 2), countries_length)]];
}

console.log(divideArray());

*/
