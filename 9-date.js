let val;

const today = new Date();


let birthday = new Date();

const arr = ["jan", "Feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];

val = today;
val = today.getMonth();
val = arr[today.getMonth()];
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// 1970
val = today.getTime();

birthday.setMonth(0);
birthday.setDate(15);
birthday.setFullYear(2024);
birthday.setHours(5);
birthday.setMinutes(5);
birthday.setSeconds(5);

console.log(val);
console.log(birthday);