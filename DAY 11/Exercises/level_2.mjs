import { users } from "./level_1.mjs";
for(const {name, scores, skills, age} of users){
    if(skills.length < 2){
        console.log(name, scores, skills, age)
    }
}