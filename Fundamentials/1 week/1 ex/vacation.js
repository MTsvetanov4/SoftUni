function vacation(group, type, day) {

    let totalPrice = 0;

    switch (day) {
        case "Friday":
            if (type == "Students") {
                totalPrice = group * 8.45;
                if (group >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            } else if (type == "Business") {

                if (group >= 100) {
                    group -= 10;
                }
                totalPrice = group * 10.90;
            } else if (type == "Regular") {
                totalPrice = group * 15;
                if (group >= 10 && group <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
        case "Saturday":
            if (type == "Students") {
                totalPrice = group * 9.80;
                if (group >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            } else if (type == "Business") {

                if (group >= 100) {
                    group -= 10;
                }
                totalPrice = group * 15.60;
            } else if (type == "Regular") {
                totalPrice = group * 20;
                if (group >= 10 && group <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
        case "Sunday":
            if (type == "Students") {
                totalPrice = group * 10.46;
                if (group >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            } else if (type == "Business") {

                if (group >= 100) {
                    group -= 10;
                }
                totalPrice = group * 16;
            } else if (type == "Regular") {
                totalPrice = group * 22.50;
                if (group >= 10 && group <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;


    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,

    "Regular",
    
    "Saturday");