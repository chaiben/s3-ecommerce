// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 4.76
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 33.33
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
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
    html += '    <td>$' + cart.price + '</td>';
    html += '    <td>' + cart.quantity + '</td>';
    html += '    <td>$' + subtotal + '</td>';
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
    document.getElementById('total_price').innerHTML = total;
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
                    cart[j].subtotal = Math.round(100*cartList[i].price*cart[j].quantity)/100;                   
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
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
    applyPromotionsCart();
    calculateTotal();
    printCart();
}