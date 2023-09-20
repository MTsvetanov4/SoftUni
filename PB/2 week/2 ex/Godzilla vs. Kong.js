function godzillaVsKong(input){


    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let priceClothes = Number(input[2]);
    let decor = budget*0.1;
    let moneyNeeds = actorsCount*priceClothes+decor;
    
  
    if (actorsCount>150){
        moneyNeeds = actorsCount*0.9*priceClothes+decor;
    }
    let moneyLeft = budget-moneyNeeds;
    let moneyNeedsMore = moneyNeeds-budget;
    if (moneyNeeds<=budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    
    }else{
        
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeedsMore.toFixed(2)} leva more.`);
        
    }

}
    
    godzillaVsKong(["9587.88",

    "222",
    
    "55.68"]);