function fishland(input){

    let skumriqPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudPrice = skumriqPrice*0.6+skumriqPrice;
    let palamudKg = Number(input[2])*palamudPrice;
    let safridPrice = cacaPrice*0.8+cacaPrice;
    let safridKg = Number(input[3])*safridPrice;
    let midiKg= Number(input[4])*7.5;
    let total = palamudKg+safridKg+midiKg;


    console.log(total.toFixed(2));
}