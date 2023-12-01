const getGrade = function(marks){
    if(marks >= 80 && marks < 101){
    return ("A");
    }
    else if(marks >= 70 && marks < 80){
        return ("B");
    }
    else if(marks >= 60 && marks < 70){
        return ("C");
    }
    else if(marks >= 50 && marks < 60){
        return ("D");
    }
    else{
        return ("F");
    }
}

const getDayStatus = function(day){
    day = day.toLowerCase();
    if(day == "saturday" || day == "sunday"){
        day = day.replace(day[0], day[0].toUpperCase());
        return (`${day} is a weekend.`);
    }
    day = day.replace(day[0], day[0].toUpperCase());
    return (`${day} is a working day.`);
}

console.log(getDayStatus('Monday'));