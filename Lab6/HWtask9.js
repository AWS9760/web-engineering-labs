function calculateCartTotal(cart){
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

const cart = [
    {name: "Mouse", price: 1200, quantity: 2},
    {name: "Keyboard", price: 2500, quantity: 1},
];

console.log(calculateCartTotal(cart));