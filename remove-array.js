const ages = [12, 45, 74, 45, 85, 12, 10, 56, 89, 56, 84, 57];

// function removeDuplicate(numbers) {
//     let unique = [];

//     for (const element of numbers) {
//         // console.log(element);
//         if (unique.indexOf(element) === -1) {
//             unique.push(element);
//         }
//     }
//     return unique;

// }

// const result = removeDuplicate(ages);
// console.log(result);

const unique = [...new Set(ages)];
console.log(unique);


