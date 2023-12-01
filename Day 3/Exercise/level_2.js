// const area = 0.5 * Number(window.prompt("Enter base: ")) * Number(window.prompt("Enter height: "));
// console.log(`The area of the traingle is ${area}`);

const name = "Hrihtik";

name.length > 7 ? console.log("Long") : console.log("Short");

const firstName = name;
const lastName = "Karmakar";

lastName.length > firstName.length ? console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`) : console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);

const getLifeSeconds = function(years){
    if (years <= 100)
        return years * (365 * 24 * 60 * 60);
    return -1;
}(100);

console.log(`You lived ${getLifeSeconds} seconds.`);

const dateObj = new Date();
console.log(`${dateObj.getFullYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`);

console.log(`${dateObj.getDate()}-${dateObj.getMonth()+1}-${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`);

console.log(`${dateObj.getDate()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`);
