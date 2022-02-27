class Support {
    name;
    designation = 'Web Developer';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    };
    startSession() {
        console.log(this.name, 'start a support session');
    }
};

const amir = new Support('Amir Khan', 'BD');
const salman = new Support('Salman Khan', 'USA');
console.log(amir, salman);
salman.startSession();