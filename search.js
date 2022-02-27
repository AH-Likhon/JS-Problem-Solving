const products = [
    'Dell hardcore i21 200GB laptop',
    'iPhone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with Laptop'
];

const searching = 'laptop';
// const searching = 'Dell';
const output = [];

//indexof 
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}

// includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}

// startswith
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}

// endswith
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);