function manOWar(arr) {
    
    let piratesShip = arr.shift().split(">").map(Number);
    let warship = arr.shift().split(">").map(Number);
    let maxHp = Number(arr.shift());
    let critical = maxHp * 0.2;

    for (let current of arr) {
        let tokens = current.split(" ");
        let command = tokens.shift();

        if (command == "Retire") {
            break;
        } else if (command == "Fire") {

            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);
            if (index < 0 || index >= warship.length) {
                continue;
            }
            warship[index] -= damage;
            if (warship[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return;
            }

        } else if (command == "Defend") {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (startIndex < 0 || startIndex >= piratesShip.length || endIndex < 0 || endIndex >= piratesShip.length) {
                continue;
            }

            for (let i = startIndex; i <= endIndex; i++) {
                piratesShip[i] -= damage;
                if (piratesShip[i] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
            }

        } else if (command == "Repair") {

            let index = Number(tokens[0]);
            let hp = Number(tokens[1]);

            if (index < 0 || index >= piratesShip.length) {
                continue;
            }
            piratesShip[index] += hp;
            if (piratesShip[index] > maxHp) {
                piratesShip[index] = maxHp;
            }


        } else if (command == "Status") {
            let damaged = piratesShip.filter(sections => sections < critical);
            console.log(`${damaged.length} sections need repair.`);
        }
    }

    let piratesShipStatus = 0;
    let warshipStatus = 0;

    for (let section of piratesShip) {
        piratesShipStatus += section;

    }

    for (let section of warship) {
        warshipStatus += section;
    }

    console.log(`Pirate ship status: ${piratesShipStatus}`);
    console.log(`Warship status: ${warshipStatus}`);

}

manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);
console.log("-------------------------------------");
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"])