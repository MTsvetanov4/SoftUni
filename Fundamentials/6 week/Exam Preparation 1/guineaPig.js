function guineaPig(arr) {

    let quantityFoodKg = arr[0] * 1000;
    let excessFood = quantityFoodKg;
    let quantityHayKg = arr[1] * 1000;
    let excessHay = quantityHayKg;
    let quantityCoverKg = arr[2] * 1000;
    let excessCover = quantityCoverKg;
    let guineasWeighKg = arr[3] * 1000;
    let coverConsumption = guineasWeighKg / 3;

    for (let i = 1; i <= 30; i++) {
        excessFood -= 300;
        if (i % 2 == 0) {
            excessHay -= excessFood * 0.05;
        }
        if (i % 3 == 0) {
            excessCover -= coverConsumption;
        }
        if (excessFood < 0 || excessHay < 0 || excessCover < 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }

    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(excessFood / 1000).toFixed(2)}, Hay: ${(excessHay / 1000).toFixed(2)}, Cover: ${(excessCover / 1000).toFixed(2)}.`);

}

guineaPig(["10", "5", "5.2", "1"])
guineaPig(["1","1.5","3","1.5"])
guineaPig(["9","5","5.2","1"])