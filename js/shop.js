// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Xarel·lo',
        image: '/images/wines/xarello.png',
        price: 7.2,
        winery: 'miquel-jane',
        offer: {
            number: 3,
            percent: 10
        }
   },
   {
        id: 2,
        name: 'Syrah',
        image: '/images/wines/syrah.png',
        price: 9.2,
        winery: 'miquel-jane',
        offer: {
            number: 10,
            percent: 20
        }
   },
   {
        id: 3,
        name: 'Classic Penedès',
        image: '/images/wines/classic-penedes.png',
        price: 12,
        winery: 'miquel-jane'
   },
   {
        id: 4,
        name: 'Ancestral',
        image: '/images/wines/ancestral.png',
        price: 16.45,
        winery: 'suriol'
   },
   {
        id: 5,
        name: 'Bancals',
        image: '/images/wines/bancals.png',
        price: 16.6,
        winery: 'suriol'
   },
   {
        id: 6,
        name: 'Brut Nature',
        image: '/images/wines/brut-nature.png',
        price: 9.9,
        winery: 'suriol'
   },
   {
        id: 7,
        name: 'Donzella',
        image: '/images/wines/donzella.png',
        price: 9.9,
        winery: 'suriol'
   },
   {
        id: 8,
        name: 'Sang De Drac',
        image: '/images/wines/sang-de-drac.png',
        price: 11.9,
        winery: 'suriol'
   },
   {
        id: 9,
        name: 'Matarò',
        image: '/images/wines/mataro.png',
        price: 16.6,
        winery: 'suriol'
   },
   {
        id: 10,
        name: 'Picapoll Cent·Kat',
        image: '/images/wines/picapoll.png',
        price: 10.05,
        winery: 'grau-i-grau'
   },
   {
        id: 11,
        name: 'Sensvs',
        image: '/images/wines/sensvs.png',
        price: 12.3,
        winery: 'grau-i-grau'
   },
   {
        id: 12,
        name: 'Maria Ganxa',
        image: '/images/wines/mariaganxa.png',
        price: 9.9,
        winery: 'pascona'
   },
   {
        id: 13,
        name: 'Lo Pare',
        image: '/images/wines/lo-pare.png',
        price: 25.9,
        winery: 'pascona'
   },
   {
        id: 14,
        name: 'Pascona Classic',
        image: '/images/wines/pascona-classic.png',
        price: 12.9,
        winery: 'pascona'
   },
   {
        id: 15,
        name: 'Cepell Blanc',
        image: '/images/wines/cepell-blanc.png',
        price: 6.6,
        winery: 'eudald'
   },
   {
        id: 16,
        name: 'Avi Ton',
        image: '/images/wines/avi-ton.png',
        price: 22.5,
        winery: 'eudald'
   },
   {
        id: 17,
        name: 'Innat',
        image: '/images/wines/innat.png',
        price: 13.2,
        winery: 'eudald'
   },
   
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// // Exercise 1
// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     for(let i = 0; i<products.length; i++){
//         if(id == products[i].id){
//             // 2. Add found product to the cartList array
//             cartList.push(products[i]);
//             generateCart();
//             applyPromotionsCart()
//             calculateTotal();
//             printCart()
//             log('Cart List', cartList);
//             return true;
//         }
//     }
//     return false;
// }
// Exercise 2
function cleanCart() {
    cartList = [];
    cart=[];
    total = 0;
    printCart();
    document.getElementById('count_product').innerHTML = 0;
    log('Cart List', cartList);
    log('Total', total);
    return true;
}

// Exercise 3
function calculateTotal() {
    // Clean the inital value
    total = 0;

    // Add each value to the total
    for(let i = 0; i<cart.length; i++){
        if(cart[i].subtotalWithDiscount !== undefined)
            total = total + cart[i].subtotalWithDiscount;
        else
            total = total + cart[i].subtotal;
    }
    total = Math.round(total*100)/100;
    // Show the result
    log('Total', total);
    return true;
}

