function getFactorial(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const myFisrtFactorial = getFactorial(5);
console.log('Factorial of the number is ', myFisrtFactorial);

const mySecondFactorial = getFactorial(7);
console.log('Factorial of the number is ', mySecondFactorial);