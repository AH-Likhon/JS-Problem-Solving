/* function largestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element > largest) {
            largest = element;
        }
    }

    return largest;
}

const age = [12, 45, 35, 54, 75, 24, 32];
const oldest = largestNumber(age);

console.log(oldest); */

function smallestNumber(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element < smallest) {
            smallest = element;
        }
    }

    return smallest;
}

const age = [45, 12, 53, 64, 32, 5, 85, 45, 110, 83, 98, 10];
const younger = smallestNumber(age);
console.log(younger);