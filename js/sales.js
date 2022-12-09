// Games
const SALES = PRODUCTS.filter(product => product.sale === true); // Filter products by if sale is true
SALES.sort(() => Math.random() - 0.5); // Randomizing the order

const gamesContainer = document.getElementById("games-container"); // Div: Games-Container
const gcProducts = gamesContainer.getElementsByClassName("product");  // Div: Games-Container -> Product

for (let i = 0; i < gcProducts.length; i++) {
    const product = gcProducts[i];
    product.getElementsByClassName("product-title")[0].innerText = SALES[i].name; // Set Name
    product.getElementsByClassName("product-price")[0].innerText = "$" + SALES[i].price; // Set Price
    product.getElementsByClassName("product-img")[0].src = SALES[i].image; // Set Image
    product.getElementsByClassName("available-platforms")[0].innerHTML = SALES[i].platform_i; //Set Platforms

    // On Sale?
    if (SALES[i].discount) {
        product.getElementsByClassName("product-price")[0].innerText = "$" + SALES[i].salePrice; // Set Price
        product.getElementsByClassName("sale-tag")[0].innerText = "-" + SALES[i].discount + "%"; // Set Discount
    }
    
    // On Click: Go to Product Page with Product ID
    product.addEventListener("click", function() {
        window.open('./product.html' + "?id=" + SALES[i].id, "_self")
    });
}