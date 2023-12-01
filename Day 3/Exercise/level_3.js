const dateObj = new Date();
console.log(`${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()} ${(dateObj.getHours() <= 9 ? `0${dateObj.getHours()}` : dateObj.getHours())}:${(dateObj.getMinutes() <= 9 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes())}`);
