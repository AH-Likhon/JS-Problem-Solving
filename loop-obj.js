const bottles = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};


for (const bottle in bottles) {
    console.log(bottle, bottles[bottle]);
}

// const keys = Object.keys(bottles);
// // console.log(keys);

// for (const bottle of keys) {
//     // console.log(bottle, bottles[bottle]);
// }

// const entries = Object.entries(bottles);
// console.log(entries);

// for (const [key, value] of entries) {
//     // console.log(key, value);
// }