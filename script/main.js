console.log("this is main.js file");

renderProducts(products);

document.querySelector("#product-form").addEventListener("submit", (e) => {
    e.preventDefault();
});

resetForm();
