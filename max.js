function findLargest(num1, num2, num3) {
    // const largestNumber = Math.min(num1, num2, num3);
    const largestNumber = Math.max(num1, num2, num3);
    return largestNumber;

    // if (num1 < num2 && num1 < num3) {
    //     return num1;
    // } else if (num2 < num1 && num2 < num3) {
    //     return num2;
    // } else {
    //     return num3;
    // }
}

const largest = findLargest(321, 124, 425);
console.log('Minimum number is', largest);