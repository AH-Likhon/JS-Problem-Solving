/* const fibonacci = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
} */


/* function fiboSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacci = fiboSeries(10);
console.log(fibonacci); */


// eror handling

// function fiboSeries(num) {

//     if (typeof num != 'number') {
//         return 'please give a valid number';
//     } else if (num < 2) {
//         return 'please give a positive number greater than 2';
//     }

//     const fibo = [0, 1];
//     for (let i = 2; i < num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fibonacci = fiboSeries(13);
// console.log(fibonacci);



// fibonacci series using recursive function

function fiboSeries(n) {
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    } else {
        const fibo = fiboSeries(n - 1);
        fibo[n] = fibo[n - 1] + fibo[n - 2];
        return fibo;
    }
}

const fibonacciSeries = fiboSeries(6);
console.log(fibonacciSeries);