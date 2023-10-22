function theHuntingGames(arr) {
    let days = Number(arr.shift());
    let players = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    let water = Number(arr.shift()) * days * players;
    let food = Number(arr.shift()) * days * players;

    for (let i = 0; i < arr.length; i++) {
        let curDayEnergy = Number(arr[i]);
        groupEnergy -= curDayEnergy
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            return;
        }

        if ((i + 1) % 2 == 0) {
            groupEnergy += groupEnergy * 0.05;
            water -= water * 0.3;
        }
        if ((i + 1) % 3 == 0) {
            groupEnergy += groupEnergy * 0.1;
            food -= food / players;
        }

    }

    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);

}

theHuntingGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"])
console.log("--------------------------------------------------------------------------------------------------------------------------");
theHuntingGames(["12", "6", "4430", "9.8", "5.5", "620.3", "840.2", "960.1", "220", "340", "674", "365", "345.5", "212", "412.12", "258", "496"])