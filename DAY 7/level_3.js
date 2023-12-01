// function userIdGeneratedByUser(number, char_length) {
//     let userId_obj = { "id": [] };
//     let lowerBound = 0, upperBound = 0;
//     while (number--) {
//         let userId = "";
//         let limit = char_length;
//         while (limit--) {
//             switch (Math.floor((Math.random() * 3))) {
//                 case 0:
//                     lowerBound = 97;
//                     upperBound = 102;
//                     break;
//                 case 1:
//                     lowerBound = 48;
//                     upperBound = 57;
//                     break;
//                 case 2:
//                     lowerBound = 65;
//                     upperBound = 90;
//                     break;
//             }
//             userId += String.fromCharCode(lowerBound + Math.floor(Math.random() * (upperBound + 1 - lowerBound)))
//         }
//         userId_obj.id.push(userId)
//     }
//     return userId_obj;
// }
// console.log(userIdGeneratedByUser(20, 15));

function modifyArray(array) {
    if (array.length < 5) {
        return "Not Found.";
    }
    array[4] = array[4].toUpperCase();
    return [...array];
}
//console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango']));

function isPrime(number) {
    if (number <= 1) {
        return "Invalid Input.";
    }
    for (let factors = 2; factors * factors <= number; factors++) {
        if (number % factors == 0) {
            return false;
        }
    }
    return true;
}
//console.log(isPrime(10002847));



function isUnique(array) {
    const array_string = array.join(' ');
    for (const element of array) {
        const stringElement = element.toString();
        if (array_string.indexOf(stringElement) == array_string.lastIndexOf(stringElement)) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

//console.log(isUnique([1, 2, 3, 4]))

function check_same_dateTypes(array) {
    array = array.map(element => {
        return typeof (element);
    });
    for (const data of array) {
        if (array[0] == data) {
            continue
        }
        else {
            return false;
        }
    }
    return true;
}
// let 83jsdlj88
// console.log(check_same_dateTypes([1, 2, 3, '4']))
function isValidVariable(variable_name) {
    const variable_array = variable_name.match(/[a-z$_]+[a-z0-9$_]+/gi);
    let gen_var_name = ""
    for (const variable of variable_array) {
        if (variable.length == variable_name.length) {
            return {
                result: true,
                val: variable,
            };
        }
        gen_var_name += variable;
        continue;
    }
    return {
        result: false,
        val: gen_var_name,
    }
}


function sevenRandomNumbers() {
    let array = [];
    let randomNum = Math.floor(Math.random() * 10)
    array.push(randomNum);
    while (array.length != 7) {
        randomNum = Math.floor(Math.random() * 10)
        const temp_array = new Array().concat(array);
        temp_array.push(randomNum);
        if (isUnique(temp_array)) {
            array.push(randomNum);
        }
        else {
            continue;
        }
    }
    return array
}
console.log(sevenRandomNumbers());


function reverseCountries(countries_array) {
    return countries_array.reduce(([...newArray], country) => {
        newArray.unshift(country);
        return newArray
    }, [])
}
console.log(reverseCountries(['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']));