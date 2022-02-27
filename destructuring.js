const fish = {
    id: 01,
    name: 'Hilsha Ilisha',
    address: 'Chandpur',
    phone: 017777772345,
    dress: 'silver'
};

// const name = fish.name;
// const address = fish.address;

const { name, address, dress } = fish;

// console.log(name, address, dress);


const company = {
    name: 'GP',
    ceo: {
        name: 'Ajmol',
        id: 03,
        food: 'fuchka',
    },
    web: {
        work: 'Website Developer',
        employee: 20,
        framework: 'React'
    }
};

const { work, framework } = company.web;
console.log(work, framework);