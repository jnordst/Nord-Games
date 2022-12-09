/* ----------------------------------------------------------------------------------------------------------- */
// Banner
const banner = document.getElementById("banner");
banner.querySelector("Button").addEventListener("click", function() {
    window.open('./product.html?id=2', "_self")
});

// Sales
const SALES = PRODUCTS.filter(product => product.sale === true); // Filter products by if sale is true
SALES.sort(() => Math.random() - 0.5); // Randomizing the order

const salesContainer = document.getElementById("sales-container"); // Div: Sales-Container
const scProducts = salesContainer.getElementsByClassName("product"); // Div: Sales-Container -> Product

// Setup Product Divs
for (let i = 0; i < scProducts.length; i++) {
    const product = scProducts[i];
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

const seeMoreSales = document.getElementById("sales").querySelector("button");
seeMoreSales.addEventListener("click", function() {
    window.open('./sales.html', "_self")
});

/* ----------------------------------------------------------------------------------------------------------- */
// Games
const GAMES = PRODUCTS;
GAMES.sort(() => Math.random() - 0.5); // Randomizing the order

const gamesContainer = document.getElementById("games-container"); // Div: Games-Container
const gcProducts = gamesContainer.getElementsByClassName("product");  // Div: Games-Container -> Product

for (let i = 0; i < gcProducts.length; i++) {
    const product = gcProducts[i];
    product.getElementsByClassName("product-title")[0].innerText = GAMES[i].name; // Set Name
    product.getElementsByClassName("product-price")[0].innerText = "$" + GAMES[i].price; // Set Price
    product.getElementsByClassName("product-img")[0].src = GAMES[i].image; // Set Image
    product.getElementsByClassName("available-platforms")[0].innerHTML = GAMES[i].platform_i; //Set Platforms

    // On Sale?
    if (GAMES[i].discount) {
        product.getElementsByClassName("product-price")[0].innerText = "$" + GAMES[i].salePrice; // Set Price
        product.getElementsByClassName("sale-tag")[0].innerText = "-" + GAMES[i].discount + "%"; // Set Discount
    }
    
    // On Click: Go to Product Page with Product ID
    product.addEventListener("click", function() {
        window.open('./product.html' + "?id=" + GAMES[i].id, "_self")
    });
}

const seeMoreGames = document.getElementById("games").querySelector("button");
seeMoreGames.addEventListener("click", function() {
    window.open('./games.html', "_self")
});
