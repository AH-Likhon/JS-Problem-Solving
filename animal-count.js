function animalCount(miles) {
    const firstDensity = 10;
    const secondDensity = 50;
    const restDensity = 100;

    if (miles <= 10) {
        const count = miles * firstDensity;
        return count;
    } else if (miles <= 20) {
        const firstDenseAnimals = 10 * firstDensity;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * secondDensity;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    } else {
        const firstDenseAnimals = 10 * firstDensity;
        const secondDenseAnimals = 10 * secondDensity;
        const restMiles = miles - 20;
        const restDensceAnimals = restMiles * restDensity;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDensceAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(25);
console.log(animals);