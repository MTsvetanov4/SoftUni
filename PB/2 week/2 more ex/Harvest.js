function harvest(input){
    let m2 = Number (input[0]);
    let grapePerM2 = Number (input[1]*m2);
    let requiredWineLiters = Number (input[2]);
    let workers = Number (input[3]);
    let wine = 0.4*grapePerM2/2.5;
    let neededWine = 0;
    let litersLeft = wine-requiredWineLiters;
    let litersPerWorker = litersLeft/workers;
    
    
    if (wine < requiredWineLiters){
        neededWine = (wine-requiredWineLiters)*-1;
        console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`);
    } else {
           console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
           console.log(`${Math.ceil(litersLeft)} liters left -> ${Math.ceil(litersPerWorker)} liters per person.`);
    }
    }