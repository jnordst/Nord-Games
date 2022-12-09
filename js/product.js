let productId = getUrlParameter("id");
if (productId === 0) {
    productId = 1;
}
let product = null;

for (let index = 0; index < PRODUCTS.length; index++) {
    if (PRODUCTS[index].id == productId) {
        product = PRODUCTS[index];
        break;
    }
}

// Thanks Google
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }   
    return false;
}

/* ----------------------------------------------------------------------------------------------------------- */
// Product Details
const mainProduct = document.getElementById("main-product");
const mainProductDetails = mainProduct.getElementsByClassName('main-product-details')[0];

mainProduct.querySelector('img').src = product.vImage;
mainProductDetails.querySelector('h2').innerText = product.name;
mainProductDetails.querySelector('span').innerText = product.developer;
mainProductDetails.querySelector('h3').innerText = "$" + product.price;
if (product.sale) 
{
    mainProductDetails.querySelector('h3').innerText = "$" + product.salePrice;
}

// Options
// Do Stuff Here

mainProductDetails.querySelector('p').innerText = product.description;

/* ----------------------------------------------------------------------------------------------------------- */
// Featured Products
const GAMES = PRODUCTS.filter(game => game.id !== product.id);
GAMES.sort(() => Math.random() - 0.5); // Randomizing the order

const fgContainer = document.getElementById("fg-container"); // Div: Featured-Games Container
const fgProducts = fgContainer.getElementsByClassName("product"); // Div: Featured-Games Container -> Product

// Setup Product Divs
for (let i = 0; i < fgProducts.length; i++) {
    const fgProduct = fgProducts[i];
    fgProduct.getElementsByClassName("product-title")[0].innerText = GAMES[i].name; // Set Name
    fgProduct.getElementsByClassName("product-price")[0].innerText = "$" + GAMES[i].price; // Set Price
    fgProduct.getElementsByClassName("product-img")[0].src = GAMES[i].image; // Set Image
    fgProduct.getElementsByClassName("available-platforms")[0].innerHTML = GAMES[i].platform_i; //Set Platforms

    // On Sale?
    if (GAMES[i].discount) {
        fgProduct.getElementsByClassName("product-price")[0].innerText = "$" + GAMES[i].salePrice; // Set Price
        fgProduct.getElementsByClassName("sale-tag")[0].innerText = "-" + GAMES[i].discount + "%"; // Set Discount
    }
    
    // On Click: Go to Product Page with Product ID
    fgProduct.addEventListener("click", function() {
        window.open('./product.html' + "?id=" + GAMES[i].id, "_self")
    });
}