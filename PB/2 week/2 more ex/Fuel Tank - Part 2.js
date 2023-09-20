// 	Типа на горивото – текст с възможности: "Gas", "Gasoline" или "Diesel"
// 	Количество гориво – реално число в интервала [1.00 … 50.00]
// 	Притежание на клубна карта – текст с възможности: "Yes" или "No"

// 	Бензин – 2.22 лева за един литър, 
// 	Дизел – 2.33 лева за един литър
// 	Газ – 0.93 лева за литър
// Ако водача има карта за отстъпки,  той се възползва от следните намаления за литър гориво: 
// 18 ст. за литър бензин, 12 ст. за литър дизел и 8 ст. за литър газ. 
// Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена, 
// при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.

// 	"{крайната цена на горивото} lv."
// Цената на горивото да бъде форматираната до втората цифра след десетичния знак.

function fuelTank2(input){

    let fuelType = input[0];
    let fuelLiters = Number(input[1]);
    let clubCard = input[2];
    
    if (fuelLiters>=20 & fuelLiters<=25){
        if (clubCard==="Yes"){
            if (fuelType==="Gas"){
                let price = fuelLiters*0.93-fuelLiters*0.08;
                let littleDiscount = price - (price*0.08);
    
                console.log(`${littleDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Gasoline"){
                
    
                let price = fuelLiters*2.22-fuelLiters*0.18;
                let littleDiscount = price - (price*0.08);
                console.log(`${littleDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Diesel"){
                
                let price = fuelLiters*2.33-fuelLiters*0.12;
                let littleDiscount = price - (price*0.08);
    
                console.log(`${littleDiscount.toFixed(2)} lv.`);
            }
        }else{
            if (fuelType==="Gas"){
                
                let price = fuelLiters*0.93;
                let littleDiscount = price - (price*0.08);
    
                console.log(`${littleDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Gasoline"){
               
    
                let price = fuelLiters*2.22;
                let littleDiscount = price - (price*0.08);
                console.log(`${littleDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Diesel"){
                
    
                let price = fuelLiters*2.33;
                let littleDiscount = price - (price*0.08);
                console.log(`${littleDiscount.toFixed(2)} lv.`);
            }
        }
    }else if(fuelLiters>25){
        if (clubCard==="Yes"){
            if (fuelType==="Gas"){
    
                let price = fuelLiters*0.93-fuelLiters*0.08;
                let bigDiscount = price - (price*0.1);
                console.log(`${bigDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Gasoline"){
    
                let price = fuelLiters*2.22-fuelLiters*0.18;
                let bigDiscount = price - (price*0.1);
                console.log(`${bigDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Diesel"){
    
                let price = fuelLiters*2.33-fuelLiters*0.12;
                let bigDiscount = price - (price*0.1);
                console.log(`${bigDiscount.toFixed(2)} lv.`);
            }
        }else{
            if (fuelType==="Gas"){
    
                let price = fuelLiters*0.93;
                let bigDiscount = price - (price*0.1);
                console.log(`${bigDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Gasoline"){
    
                let price = fuelLiters*2.22;
                let bigDiscount = price - (price*0.1);
                console.log(`${bigDiscount.toFixed(2)} lv.`);
            }else if(fuelType==="Diesel"){
    
                let price = fuelLiters*2.33;
                let bigDiscount = price - (price*0.1);
                console.log(`${bigDiscount.toFixed(2)} lv.`);
            }
        }
    }else{
        if (clubCard==="Yes"){
            if (fuelType==="Gas"){
                let price = fuelLiters*0.93-fuelLiters*0.08;
                console.log(`${price.toFixed(2)} lv.`);
            }else if(fuelType==="Gasoline"){
                let price = fuelLiters*2.22-fuelLiters*0.18;
                console.log(`${price.toFixed(2)} lv.`);
            }else if(fuelType==="Diesel"){
                let price = fuelLiters*2.33-fuelLiters*0.12;
                console.log(`${price.toFixed(2)} lv.`);
            }
        }else{
            if (fuelType==="Gas"){
                let price = fuelLiters*0.93;
                console.log(`${price.toFixed(2)} lv.`);
            }else if(fuelType==="Gasoline"){
                let price = fuelLiters*2.22;
                console.log(`${price.toFixed(2)} lv.`);
            }else if(fuelType==="Diesel"){
                let price = fuelLiters*2.33;
                console.log(`${price.toFixed(2)} lv.`);
            }
        }
    }
    
    

    
    }
    
    fuelTank2(["Diesel", "19", "No"]);