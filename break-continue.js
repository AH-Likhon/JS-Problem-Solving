// var i = 0;

// while (i < 10) {
//     console.log(i);

//     if (i == 5) {
//         break;
//     }

//     i++;
// }

// for(var i = 0; i <= 20; i++){
//     console.log(i);
//     if (i > 8) {
//         break
//     }
// }

var numbers = [10, 25, 24, 85, 35, 105, 46, 95, 12];
//// nothing  //

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 80) {
//         break;
//     }
// }

// continue 
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 80) {
        continue;
    }

    console.log(number);
}




