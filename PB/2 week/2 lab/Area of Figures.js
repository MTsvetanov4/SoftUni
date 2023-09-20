function areaOfFigures(input){
    let type = input[0];
    let result = 0;
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let r = Number(input[1]);
    let h = Number(input[2]);
    if (type === "square"){
    result = sideA*sideA;
    } else if (type === "rectangle"){
        result = sideA*sideB;
    } else if (type=== "circle"){
        result = Math.PI*Math.pow(r, 2);
    } else {
        result = sideA*h/2;
    }
    
    console.log(result.toFixed(3));
    }