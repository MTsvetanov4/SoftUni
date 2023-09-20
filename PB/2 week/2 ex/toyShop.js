
function toyShop(input){


    let ekskurziq = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minonsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let totalToys = puzzlesCount + dollsCount + bearsCount + minonsCount + trucksCount;
    let totalEarn = puzzlesCount*2.6 + dollsCount*3 + bearsCount*4.1 + minonsCount*8.2 + trucksCount*2;
    
    
    if (totalToys>=50){
    totalEarn = totalEarn*0.75;
    }
    
    totalEarn = totalEarn*0.9;
    
    if(totalEarn>=ekskurziq){
        let moneyLeft = totalEarn-ekskurziq;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    
    }else{
        let neededMoney = (totalEarn-ekskurziq)*-1;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
        
    }
    }
    
    toyShop(["320", "8", "2", "5", "5", "1"]);