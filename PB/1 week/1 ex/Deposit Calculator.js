function calcDep(input){
    let depsuma = Number(input[0]);
    let srok = Number(input[1]);
    let glp = Number(input[2]);
    let result = depsuma + srok * ((depsuma*glp/100) / 12);
    console.log(result);
    }