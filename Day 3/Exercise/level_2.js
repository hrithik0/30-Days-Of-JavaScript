/*

Q. Write a script that prompt the user to enter base and height of the triangle and
calculate an area of a triangle (area = 0.5 x b x h).

Solution:
let base, height
base = Number(window.prompt("Enter base: "))
height = Number(window.prompt("Enter height: "))
console.log(`The area of the triangle is ${(0.5 * base * height).toFixed(2)})



Q. Write a script that prompt the user to enter side a, side b, and side c of the
triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Solution:
let a, b, c
a = Number(window.prompt(Enter side a: ))
b = Number(window.prompt(Enter side b: ))
c = Number(window.prompt(Enter side c: ))
console.log(`The perimeter of the triangle is ${a + b + c}`)



Q. Get length and width using prompt and calculate an area of rectangle
(area = length x width and the perimeter of rectangle (perimeter = 2 x
(length + width))

Solution:
const width = Number(window.prompt("Width: "))
const length = Number(window.prompt("Length: "))
const [area, perimeter] = [width*Length, 2*(Length + Width)]
console.log(`Area of the rectangle is ${area}\nPerimeter of the rectangle is ${perimeter}`)



Q. Get radius using prompt and calculate the area of a circle (area = pi x r x r)
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

Solution:
const radius = Number(window.prompt("Radius: "))
const [area, circum] = [(Math.pi()*Math.pow(radius, 2)).toFixed(2), (2*Math.pi()*radius).toFixed(2)]
console.log(`Area of the circle is ${area}\nCircumference of the circle is ${circum})



Q. Calculate the slope, x-intercept and y-intercept of y = 2x -2

Solution:
const x = 0, y = 0
const [x_intercept, y_intercept] = [(y+2)/2, (2*x - 2)]
const firstSlope = 2;
console.log(slope, x_intercept, y_itntercept)



Q. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Solution:
const secondSlope = (10 - 2)/(6 - 2)
console.log(slope)



Q. Compare the slope of above two questions.

Solution:
if (firstSlope > secondSlope){
    console.log("First slope is bigger than second slope")
}

else if (firstSlope < secondSlope){
    console.log("Second slope is bigger than first slope")
}

else {
    console.log("Both slopes are equal")
}



Q. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

Solution:
const discremenant = Math.pow(6, 2) - (4 * 9)
if (discremenant === 0){
    console.log(`X values are : ${-6/2}, ${-6/2}`)
}
else{
    console.log(`X values are : ${(-6 + Math.sqrt(discremenant))/2}, ${(-6 - Math.sqrt(discremenant))/2}`)
}



Q. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120

Solution:
const hours = Number(window.prompt("Enter hours: "))
const ratePerHour = Number(window.prompt("Enter rate per hour: "))
console.log(`Your weekly earning is ${hours * ratePerHour * 168}`)



Q. If the length of your name is greater than 7 say, your name is long else say your name is short.

Solution:
const name = "your-name"
name > 7 ? console.log("Your name is long.") : console.log("Your name is short.")



Q. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh

Solution:
const firstName = "your-name"
const lastName = "your-surname";
lastName.length > firstName.length ? console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`) : console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);



Q. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.

Solution:
myAge > yourAge ? console.log("I am ${myAge - yourAge} years older than you.") : console.log("You are ${yourAge - myAge} years older than me.")



Q. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if
not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.

Solution:
const dateObj = new Date()
const currentYear = Number(dateObj.getFullYear())
const presentAge = currentYear - birthYear
const birthYear = Number(window.prompt("Enter birth year: "))
(presentAge >= 18 && persentAge > 0) ? console.log(`You are ${presentAge}. You are old enough to drive`) : console.log(`You are ${presentAge}. You will be allowed to drive after ${18 - presentAge} years.`)



Q. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.

Solution:
const getLifeSeconds = function (years) {
    if (years <= 100)
        return years * (365 * 24 * 60 * 60);
    return -1;
}(100);

console.log(`You lived ${getLifeSeconds} seconds.`);



Q. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

Solution:
const dateObj = new Date();
console.log(`${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`);

console.log(`${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`);

console.log(`${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`);

*/