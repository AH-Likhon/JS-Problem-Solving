// var items = ['watch', 'bottle', 'cup', 'mug', 'mobile', 'charger', 'book', 'paper']

// // console.log(items.length);

// for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     console.log(item);
// }

// var num1 = "99.5";
// var num2 = 15;

// console.log(num1 + num2);

// var name = "false";
// console.log(typeof name);

// var a = 10;
// var b = 20;
// console.log(a != b);


//switch statement

var date = new Date();

var today = date.getDay();

switch (today) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;

    default:
        console.log('Not a valid');
        break;
}


// ternary operator

var n = 15;
var result = n % 2 === 0 ? 'Even' : 'Odd';

console.log(result);