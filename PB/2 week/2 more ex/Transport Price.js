function transportPrice(input){
    let km = Number(input[0]);
    let time = input[1];
    let taxiDay = 0.7+km*0.79;
    let taxiNight = 0.7+km*0.9;
    let bus = km*0.09;
    let train = km*0.06;

    if (km<20 & time==="day"){
    console.log(taxiDay.toFixed(2));
    }else if(km<20 & time!="day"){
        console.log(taxiNight.toFixed(2));
    }else if (km>=20 & km<100){
        console.log(bus.toFixed(2));
    }else {
        console.log(train.toFixed(2));
    }

}