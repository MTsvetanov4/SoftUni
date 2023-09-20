function hotelRoom(input){
let month = input[0];
let nights = Number(input[1]);
let studioPrice = 0;
let apartmentPrice=0;

switch(month){
    case "May" :
    case "October" :
    if (nights>7 && nights<=14){
        studioPrice = nights*50-nights*50*0.05;
        apartmentPrice = nights*65;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }else if(nights>14){
        studioPrice = nights*50-nights*50*0.3;
        apartmentPrice = nights*65-nights*65*0.1;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }else {
        studioPrice = nights*50;
        apartmentPrice = nights*65;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }break;
    case "June" :
    case "September" :
        if (nights>7 && nights<=14){
            studioPrice = nights*75.2
            apartmentPrice = nights*68.7;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }else if(nights>14){
            studioPrice = nights*75.2-nights*75.2*0.2;
            apartmentPrice = nights*68.7-nights*68.7*0.1;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }else {
            studioPrice = nights*75.2;
            apartmentPrice = nights*68.7;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }break;
    case "July" :
    case "August" :
        if (nights>7 && nights<=14){
            studioPrice = nights*76
            apartmentPrice = nights*77;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }else if(nights>14){
            studioPrice = nights*76
            apartmentPrice = nights*77-nights*77*0.1;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }else {
            studioPrice = nights*76;
            apartmentPrice = nights*77;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }break;
}


}
hotelRoom(["August", "20"])