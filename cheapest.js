const phones = [
    { name: 'Samsung Galaxy', price: 45000, camera: 20, storage: 64 },
    { name: 'Oppo f7', price: 30000, camera: 15, storage: 64 },
    { name: 'Shaomi m3', price: 15000, camera: 10, storage: 32 },
    { name: 'Vivo a30', price: 10000, camera: 10, storage: 16 },
    { name: 'htc h81', price: 8000, camera: 10, storage: 8 },
    { name: 'Nokia a95', price: 11000, camera: 10, storage: 32 }
];

function cheapestPhone(phoneParameter) {
    let cheapest = phoneParameter[0];
    for (const phone of phoneParameter) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const arrayPhone = phones;
const resultPhone = cheapestPhone(arrayPhone);
console.log(resultPhone);