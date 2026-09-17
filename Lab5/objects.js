const products = [
    { title: "Keyboard", price: 50, inStock: true, category: "peripherals" },
    { title: "Mouse", price: 30, inStock: true, category: "peripherals" },
    { title: "USB Cable", price: 10, inStock: false, category: "cables" },
    { title: "HDMI Cable", price: 15, inStock: true, category: "cables" }
];

const inStock = products
    .filter(product => product.inStock)
    .map(product => product.title);

const totalPrice = products.reduce((total, product) => total + product.price, 0);

function groupBy(products, key) {
    return products.reduce((groups, product) => {
        const category = product[key];

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}

console.log(inStock);
console.log(totalPrice);
console.log(groupBy(products, "category"));
