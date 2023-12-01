for(let i = 0; i < 5;){
    console.log(i);
    i++;
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = [];
console.log(countries.map(country=>{
    newArr.push(country.toUpperCase());
    return country.toUpperCase();
}));
console.log(newArr)

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

const numbers = [1, 2, 3, 4, 5];
const total = function(num1, num2){
    return num1 + num2;
}
console.log(numbers.reduce(total));

const newNumbers = numbers.slice(-numbers.length);
console.log(newNumbers)

//DO-WHILE LOOP
let counter = 0;
do{
    console.log(++counter);
}while(counter != 5);


//FOR OF LOOP
for(const number of numbers){
    console.log(number);
    //setTimeout(()=>{console.log("Hello")}, 2000);
};


