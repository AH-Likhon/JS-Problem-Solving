function eightyUpNumbers(numbers) {
    let eightyUp = [];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element >= 80) {
            eightyUp.push(element);
        }
    }
    return eightyUp;
}

const ages = [35, 42, 85, 45, 80, 98, 12, 105, 62];
const updateAge = eightyUpNumbers(ages);
console.log(updateAge);