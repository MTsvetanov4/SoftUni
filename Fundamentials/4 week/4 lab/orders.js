function orders(product, quantity) {
    let sum = 0;
    switch (product) {
        case "coffee":
            sum = 1.5 * quantity;
            break;
        case "water":
            sum = 1 * quantity;
            break;
        case "coke":
            sum = 1.4 * quantity;
            break;
        case "snacks":
            sum = 2 * quantity;
            break;
    }
    print()

    function print() {
        console.log(sum.toFixed(2));
    }

}
orders("coke", 5)