const anthem = 'Amar sonar bangla ami tomai valobashi';
// const words = anthem.split('');
// const words = anthem.split(' ');

const withoutA = anthem.split('a');

// console.log(words);
// console.log(withoutA);

const smallSlice = anthem.slice(5, 13);

// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 10);
// console.log(anotherPart);

// substring
const anotherSubstring = anthem.substring(11, 13);
// console.log(anotherSubstring);

// concat
const first = 'Dhaka';
const second = 'City';
// const result = first + second;
const result = first.concat(second).concat(' abc');
// console.log(result);

//join
const letter = ['a', 'b', 'c', 'd', 'e', 'f'];
const joinResult = letter.join('');
// const joinResult = letter.join(' ');
// const joinResult = letter.join(',');
// const joinResult = letter.join(', ');
// const joinResult = letter.join('WW');
console.log(joinResult);