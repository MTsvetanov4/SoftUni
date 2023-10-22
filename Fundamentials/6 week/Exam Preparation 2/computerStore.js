function computerStore(arr) {

    let price = 0;
    let command = arr.shift();
    let tax = 0;
    let finalPrice = 0;

    while (command != "special" && command != "regular") {
        if (Number(command) < 0) {
            console.log("Invalid price!");
            command = arr.shift();
            continue;
        }

        price += Number(command);

        command = arr.shift();
    }

    if (price == 0) {
        console.log("Invalid order!");
        return;
    } else {
        tax = price * 0.2;
        finalPrice = price + tax;
        if (command == "special") {
            finalPrice -= finalPrice * 0.1;
        }
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);

}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])
computerStore(['regular'])