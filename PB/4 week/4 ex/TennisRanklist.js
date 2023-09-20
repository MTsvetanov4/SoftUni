function tennisRanklist(input){
let tournametsCount = Number(input[0]);
let startingPoint = Number(input[1]);
let pointsWon = 0;
let tournametsWon = 0;

for (let i = 2; i < input.length; i++){
    let reachedFinals = input[i];
 if (reachedFinals === "W"){
    pointsWon += 2000;
    tournametsWon++;

 }else if (reachedFinals === "F"){
    pointsWon +=1200;
 }else {
    pointsWon+=720;
 }
}

let avgPoints = Math.floor(pointsWon/tournametsCount); 
console.log(`Final points: ${startingPoint + pointsWon}`);
console.log(`Average points: ${avgPoints}`);
let tournametsWonPercents = (tournametsWon/tournametsCount)*100;
console.log(`${tournametsWonPercents.toFixed(2)}%`);
 

 
}
tennisRanklist(["4","750","SF","W","SF","W"]);