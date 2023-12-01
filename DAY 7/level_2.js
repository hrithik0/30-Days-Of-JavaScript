function swapValues(num, num2) {
    return [num2, num];
}
let num = 1, num2 = 3;
[num, num2] = swapValues(num, num2);
console.log(num, num2)

function reverseArray(array) {
    const newArray = [];
    while (array.length != 0) {
        newArray.push(array.pop());
    }
    return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]))

function capitalizeArray(array) {
    return array.map(element => {
        if (element.length > 1)
            return element[0].toUpperCase() + element.slice(0, element.length).toLowerCase()
        return element.toUpperCase();
    })
}

console.log(capitalizeArray(['a', 'b', 'c']))

function removeItem(array, index) {
    array.splice(index, 1);
    return array;
}
console.log(removeItem(['A', 'B', 'C'], 1))

function sumOfNumbers(num) {
    return (num / 2) * (num + 1);
}
console.log(sumOfNumbers(100));

function sumOfOdds(num) {
    if (num % 2 == 0) {
        num -= 1;
    }
    return ((num + 1) * (num + 1)) / 4;
}
console.log(sumOfOdds(5));

function sumOfEvens(num) {
    if (num % 2 != 0) {
        num -= 1;
    }
    return ((num + 2) * num) / 4;
}

console.log(sumOfNumbers(8), sumOfEvens(8), sumOfOdds(8));

function evenAndOdds(num) {
    let evenCounter = 0, oddCounter = 0;
    if (num % 2 == 0) {
        evenCounter = (num + 2) / 2;
        num -= 1;
        oddCounter = (num + 1) / 2;
    }
    else {
        oddCounter = (num + 1) / 2;
        num -= 1;
        evenCounter = (num + 2) / 2;
    }
    return { "evens": evenCounter, "odds": oddCounter };


}
console.log(evenAndOdds(100));


function sum(...args) {
    let total = 0;
    for (const num of args) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5))

function randomUserIp() {
    let ipString = "";
    ipString += Math.floor(Math.random() * 256).toString() + "."
    ipString += Math.floor(Math.random() * 256).toString() + "."
    ipString += Math.floor(Math.random() * 256).toString() + "."
    ipString += Math.floor(Math.random() * 256).toString();
    return ipString;
}
console.log(randomUserIp());


function randomMacAddress() {
    let counter = 1;
    let macAddress = "";
    let lowerBound = 0, upperBound = 0;
    while (counter <= 12) {
        switch (Math.floor((Math.random() * 2))) {
            case 0:
                lowerBound = 97;
                upperBound = 102;
                break;
            case 1:
                lowerBound = 48;
                upperBound = 57;
                break;
        }
        macAddress += String.fromCharCode(lowerBound + Math.floor(Math.random() * (upperBound + 1 - lowerBound)))
        if (counter % 2 == 0 && counter != 12) {
            macAddress += ":"
        }
        counter++;
    }
    return macAddress;

}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
    let counter = 0;
    let hexaNumber = "##";
    let lowerBound = 0, upperBound = 0;
    while (counter < 6) {
        switch (Math.floor((Math.random() * 2))) {
            case 0:
                lowerBound = 97;
                upperBound = 102;
                break;
            case 1:
                lowerBound = 48;
                upperBound = 57;
                break;
        }
        hexaNumber += String.fromCharCode(lowerBound + Math.floor(Math.random() * (upperBound + 1 - lowerBound)))
        counter++;
    }
    return hexaNumber;
}

console.log(randomHexaNumberGenerator())

function userIdGenerator(limit) {
    let userId = "";
    let lowerBound = 0, upperBound = 0;
    while (limit--) {
        switch (Math.floor((Math.random() * 3))) {
            case 0:
                lowerBound = 97;
                upperBound = 102;
                break;
            case 1:
                lowerBound = 48;
                upperBound = 57;
                break;
            case 2:
                lowerBound = 65;
                upperBound = 90;
                break;
        }
        userId += String.fromCharCode(lowerBound + Math.floor(Math.random() * (upperBound + 1 - lowerBound)))
    }
    return userId;
}
console.log(userIdGenerator(7));

