const numbers = [2, 5, 3, 1, 4, 9, 7, 8, 6];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// const reverseNumbers = numbers.reverse();
// console.log(reverseNumbers);

// const friends = ['kabil', 'nabil', 'chadni', 'afjal', 'topu', 'badsha'];
// const sortFriend = friends.sort().reverse();
// console.log(sortFriend);


// sorting big numbers
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortBigNumbers);