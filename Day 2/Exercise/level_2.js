/*

Q. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down
and lifting people up.' by John Holmes teaches us to help one another.

Solution:
console.log("The quote 'There is no exercise better for the heart than reaching down
and lifting people up.' by John Holmes teaches us to help one another.")



Q. Using console.log() print out the following quote by Mother Teresa:

Solution:
console.log(`"Love is not patronizing and charity isn't about pity, it is about
love. Charity and love are the same -- with charity you give love, so don't just
give money but reach out your hand instead."`)



Q. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

Solution:
consol.log(typeof '10' === 10) //false



Q. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

Solution:
console.log(parseFloat('9.8') == 10) //false



Q. Check if 'on' is found in both python and jargon

Solution:
console.log('python'.includes('on') && 'jargon'.includes('on')) //true



Q. I hope this course is not full of jargon. Check if jargon is in the sentence.

Solution:
console.log('I hope this course is not full of jargon.'.includes('jargon)) //true



Q. Generate a random number between 0 and 100 inclusively.

Solution:
console.log(Math.floor(Math.random() * 101))



Q. Generate a random number between 50 and 100 inclusively.

Solution:
console.log(50 + Math.floor(Math.random() * 51))



Q. Generate a random number between 0 and 255 inclusively.

Solution:
console.log(Math.floor(Math.random() * 256))



Q. Access the 'JavaScript' string characters using a random number.

Solution:
console.log('JavaScript'.charAt(Math.floor(Math.random() * 'JavaScript'.length)))



Q. Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

Solution:
let pattern_num = 1
while(pattern_num < 6){
    console.log(`${pattern_num} 1 ${pattern_num} ${pattern_num ** 2} ${pattern_num ** 3}`)
    pattern)num++
}



Q. Use substr to slice out the phrase because because because from the following sentence:
'You cannot end a sentence with because because because is a conjunction'

Solution:
const toBeSearched = "because"
const text = 'You cannot end a sentence with because because because is a conjunction'
const startOfWord_because = text.search(toBeSearched)
const endOfWord_because = text.lastIndexOf(toBeSearched) + toBeSearched.length
console.log(text.substring(startOfWord_because, endOfWord_because))

*/