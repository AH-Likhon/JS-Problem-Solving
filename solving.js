// Problem 1: Feet to Inch

/* function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

const myFeet = 5;
const myResult = feetToInch(myFeet);
console.log(myResult); */

// Problem 2: Centemter to meter

/* function centemterToMeter(centemter) {
    let meter = centemter * 0.01;
    return meter;
}

const myMeter = centemterToMeter(100);
console.log(myMeter); */

// Problem 3: Papaer Requiremements
/* function paperRequirements(firstBook, secondBook, thirdBook) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const firstBookTotalPage = firstBookPage * firstBook;
    const secondBookTotalPage = secondBookPage * secondBook;
    const thirdBookTotalPage = thirdBookPage * thirdBook;

    const totalPage = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;

    return totalPage;
}

const firstBookCopy = 5;
const secondBookCopy = 8;
const thirdBookCopy = 10;

const result = paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy);
console.log(result); */

//Problem 4: bestFriend Array and return the largest name as string

/* function bestFriend(friends) {
    let largestName = '';

    for (const friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;
}

const allFriends = ['Rahim', 'Karima', 'Raihan', 'Md. Akramul Hoque Likhon', 'Anamul Hoque', 'Rakib', 'Shimul'];
const largestFriendName = bestFriend(allFriends);
console.log(largestFriendName); */

// Problem 5: return positive value of an array and when face a negative value , then stop the loop.

const ages = [20, 50, 45, -55, 12, 32, -5, 40, 75, 62];
let positiveAges = [];

for (const age of ages) {
    if (age > 0) {
        positiveAges.push(age);
    } else {
        break;
    }
}

console.log(positiveAges);