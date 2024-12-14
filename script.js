// Add interactivity or future functionalities
console.log("MITU Business website loaded successfully!");
// Add event listeners to all "Buy Now" buttons
document.querySelectorAll('.product-card button').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Define Flipkart URLs for each product
        const flipkartUrls = [
            'https://dl.flipkart.com/s/yzzqHGNNNN', // URL for Product 1
            'https://dl.flipkart.com/s/yzZExZNNNN', // URL for Product 2
            'https://dl.flipkart.com/s/yz8fCrNNNN'  // URL for Product 3
        ];

        // Redirect to the corresponding URL based on the product index
        window.location.href = flipkartUrls[index];
    });
});
