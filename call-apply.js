const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDen: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        // console.log(this);
        return this.money;
    }
}

const heroAlom = {
    id: 102,
    money: 6000,
    name: 'Hero Alom'
}

// call
// kibria.treatDen.call(heroAlom, 500, 100, 50);
// console.log(kibria.treatDen.call(heroAlom, 300, 40, 10));


// apply
// kibria.treatDen.apply(heroAlom, [500, 100, 50]);
// console.log(kibria.treatDen.apply(heroAlom, [300, 40, 10]));

/* const nayok = { name: 'hero', age: '28', isMarried: false };
const result = Object.entries(nayok);
console.log(result); */

/* const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length); */

// const obj1 = { module: 35, video: 2 };
// const obj2 = { module: 35, video: 2 };
// console.log(obj1 === obj2);


const getGirlFriend = (name = "chokina") => 'name';
// const getGirlFriend = (name = "chokina") => name;
console.log(getGirlFriend());