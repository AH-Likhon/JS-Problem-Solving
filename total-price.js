/* const cart = [
    { name: 'Laptop', price: 60000, quantity: 1 },
    { name: 'Mobile', price: 25000, quantity: 1 },
    { name: 'Shirt', price: 500, quantity: 6 },
    { name: 'Watch', price: 1500, quantity: 3 },
];

let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal); */

/* let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum); */


// how will you delete the age property of the object student in javascript?
/* const student = {
    name: 'John',
    age: 17
};

console.log(student.age);
// expected output: "John"

delete student.age;

console.log(student.age);
console.log(student);

 */

// How will you change the last element of an array in javascript?
let s = [3, 2, 3, 4, 5];
function Gfg(s) {
    // storing the first item in a variable 
    let f = s[0];
    // storing the last item 
    s[s.length - 1] = 10;
    // printing output to screen
    // return 'First element is ' + f;
    return s[s.length - 1];

}
const result = Gfg(s); // calling the function
console.log(result);