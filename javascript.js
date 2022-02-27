const books = [
    ' A Smarter Way to Learn JavaScript',
    'JavaScript: The Definitive Guide',
    'Head First JavaScript Programming: A Brain-Friendly Guide',
    'Eloquent JavaScript, 3rd Edition',
    'The Principles of Object-Oriented JavaScript',
    'The Good Parts',
    'Interactive Front-End Web Development',
    'Secrets of the JavaScript Ninja',
    'Learn JavaScript VISUALLY with Interactive Exercises',
    'Effective JavaScript',
    'Javascript for Beginners',
    'You Do not Know JS',
    'An In-Depth Guide for Programmers'
]

const searching = 'javascript';
const output = [];

for (const book of books) {
    if (book.toLowerCase().includes(searching.toLowerCase())) {
        output.push(book);
    }
}

console.log(output);