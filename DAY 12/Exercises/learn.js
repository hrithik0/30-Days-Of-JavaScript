//-------------REGULAR EXPRESSIONS-----------------
//-------------RegExp Parameters-----------------
/*
//Pattern:
A pattern could be a text or any from of pattern which some sort of similarity.
for instance the word spam in an email could be a pattern
we are interested to look for in an email or a phone number
format number might be our interest to look for.

//Flags:
Flags are optional parameters in a regular expression which determine the
type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text.
i: case insensitive flag(it searches for both lowercase and uppercase).
m: multiline

*/

//------------Creating a pattern with RegExp Constructor----------
// let pattern = 'love'
// let regEx = new RegExp(pattern)

//-------RegExpp Object Methods------------
// const str = 'I love JavaScript.\nNew Love found.'
// const pattern = /love/
// const result = new RegExp(pattern, 'gi')
// console.log(result.exec(str))
// function firstName(name){
//     console.log(name)
// }
// const callback = firstName.bind(null, 'hrithik');
// callback()

// const regExContructor = new RegExp('love', 'gi');
// console.log(regExContructor.exec(str))


//TESTING FOR A MATCH
// const str = 'i love javascript';
// const pattern = /love/
// const result = new RegExp(pattern, 'gi').test(str);
// console.log(result)

//ARRAY CONTAINING ALL OF THE MATCH
// const str = 'i love javascript \n Love '
// const pattern = /love/gi
// const result = str.match(pattern)
// const newResult = result.reduce((string, current_str)=>{
//     return string.concat(current_str, " ");
// }, "").trim().length
// console.log(newResult)


//SEARCHING FOR A MATCH
// const str = 'i love javascirpt'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result)

//REPLACING A SUBSTRING
// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
// console.log(matchReplaced)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// matchReplaced = txt.replace(/%| %%/g, '').split(' ');
// const [first, second, ...rest] = matchReplaced
// console.log(first, second, rest.join(" "))
const result = /^[%]/g;
console.log(txt.match(result))