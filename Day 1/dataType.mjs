import  variable from "./variable.mjs"

for(const key of (Object.keys(variable))){
    console.log(typeof variable[key])
}