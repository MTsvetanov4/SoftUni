function skiTrip(input){
let nights = Number(input[0])-1;
let roomType = input[1];
let feedBack = input[2];
let totalPrice = 0;

switch(roomType){
    case "room for one person": totalPrice=nights*18; break;
    case "apartment": totalPrice=nights*25;
    if (nights<10){
        totalPrice*=0.7;
    }else if(nights<=15){
        totalPrice*=0.65;
    }else{
        totalPrice*=0.5;
    }
    break;
    case "president apartment": totalPrice=nights*35;
    if (nights<10){
        totalPrice*=0.9;
    }else if(nights<=15){
        totalPrice*=0.85;
    }else{
        totalPrice*=0.8;
    }
    break;
}
if (feedBack === "positive"){
    totalPrice*=1.25;
}else {
    totalPrice*=0.9;
}
console.log(totalPrice.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])


;