let marks = 5;

if (marks >= 33 && marks <= 39) {
    console.log('You have got D');
} else if (marks >= 40 && marks <= 49) {
    console.log('You have got C');
} else if (marks >= 50 && marks <= 59) {
    console.log('You have got B');
} else if (marks >= 60 && marks <= 69) {
    console.log('You have got A-');
} else if (marks >= 70 && marks <= 79) {
    console.log('You have got just A');
} else if (marks >= 80) {
    console.log('Congratulations, You have got A+');
} else {
    console.log('You are failed');
}