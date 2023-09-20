function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let price = 0;
 
    switch (season) {
        case "Spring":
            if (fishers <= 6) {
 
                    price = 3000 - (3000 * 0.1);
                
            } else if (fishers <= 11) {
 
                    price = 3000 - (3000 * 0.15);
                
            } else {
 
                    price = 3000 - (3000 * 0.25);
                
            } break;
        case "Summer":
            if (fishers <= 6) {
 
                    price = 4200 - (4200 * 0.1);
                
            } else if (fishers <= 11) {
 
                    price = 4200 - (4200 * 0.15);
                
            } else {
 
                    price = 4200 - (4200 * 0.25);
                
            } break;
        case "Autumn":
            if (fishers <= 6) {
 
                price = 4200 - (4200 * 0.1);
 
            } else if (fishers <= 11) {
 
                price = 4200 - (4200 * 0.15);
 
            } else {
 
                price = 4200 - (4200 * 0.25);
 
            } break;
        case "Winter":
            if (fishers <= 6) {
 
                    price = 2600 - (2600 * 0.1);
                
            } else if (fishers <= 11) {
 
                    price = 2600 - (2600 * 0.15);
                
            } else {
                    price = 2600 - (2600 * 0.25);
            
 
            } break;
    }
    if (fishers %2 == 0 && season !== "Autumn"){
        price = price *0.95
    }
    if (price <= budget) {
        let money = budget - price;
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);
    } else {
        let money = price - budget;
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
    }
 
 
}