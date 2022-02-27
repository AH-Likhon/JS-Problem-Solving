function isLeapYear(year) {
    if (((year % 400 == 0) || (year % 4 == 0)) && (year % 100 != 0)) {
        console.log('This year is leap year');
    } else {
        console.log('This year is not leap year');
    }
}

const myYear = 2440;
// const myLeapYear = isLeapYear(myYear);
isLeapYear(myYear);
// console.log(myLeapYear, 'year is leap year');
