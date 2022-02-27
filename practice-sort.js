const numbers = [13, 2, 50, 23, 15, 67, 58, 53, 82, 19, 32, 48, 99, 81, 75];

const sorting = numbers.sort(function (a, b) {
    return a - b;
});

console.log(sorting);