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

/* const selected = [];

for (let i = 0; i < 10; i++) {
    const random = Math.random() * 100;
    const round = Math.round(random);
    if (selected.indexOf(round) === -1) {
        selected.push(round);
    }
}

console.log(selected); */



// for (var a = [], i = 0; i < 10; ++i) a[i] = i;


// http://stackoverflow.com/questions/962802#962890
// function shuffle(array) {
//     var tmp, current, top = array.length;
//     if (top) while (--top) {
//         current = Math.floor(Math.random() * (top + 1));
//         tmp = array[current];
//         array[current] = array[top];
//         array[top] = tmp;
//     }
//     return array;
// }

// a = shuffle(a);
// console.log(a);
