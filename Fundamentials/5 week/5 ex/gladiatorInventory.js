function gladiatorInventory(arr) {

    let inventory = arr.shift().split(" ");

    for (let i = arr.length; i > 0; i--) {
        let token = arr.shift().split(" ");
        let command = token[0];

        if (command == "Buy") {
            if (inventory.includes(token[1])) {
                continue;
            } else {
                inventory.push(String(token[1]));
            }
        } else if (command == "Trash") {
            if (inventory.includes(token[1])) {
                let index = inventory.indexOf(token[1]);
                inventory.splice(index, 1);
            } else {
                continue;
            }

        } else if (command == "Repair") {
            if (inventory.includes(token[1])) {
                let index = inventory.indexOf(token[1]);
                let itemForRepair = inventory.splice(index, 1);
                inventory.push(String(itemForRepair));

            } else {
                continue;
            }

        } else if (command == "Upgrade") {
            token.shift();
            let upgrade = token.toString().split("-");
            let upgraded = upgrade[0] + ":" + upgrade[1];

            if (inventory.includes(upgrade[0])) {
                let index = inventory.indexOf(upgrade[0]);
                inventory.splice(index+1, 0, upgraded);

            } else {
                continue;
            }
        }

    }

    console.log(inventory.join(" "));
}

// gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash SWORD', 'Buy SWORD', "Repair Bag", 'Upgrade Bag-Wood'])
// gladiatorInventory(['SWORD Shield Spear', 'Buy Bow', 'Repair Shield', 'Upgrade Bow-Vin'])
gladiatorInventory(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel'])
gladiatorInventory(['Bow Shield Spear',"Upgrade Bow-MT", "Trash Bow", "Upgrade Spear-25","Buy MT", "Repair Spear", "Remove Spear"])