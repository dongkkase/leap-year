function leapYear(year)
{
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
 
console.log(leapYear(2019)); // false
console.log(leapYear(2020)); // true
console.log(leapYear(2021)); // false
console.log(leapYear(2022)); // false
console.log(leapYear(2023)); // false
console.log(leapYear(2024)); // true
console.log(leapYear(2025)); // false

// or

function leapYear(year)
{
    return new Date(year, 1, 29).getDate() === 29;
}
 
console.log(leapYear(2019)); // false
console.log(leapYear(2020)); // true
console.log(leapYear(2021)); // false
console.log(leapYear(2022)); // false
console.log(leapYear(2023)); // false
console.log(leapYear(2024)); // true
console.log(leapYear(2025)); // false