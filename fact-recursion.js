function getFactorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}

const myFactorial = getFactorial(5);
console.log(myFactorial);