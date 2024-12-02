// Basic JavaScript to simulate adding to cart
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} added to your cart!`);
    console.log(cart);
}
