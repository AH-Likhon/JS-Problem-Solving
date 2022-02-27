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

console.log(positiveAge);

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
console.log(largestFriendName);