// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]

// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
// От общата сума, Мария трябва да плати 5% данъци.

// На конзолата трябва да се отпечата един ред.
// •	Ако парите СА стигнали: "She is left with {останали} leva." – сумата трябва да е закръглена към по-малко цяло число (пр. 1.90 -> 1).
// •	Ако парите НЕ достигат: "She will have to borrow {останали} leva." – сумата трябва да е закръглена към по-голямо цяло число (пр. 1.10 -> 2).

function fuelTank(input){


    let magnoliiCount = Number(input[0]);
    let ziumbiuliCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusesCount = Number(input[3]); 
    let presetPrice = Number(input[4]);
    let totalPrice = magnoliiCount*3.25+ziumbiuliCount*4+rosesCount*3.5+cactusesCount*8;
    let totalPriceWithTax = totalPrice - totalPrice*0.05;
    
if (totalPriceWithTax>=presetPrice){
    console.log(`She is left with ${Math.floor(totalPriceWithTax-presetPrice)} leva.`);
}   else{
    console.log(`She will have to borrow ${Math.ceil((presetPrice-totalPriceWithTax))} leva.`);
     }
    }
    
    fuelTank(["15", "7", "5", "10", "100"]);