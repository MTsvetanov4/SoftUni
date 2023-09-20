// 	Първи ред – брой дни – цяло число в интервал [1…5000]
// 	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// 	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// 	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// 	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]

// 	Ако оставената храна Е достатъчна:
// 	"{килограма остатък} kilos of food left."
// 	Резултатът трябва да е закръглен към по-ниското цяло число
// 	Ако оставената храна НЕ Е достатъчна:
// 	“{килограма недостигат} more kilos of food are needed.”
// 	Резултатът трябва да е закръглен към по-високото цяло число

function fuelTank(input){


    let days = Number(input[0]);
    let feed = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDayToKg = Number(input[4]);
    let totalFood = days*dogFoodPerDay + days*catFoodPerDay + days*turtleFoodPerDayToKg/1000;
    
    if (totalFood<=feed){
        console.log(`${Math.floor(feed-totalFood)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(totalFood-feed)} more kilos of food are needed.`);

     }
    }
    
    fuelTank(["5", "10", "2.1", "0.8", "321"]);