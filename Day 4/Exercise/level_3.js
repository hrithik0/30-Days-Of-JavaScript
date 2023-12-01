/*

Q. Write a program which tells the number of days in a month.

Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days.

Q. Write a program which tells the number of days in a month, now consider leap year.

==>Both above questions are solved in one single solution below:

Solution:
function getDaysMonths(month, years = undefined) {
    month = month.trim().toLowerCase()
    const months = {
        'january': { days: 31, index: 0 },
        'february': { days: 28, index: 1 },
        'march': { days: 31, index: 2 },
        'april': { days: 30, index: 3 },
        'may': { days: 31, index: 4 },
        'june': { days: 30, index: 5 },
        'july': { days: 31, index: 6 },
        'august': { days: 31, index: 7 },
        'september': { days: 30, index: 8 },
        'october': { days: 31, index: 9 },
        'november': { days: 30, index: 10 },
        'december': { days: 31, index: 11 },
    }
    const dateObj = new Date();
    let year
    if (years == undefined) {
        year = dateObj.getFullYear()  
    }
    else {
        dateObj.setFullYear(years);
        year = years
    }
    if (year % 4 == 0 && year % 100 != 0) {
        months['february'].days = 29;
    }
    else if (year % 100 == 0 && year % 400 == 0) {
        months['february'].days = 29;
    }
    console.log(`${month} has ${months[month].days} days.`);
}


getDaysMonths('february')
*/