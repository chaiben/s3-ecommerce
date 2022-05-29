var wineries = [
    {
        name: 'Miquel Jané',
        image: '/images/winery/MJ.png',
        winery: 'miquel-jane'
    },
    {
        name: 'Suriol',
        image: '/images/winery/suriol.png',
        winery: 'suriol'
    },
    {
        name: 'Grau i Grau',
        image: '/images/winery/grau-i-grau.png',
        winery: 'grau-i-grau'
    },
    {
        name: 'Pascona',
        image: '/images/winery/pascona.png',
        winery: 'pascona'
    },
    {
        name: 'Eudald',
        image: '/images/winery/eudald.png',
        winery: 'eudald'
    },
]

function currency(price){
    return price.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})
}

function wine(product){
    let html = '<div class="wine">';
    html += '        <div class="details">';
    html += '        <img src="'+product.image+'" />';
    html += '        <div class="price">' + currency(product.price) + '</div>';
    html += '    </div>';
    html += '    <button type="button" onclick="addToCart('+product.id+')" class="btn text-primary"><i class="fas fa-shopping-cart"></i></button>';
    html += '</div>';
    return html;
}

function wineryList(winery, products){
    let html = '<div class="winery shadow">';
    html += '    <div class="logo">';
    html += '        <img src="'+winery.image+'">';
    html += '    </div>';
    html += '    <div class="wines">';
    for (let i = 0; i < products.length; i++) {
        if(winery.winery == products[i].winery){
            html += wine(products[i]); 
        }
    }
    html += '    </div>';
    html += '</div>';
    return html;
}

function printWineries(){
    let html = ''
    for (let i = 0; i < wineries.length; i++) {
        html += wineryList(wineries[i], products);
    }
    document.getElementById('wineries').innerHTML = html;
    return true;
}