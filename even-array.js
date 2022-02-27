//How do I extract even elements of an Array?

function question0(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}

var ages = [4, 5, 7, 8, 14, 45, 76, 40, 42, 75, 76];
var even = question0(ages);
console.log(even);