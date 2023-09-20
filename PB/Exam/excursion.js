function roomPainting(input) {
    let peopleCount = Number(input[0]);
    let nightsCount = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);
    let totalPrice = 0;


    totalPrice += nightsCount * 20;
    totalPrice += transportCards * 1.6;
    totalPrice += museumTickets * 6;
    totalPrice *= peopleCount;
    totalPrice += totalPrice * 0.25;

    console.log(totalPrice.toFixed(2));



}

roomPainting(["20", "14", "30", "6"]);
roomPainting(["131", "9", "33", "46"]);