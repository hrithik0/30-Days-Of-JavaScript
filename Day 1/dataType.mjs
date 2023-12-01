/*importing the contents of variable.mjs file as a object
with name variable
*/
import variable from './variable.mjs';

//function log's the datatypes of the contents present in the object
const logDataType = function (object) {
    for (const [key, val] of Object.entries(object)) {
        console.log(`Variable named ${key} holds a value of type ${typeof val}.`)
    }
}

logDataType(variable) //calling the function with variable object as its param
