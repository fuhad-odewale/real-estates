// Get the URL parameters
const params = new URLSearchParams(window.location.search);

// Define the product data
const products = [
    {
        id: 1,
        title: "Product 1",
        description: "This is the description of Product 1.",
        imageUrl: "product1.jpg"
    },
    {
        id: 2,
        title: "Product 2",
        description: "This is the description of Product 2.",
        imageUrl: "product2.jpg"
    },
    // Add more products as needed
];

// Get the product ID from the URL parameter (e.g., ?id=1)
const productId = parseInt(params.get("id"));

// Find the product data based on the product ID
const product = products.find(item => item.id === productId);

// Display the product details on the page
if (product) {
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById("productDescription").innerText = product.description;
    document.getElementById("productImage").src = product.imageUrl;
} else {
    // If the product ID is not found, display an error message or redirect to a 404 page
    document.body.innerHTML = "<h1>Product not found.</h1>";
}