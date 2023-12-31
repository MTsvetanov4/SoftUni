function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;
    let shieldCounter = 0;


    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 == 0) {
            helmet++;
        }
        if (i % 3 == 0) {
            sword++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            shield++;
            shieldCounter++;
        }
        if (shieldCounter > 0 && shieldCounter % 2 == 0) {
            armor++;
            shieldCounter = 0;
        }

    }

    sum = helmet * helmetPrice + sword * swordPrice + shield * shieldPrice + armor * armorPrice;
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)