// Exercise 4
// function generateCart() {
//     // Using the "cartlist" array that contains all the items in the shopping cart, 
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
//     cart = [];
//     for(let i=0; i < cartList.length; i++){
//         let productExists = false;
//         // Check if the element already exist in the cart array
//         for( let j=0; j < cart.length; j++){
//             if(cartList[i].id == cart[j].id){
//                 // Product already exists
//                 // Increment the quantity value
//                 cart[j].quantity++;
//                 cart[j].subtotal = Math.round(100*cartList[i].price*cart[j].quantity)/100;
//                 productExists = true;
//                 break; // Quit this for
//             }
//         }
//         if(productExists == true)
//             continue; // Quit this for
//         // If we didn't find any element we create it
//         let p = cartList[i];
//         p.quantity = 1;
//         p.subtotal = cartList[i].price;
//         cart.push(p);
//     }
//     log('Cart', cart);
//     return true;
// }

// Exercise 5

/* This function return the product price with discount. Return false if there are any discount */
function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {
        // Apply promotions to each item in the array "cart"
        if(cart[i].offer === undefined)
            continue;
        if(cart[i].quantity >= cart[i].offer.number){
            cart[i].subtotalWithDiscount = Math.round(100*cart[i].quantity*cart[i].price*(1-cart[i].offer.percent/100))/100;
        }
    }
}

// Exercise 6
function printHTML(cart){
    let subtotal = (cart.subtotalWithDiscount !== undefined) ? cart.subtotalWithDiscount : cart.subtotal
    let html = '';
    html += '<tr>';
    html += '    <th scope="row">' + cart.name + '</th>';
    html += '    <td>' + currency(cart.price) + '</td>';
    html += '    <td>' + cart.quantity + '</td>';
    html += '    <td>' + currency(subtotal) + '</td>';
    html += '</tr>';
    return html;
}

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartHTML = '';
    if (cart.length == 0){
        cartHTML = '<tr><th scope="row" colspan=4 class="text-center pt-5 pb-5" >Empty cart</th></tr>';
    } else {    
        for (let i = 0; i < cart.length; i++) {
            cartHTML = cartHTML + printHTML(cart[i]);
        }
    }
    document.getElementById('cart_list').innerHTML = cartHTML;
    document.getElementById('total_price').innerHTML = currency(total);
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Flag to check if it is a new or existing product.
    let productExists = false; 
    // 1. Loop for to the array products to get the item to add to cart
    for(let i = 0; i<products.length; i++){
        if(id == products[i].id){
            // Add product to cartList
            cartList.push(products[i]);
            // Update product counter
            document.getElementById('count_product').innerHTML = cartList.length;
            // 2. Add found product to the cart array 
            // or update its quantity in case it has been added previously
            for(let j=0; j < cart.length; j++){
                // Existing product
                if(id == cart[j].id){
                    // Update quantitiy and subtotal
                    cart[j].quantity++;
                    cart[j].subtotal = Math.round(100*products[i].price*cart[j].quantity)/100;                   
                    // Set flag to tell this is an existing product
                    productExists = true;
                    break;
                }
            }
            if(productExists == true)
                continue; 
            // New product 
            products[i].quantity = 1;
            products[i].subtotal = products[i].price;
            cart.push(products[i]);
            return true;
        }
    }
    return false;
}

// Exercise 9
function removeFromCart(id) {
    // Remove from cartList
    for (let i = 0; i < cartList.length; i++) {
        if(cartList[i].id == id){
            cartList.splice(i,1);
            break;
        } 
    }
    // Remove from cart
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity--;
            if (cart[i].quantity == 0) {
                cart.splice(i,1);
                break; 
            }
            cart[i].subtotal = Math.round(100 * cart[i].price * cart[i].quantity)/100;
            delete(cart[i].subtotalWithDiscount);
            break;
        } 
    }

    // Update promotions, calculate totals and refresh Cart info.
    open_modal();
    document.getElementById('count_product').innerHTML = cartList.length;
}

function open_modal(){
    applyPromotionsCart();
    calculateTotal();
    printCart();
}