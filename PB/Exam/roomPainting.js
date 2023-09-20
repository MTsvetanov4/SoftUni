function roomPainting(input) {
    let paintBoxes = Number(input[0]);
    let rolkiTapeti = Number(input[1]);
    let cenaZaRukavici = Number(input[2]);
    let cenaZaChetka = Number(input[3]);
    let totalPrice = 0;
    let rukaviciCount = 0;
    let chetkiCount = 0;
    let delivery = 0;

    totalPrice += paintBoxes * 21.5;
    totalPrice += rolkiTapeti * 5.2;
    rukaviciCount = Math.ceil(rolkiTapeti * 0.35);
    totalPrice += rukaviciCount * cenaZaRukavici;
    chetkiCount = Math.floor(paintBoxes * 0.48);
    totalPrice += chetkiCount * cenaZaChetka;
    delivery = totalPrice / 15;




    
    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);



}

roomPainting(["10", "8", "2.2", 
    "5"]);
