// primitive
let a = 'hello';
let b = a;
// console.log(a, b);

a = 'gello';
// console.log(a, b);



// non primitive
let x = { job: 'Web Developer' };
let y = x;
console.log(x, y);
// x.job = 'Graphics Designer';
y.job = 'Graphics Designer';
console.log(x, y);