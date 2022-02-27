const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// getting all properties values
const values = Object.values(bottle);
// console.log(values);

//pairs
const pairs = Object.entries(bottle);
// console.log(pairs);


/* Seal- can change property value, not possible to delete and add any property */
// Object.seal(bottle);

// freeze doesn't give permission to change property value and also add/delete property.
Object.freeze(bottle);

bottle.price = 100;
bottle.height = 16;

delete bottle.isCleaned;
console.log(bottle);