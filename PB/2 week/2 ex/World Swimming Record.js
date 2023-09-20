// 1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.0

// Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
// o " Yes, he succeeded! The new world record is {времето на Иван} seconds."
// · Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
// o "No, he failed! He was {недостигащите секунди} seconds slower."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.
function worldSwimmingRecord(input){


    let recordSec = Number(input[0]);
    let distanceMet = Number(input[1]);
    let timeSec = Number(input[2]);
    let r = Math.floor(distanceMet/15)*12.5;
    let totalTime = distanceMet*timeSec+r;
   
    if (totalTime<recordSec){
         
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    }
   else{
    let difference = totalTime-recordSec;
    console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
   }
    }
    
    worldSwimmingRecord(["10464",

    "1500",
    
    "20"]);