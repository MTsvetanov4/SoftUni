// 1. Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2. Броят видеокарти - цяло число в интервала [0…100]
// 3. Броят процесори - цяло число в интервала [0…100]
// 4. Броят рам памет - цяло число в интервала [0…100]

// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// · Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// · Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.

// Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// · Видеокарта – 250 лв./бр.
// · Процесор – 35% от цената на закупените видеокарти/бр.
// · Рам памет – 10% от цената на закупените видеокарти/бр.
function lunchBreak(input){


    let petersBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let proccessorsCount = Number(input[2]);
    let ramCount = Number(input[3]);
    
    let totalPrice = videoCardsCount*250+proccessorsCount*(videoCardsCount*250*0.35)+ramCount*(videoCardsCount*250*0.1);
    
    if (videoCardsCount>proccessorsCount){
        totalPrice = totalPrice - totalPrice*0.15;
        

   }
  if(petersBudget>=totalPrice){
   
    console.log(`You have ${(petersBudget-totalPrice).toFixed(2)} leva left!`);
  }
   else{
    console.log(`Not enough money! You need ${(totalPrice-petersBudget).toFixed(2)} leva more!`);
    
        
    }
}
    
    lunchBreak(["920.45", "3", "1", "1"]);