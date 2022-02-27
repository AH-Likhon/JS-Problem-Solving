function addNumbers() {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}

const sum = addNumbers(23, 13, 50, 20);
// console.log(sum);

function getFullName() {
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + name + ' ';
    }
    return fullName;
}

const takeName = getFullName('bina', 'khatun', 'hanif', 'sonket', 'Lufa', 'Sonket');
console.log(takeName);