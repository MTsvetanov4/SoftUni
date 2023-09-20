function bitcoinMining(input) {
    let index = 0;
    let shift = input[index];
    let bitcoins = 0;
    let day = 0;
    let firstBcDay = 0;
    let money = 0;

    while (shift !== undefined) {
        day++;
        if(day%3==0){
            shift-=shift*0.3;
        }
        money += shift * 67.51;
        while (money >= 11949.16) {
            bitcoins++;
            money -= 11949.16;
            if (bitcoins >= 1 && firstBcDay <= 0) {
                firstBcDay += day;
            }
        }

        
        index++;
        shift = input[index];

    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstBcDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBcDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);




}


bitcoinMining([100, 200, 300]);
console.log('----------------------------------------');
bitcoinMining([50, 100]);
console.log('----------------------------------------');
bitcoinMining([3124.15, 504.212, 2511.124]);