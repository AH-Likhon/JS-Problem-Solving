function megaFriends(friends) {

    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }

    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }

    return mega;
}

const friends = ['Sajid', 'Rimon', 'Raihan', 'Sobuj'];
const callFunction = megaFriends(1222);
// console.log(callFunction);

// indexof
if (friends.indexOf('Raihan') != -1) {
    console.log('Raihan Exists');
} else {
    console.log("Lion doesn't exists");
}

//includes
if (friends.includes('Lion')) {
    console.log('Raihan exists Again and again');
} else {
    console.log("Raihan doesn't exists anytime");
}


// concatenation

const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];
const combined = first.concat(second);
console.log(combined);