function housePainting(input){
    let houseHeight = Number(input[0]);
    let houseLenght = Number(input[1]);
    let triangleRoofHeight= Number(input[2]);
    let houseSide = (houseHeight*houseLenght)-(1.5*1.5);
    let houseSides = houseSide*2;
    let houseFront = (houseHeight*houseHeight)-(1.2*2);
    let houseBack =  houseHeight*houseHeight;
    let roofSide = 2*(houseHeight*houseLenght);
    let roofTriangle = 2*(houseHeight*triangleRoofHeight/2);
    let greenPaint = (houseSides+houseBack+houseFront)/3.4;
    let redPaint = (roofSide+roofTriangle)/4.3;
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}