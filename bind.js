const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDen: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroAlom = {
    id: 102,
    money: 6000,
    name: 'Hero Alom'
}

const kibriaCost = kibria.treatDen(100);
// console.log(kibriaCost);

const heroTreat = kibria.treatDen.bind(heroAlom);
// heroTreat(500);
console.log(heroTreat(500));