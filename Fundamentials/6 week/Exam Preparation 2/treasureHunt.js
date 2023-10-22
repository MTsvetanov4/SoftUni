function treasureHunt(arr) {
    let loot = arr.shift().split("|");
    let command = arr.shift();

    while (command != "Yohoho!") {

        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == "Loot") {
            let items = tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item)); // Filter only items which not contains in loot and add them to the begin; 
        } else if (action == "Drop") {
            let idx = Number(tokens.shift());
            if (idx >= 0 && idx < loot.length) {
                let removedItems = loot.splice(idx, 1).shift();
                loot.push(removedItems);
            }
        } else if (action == "Steal") {
            let count = Number(tokens.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(", "));
        }

        command = arr.shift();
    }

    if (loot.length == 0) {
        console.log("Failed treasure hunt.");
    } else {

        let avgGain = loot.reduce((acc, val) => acc + val.length, 0) / loot.length;


        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])
