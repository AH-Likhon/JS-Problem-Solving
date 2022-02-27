// class TeamMember {
//     name;
//     designation = 'Web Developer';
//     address = 'BD';
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     };
// }

// class Support extends TeamMember {
//     groupSupportTime;
//     constructor(name, address, time) {
//         super(name, address);
//         this.groupSupportTime = time;
//     }
//     startSession() {
//         console.log(this.name, 'start a support session');
//     }
// };

// class StudentCare extends TeamMember {

//     buildARoutine(student) {
//         console.log(this.name, 'build a routine for', student);
//     };
// };

// class NeptuneDev extends TeamMember {
//     codeEditor;
//     constructor(name, address, editor) {
//         super(name, address);
//         this.codeEditor = editor;
//     };

//     releaseVersion(version) {
//         console.log(this.name, 'release app version', version);
//     };
// }

// const amir = new Support('Amir Khan', 'BD', 11);
// const salman = new Support('Salman Khan', 'USA', 3);
// // console.log(amir, salman);
// // console.log(amir);
// // salman.startSession();

// const pori = new StudentCare('Pori Moni', 'Dhaka');
// // console.log(pori);

// const ash = new NeptuneDev('Asha', 'Kolkata', 'VS');
// // console.log(ash);
// ash.releaseVersion('1.4.5');

// console.log(min([1, 3, 2])) ? function min(nums) { return Math.min(nums) }

/* cube = x => x * x * x;
console.log(cube(2)); */

/* const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b); */

/* const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y); */
/* 
const nums = [1,2,3,4,5]; 
let output = nums.filter(n => n%2); 
console.log(output); */

/* const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const fLength = friends.find(friend => friend.length == 5);
console.log(fLength); */

const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' };
const { price } = product;
console.log(price);