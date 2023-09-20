function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let totalPrice = 0;

    if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {
        switch (dayOfWeek) {
            default: console.log("error"); break;

            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thurdsay":
            case "Friday":
                switch (fruit) {
                    case "banana": price = 2.50;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "apple": price = 1.20;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "orange": price = 0.85;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "grapefruit": price = 1.45;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "kiwi": price = 2.70;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "pineapple": price = 5.50;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "grapes": price = 3.85;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                } break;
    
            case "Saturday":
            case "Sunday":
                switch (fruit) {
                    case "banana": price = 2.70;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "apple": price = 1.25;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "orange": price = 0.90;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "grapefruit": price = 1.60;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "kiwi": price = 3.00;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "pineapple": price = 5.60;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                    case "grapes": price = 4.20;
                        totalPrice = price * quantity;
                        console.log(totalPrice.toFixed(2));
                        break;
                        default: console.log("error"); break;
                } break;
    
    
        }
    } else {
        console.log("error")
    }

    

}
fruitShop(["pineapple","Wednesday","1.600"]);