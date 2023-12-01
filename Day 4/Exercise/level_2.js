/*

Q. Write a code which can give grades to students according to theirs scores:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

Solution:
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



Q. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

Solution:
const getSeason = function(month){
    month = month.trim().toLowercase()
    if(month == "september" || month == "october" || month == "november"){
    return ("Autumn");
    }
    else if(month == "december" || month == "january" || month == "february"){
        return ("Winter");
    }
    else if(month == "march" || month == "April" || month == "may"){
        return ("Spring");
    }
    else{
        return ("Summer");
    }
}



Q. Check if a day is weekend day or a working day. Your script will take day as
an input.

What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.

Solution:
const day = prompt("What is the day today? ")
const getDayStatus = function (day) {
    day = day.toLowerCase();
    if (day == "saturday" || day == "sunday") {
        day = day.replace(day[0], day[0].toUpperCase());
        return (`${day} is a weekend.`);
    }
    day = day.replace(day[0], day[0].toUpperCase());
    return (`${day} is a working day.`);
}

getDayStatus(day)
*/