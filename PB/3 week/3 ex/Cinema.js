function cinema(input){
let movieType = input[0];
let rows = Number(input[1]);
let cols = Number(input[2]);
let ticketsCount = rows*cols;
let price = 0;
switch(movieType){
    case "Premiere": price=ticketsCount*12; console.log (`${price.toFixed(2)} lv.`); break;
    case "Normal": price=ticketsCount*7.5; console.log (`${price.toFixed(2)} lv.`); break;
    case "Discount": price=ticketsCount*5; console.log (`${price.toFixed(2)} lv.`); break;
}

}
cinema(["Discount","12","30"]);