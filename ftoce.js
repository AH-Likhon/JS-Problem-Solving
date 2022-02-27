function getCelcuis(fahrenheit) {
    celcuis = (fahrenheit - 32) * 5 / 9;
    return celcuis;
}

const myFahrenheit = 32;
const myCelcuis = getCelcuis(myFahrenheit);
console.log(myCelcuis);