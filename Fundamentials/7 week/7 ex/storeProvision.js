function storeProvision(stock, orderedProducts) {

    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let qty = Number(stock[i + 1]);

        products[productName] = qty;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i];
        let qty = Number(orderedProducts[i + 1]);

        if (productName in products) {
            products[productName] += qty;
        } else {
            products[productName] = qty;
        }

    }

    for (let entry of Object.entries(products)) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])