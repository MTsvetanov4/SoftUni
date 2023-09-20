function fishTank(input) {

    let lengthCM = Number(input[0]);
    let widthCM = Number(input[1]);
    let heightCM = Number(input[2]);
    let percent =  Number(input[3])/100;
    let totalVolume= (lengthCM*widthCM*heightCM)/1000;
    let volumeTaken=percent*totalVolume;

    let totalLiters=totalVolume-volumeTaken;
    console.log(totalLiters);
}