// Problem no 5
const ages = [12, 45, 32, -8, 50, -10, 74, 85, 25];
let positiveAge = [];

for (const age of ages) {
    if (age > 0) {
        positiveAge.push(age);
    } else {
        break;
    }
}

// console.log(positiveAge);

// Problem No 4

function bestFriend(friends) {
    let largestName = '';

    for (const friend of friends) {
        if (friend.length > largestName.length) {
            largestName = friend;
        }
    }
    return largestName;
}

const allFriends = ['Akter', 'Sumon', 'Quamrul', 'Rafi', 'Daud Ibrahim', 'Sonjib', 'ASM Ibne Abdullah', 'Jahid', 'Bablu'];
const largestFriendName = bestFriend(allFriends);
// console.log(largestFriendName);


// unique / not repeat

const repeatedArr = [1, 1, 2, 3, 3, 5, 6, 9, 2];
// const uniqueArr = new Set(repeatedArr);
const uniqueArr = [...new Set(repeatedArr)];
// console.log(uniqueArr);

// Another way

const newArr = [];

// for (let i = 0; i < repeatedArr.length; i++) {
//     let item = repeatedArr[i];

//     if (newArr.indexOf(item) == -1) {
//         newArr.push(item);
//     }
// }

for (const item of repeatedArr) {
    if (newArr.indexOf(item) == -1) {
        newArr.push(item);
    }
}

console.log(newArr);