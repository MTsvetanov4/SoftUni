function computerFirm(input) {
    let shirtPrice = Number(input[0]);
    let neededSum = Number(input[1]);
    let pantsSum = shirtPrice * 0.75;
    let chorapiPrice = pantsSum * 0.20;
    let butonkiPrice = (shirtPrice + pantsSum) * 2;
    let totalSum = shirtPrice + pantsSum + chorapiPrice + butonkiPrice;

    totalSum *= 0.85;

    if (totalSum >= neededSum) {

        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);

    } else {

        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(neededSum - totalSum).toFixed(2)} lv. more.`);

    }

}

computerFirm(["25", "100"]);
computerFirm(["55", "310"]);
computerFirm(["59.99", "500"]);