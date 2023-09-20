// Напишете програма, която познава дали резервоара на едно превозно средство има нужда от презареждане на горивото или не. 
// От конзолата се четат два реда – текст и реално число, на първия ред се чете типа на горивото – текст с възможности: 
// "Diesel", "Gasoline" или "Gas", а на втория литрите гориво, които има в резервоара. Ако литрите гориво са повече или 
// равни на 25, на конзолата да се отпечата "You have enough {вида на горивото}.", ако са по-малко от 25, да се 
// отпечата "Fill your tank with {вида на горивото}!". В случай, че бъде въведено гориво, различно от посоченото, да се 
// отпечата "Invalid fuel!".
function fuelTank(input){


    let fuelType = input[0];
    let fuelLiters = Number(input[1]);

    if(fuelType==="Diesel"){
        if (fuelLiters<25){
            console.log(`Fill your tank with diesel!`)
        } else{console.log(`You have enough diesel.`);}
    }else if (fuelType==="Gasoline"){
        if (fuelLiters<25){
            console.log(`Fill your tank with gasoline!`)
        } else{console.log(`You have enough gasoline.`);}
    }else if (fuelType==="Gas"){
        if (fuelLiters<25){
            console.log(`Fill your tank with gas!`)
        } else{console.log(`You have enough gas.`);}
    } else {
        console.log("Invalid fuel!");
    }

  
 
    }
    
    fuelTank(["Diesel", "250"]);