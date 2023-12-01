const age = Number(prompt("Enter your age: "));
age >= 18 ? console.log("You are old enough to drive.") : console.log(`You are left with ${18 - age} years to drive.`);


const checkEven = function(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}