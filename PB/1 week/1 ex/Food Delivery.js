function foodDelivery(input){
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);
    let delivery=2.5;
    let chickenMenuPrice=chickenMenuCount*10.35;
    let fishMenuPrice =fishMenuCount*12.40;
    let veganMenuPrice =veganMenuCount*8.15;
    let total = chickenMenuPrice+fishMenuPrice+veganMenuPrice;
    let dessert = total * (20/100);
    let totalPrice=total+dessert+delivery;
    console.log(totalPrice);
}