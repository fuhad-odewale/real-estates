// // JavaScript
// let cartItems = [];
// let cartTotal = 0;

// function addToCart() {
//   // You can fetch product details from the HTML elements or use an array of product objects

//   // Example: Fetch product details from the HTML elements
//   const product = {
//     name: document.querySelector('.product h2').innerText,
//     price: parseFloat(document.querySelector('.product p').innerText.replace('$', '')),
//   };

//   cartItems.push(product);
//   cartTotal += product.price;

//   updateCart();
// }

// function updateCart() {
//   const cartItemsList = document.getElementById('cart-items');
//   cartItemsList.innerHTML = '';

//   cartItems.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//     cartItemsList.appendChild(li);
//   });

//   const cartTotalElement = document.getElementById('cart-total');
//   cartTotalElement.textContent = cartTotal.toFixed(2);
// }

