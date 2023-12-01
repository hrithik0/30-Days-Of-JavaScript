function getDaysMonths(month) {
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
    const year = dateObj.getFullYear()
    if (year % 4 == 0 && year % 100 != 0) {
        months['february'].days = 29;
    }
    else if (year % 100 == 0 && year % 400 == 0) {
        months['february'].days = 29;
    }
    console.log(`${month} has ${months[month].days} days.`);
}


function getDaysMonths(month, years) {
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
    dateObj.setFullYear(years);
    const year = dateObj.getFullYear()
    if (year % 4 == 0 && year % 100 != 0) {
        months['february'].days = 29;
    }
    else if (year % 100 == 0 && year % 400 == 0) {
        months['february'].days = 29;
    }
    console.log(`${month} has ${months[month].days} days.`);
}

getDaysMonths('february');
getDaysMonths('february', 2020);