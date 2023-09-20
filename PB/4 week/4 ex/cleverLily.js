function cleverLily(input) {
    let ages = Number(input[0]);
    let washmachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyFromBd = 10;
    let totalMoney = 0;

    for (let i = 1; i <= ages; i++) {
        if (i % 2 === 0) {
            totalMoney += moneyFromBd - 1;
            moneyFromBd += 10;
        } else {
            totalMoney += toyPrice
        }
    }


    if (totalMoney >= washmachinePrice) {
        let moneyLeft = totalMoney - washmachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let neededMoney = washmachinePrice - totalMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}
cleverLily(["21",

    "1570.98",

    "3"])