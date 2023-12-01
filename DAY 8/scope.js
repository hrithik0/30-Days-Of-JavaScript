a = 'JavaScript'
b = 10
function letsLearnScope(){
    console.log(a, b)
    if (true){
        console.log(a, b);
    }

}
letsLearnScope()
console.log(a, b);
