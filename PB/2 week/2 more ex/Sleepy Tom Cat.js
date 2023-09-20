function sleepyTomCat(input){
    let daysOff = Number(input[0]);
    let daysOffToMin = daysOff*127;
    let workingDays = 365 - daysOff;
    let workingDaysToMin = workingDays*63;
    let totalMinForPlay = daysOffToMin+workingDaysToMin
    let h = 0;
    let m = 0;
    let differece = 0;
    if (totalMinForPlay<=30000){
    
    differece = 30000-totalMinForPlay;
    h = differece/60;
    m = differece%60;
    console.log("Tom sleeps well");
    console.log(`${Math.floor(h)} hours and ${m.toFixed(0)} minutes less for play`);
    }else{
        differece = (30000-totalMinForPlay)*-1;
        h = differece/60;
        m = differece%60;
        console.log("Tom will run away");
        console.log(`${Math.floor(h)} hours and ${m.toFixed(0)} minutes more for play`);
    
    }
    }