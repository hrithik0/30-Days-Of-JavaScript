console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

let num = '10'
num = parseInt(num);

const decimal = Math.round(parseFloat('9.8'));

console.log('python'.includes('on'), 'jargon'.includes('on'))

console.log("I hope this course is not full of jargon".includes('jargon'));

console.log(Math.floor(Math.random() * 101));
console.log(50 * Math.floor(Math.random() * 51));

console.log(Math.floor(Math.random() * 256));

console.log("JavaScript".charAt(Math.floor(Math.random() * "javascript".length)));

let count = 5, patternNum = 1;
while(count){
    console.log(`${patternNum} 1 ${patternNum} ${patternNum ** 2} ${patternNum ** 3} `)
    count--;
    patternNum++;
}

const problem = 'You cannot end a sentence with because because because is a conjunction'

const extract = problem.substring(problem.indexOf("because"), problem.lastIndexOf("because") + "because".length);
console.log(extract)