const numbers = [5, 17, 28, 40, 51, 8, 2, 31, 6, 11];
const bigNumbers = numbers.filter(number => number > 30);
// console.log(bigNumbers);


const products = [
    { name: 'Water Bottle', price: 2000, color: 'Yellow' },
    { name: 'Note Book', price: 1500, color: 'Black' },
    { name: 'Sun Glass', price: 200, color: 'Black' },
    { name: 'Mobile Phone', price: 30000, color: 'Navy Blue' },
    { name: 'A4Tech Keyboard', price: 850, color: 'Red' },
];

const prices = products.filter(product => product.price > 1000);
// console.log(prices);
// const colors = products.filter(product => product.color == 'Black');
// console.log(colors);


// find
const colors = products.find(product => product.color == 'Black');
// console.log(colors);


const myAwesomeArray = [1, 2, 3, 4, 5]
// myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
const sum = myAwesomeArray.map(x => x * x).reduce((total, value) => total + value);

console.log(sum); // 55

// NB: filter method returns a new array with all elements those are satisfy the given condition. find method returns the first element of the given array which satisfies the given condidtion.


// forEach vs map

// 1. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.

// 2. map() is chainable that means that we can apply/use reduce(), sort(), filter() and so on after performing a map() method on an array, but forEach is not chainable because it returns undefined.

// 3. map() is immutable and forEach() is mutable (changeable)

// source: https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/


