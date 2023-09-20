function coffeeMachine(input) {
    let type = input[0];
    let sugar = input[1];
    let quantity = input[2];
    let price = 0;

    switch (type) {

        case "Espresso":

            if (sugar === "Without") {

                price += 0.9 * quantity;
                price *= 0.65;

            } else if (sugar === "Normal") {

                price += 1 * quantity;

            } else {

                price += 1.2 * quantity;

            }

            if (quantity > 5) {
                price *= 0.75;
            }

            break;

        case "Cappuccino":

            if (sugar === "Without") {

                price += 1 * quantity;
                price *= 0.65;

            } else if (sugar === "Normal") {

                price += 1.2 * quantity;


            } else {

                price += 1.6 * quantity;

            }

            break;

        case "Tea":

            if (sugar === "Without") {

                price += 0.5 * quantity;
                price *= 0.65;

            } else if (sugar === "Normal") {

                price += 0.6 * quantity;


            } else {

                price += 0.7 * quantity;

            }

            break;

    }

    if (price > 15) {
        price *= 0.8;
    }

    console.log(`You bought ${quantity} cups of ${type} for ${price.toFixed(2)} lv.`);

}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);