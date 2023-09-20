function pipesInPool (input){
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let filledliters = h*p1+h*p2;
    let filledpercents = filledliters / v * 100;
    let p1percents = p1*h / filledliters * 100;
    let p2percents = p2*h / filledliters * 100;
    let litersoutside = (v-filledliters)*-1;
    if (filledpercents <= 100){
        console.log(`The pool is ${filledpercents.toFixed(2)}% full. Pipe 1: ${p1percents.toFixed(2)}%. Pipe 2: ${p2percents.toFixed(2)}%.`);
    }else{
        console.log(`For ${h} hours the pool overflows with ${litersoutside.toFixed(2)} liters.`);
    }
    
    }