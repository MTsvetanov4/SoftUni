function repainting(input){
    let nailon = Number(input[0])+2;
    let nailonPrice = nailon*1.5;
    let paint= Number(input[1])+(input[1])*0.1
    let paintPrice= paint*14.5
    let razreditel=Number(input[2])* 5;
    let torbichki =0.4;
    let maistoriHours=Number(input[3]);
    let maistoriPrice=(nailonPrice+paintPrice+razreditel +torbichki)*0.3;
    let total = nailonPrice+paintPrice+razreditel +torbichki+(maistoriHours*maistoriPrice);
    console.log(total);
    }