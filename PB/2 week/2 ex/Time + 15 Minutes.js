
function timePlus15Minutes(input){


    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursToMins = hours*60;
    let totalMins = minutes + hoursToMins + 15;
    let finalTime1 = Math.floor(totalMins/60);
    let finalTime2 = totalMins%60;
    
    if (finalTime1==24){
        finalTime1=0;
       
    }
    
    if (finalTime2<10){
        console.log(`${finalTime1}:0${finalTime2}`);
    }else{
        console.log(`${finalTime1}:${finalTime2}`);
    }


    
}

timePlus15Minutes(["23", "49"]);