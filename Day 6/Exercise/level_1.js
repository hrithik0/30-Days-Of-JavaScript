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

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// let iterator = 10;
// for(let i = 0; i <= iterator ; i++){
//     console.log(i);
// }

// do{
//     console.log(iterator);
//     iterator--;
// }while(iterator != -1)

// iterator++;

// while(iterator <= 10){
//     console.log(iterator);
//     iterator++;
// }

function Loop(limit){
    let iterator = 0;
    do{
        console.log(iterator);
        iterator++;
    }while(iterator <= limit);
    console.log("Finished!")
};

function printPattern(pattern, rows){
    stringPattern = "";
    for(let i = 0; i < rows; i++){
        let j = i;
        while(j >= 0){
            stringPattern += pattern;
            j--;
        }
        console.log(stringPattern);
        stringPattern = "";
    }
}

printPattern("#", 2);