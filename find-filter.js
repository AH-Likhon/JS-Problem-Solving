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
console.log(colors);