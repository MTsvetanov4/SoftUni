function summerOutfit(input){
let degrees = Number(input[0]);
let partOfDay = input[1];

if (degrees<=18){
if(partOfDay === "Morning"){
    console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
}else if (partOfDay === "Afternoon"){
    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
}else{
    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
}

}else if(degrees <= 24){
if(partOfDay === "Morning"){
    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
}else if (partOfDay === "Afternoon"){
    console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
}else{
    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
}
}else{
    if(partOfDay === "Morning"){
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    }else if (partOfDay === "Afternoon"){
        console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
    }else{
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
    
}


}
summerOutfit(["22",
"Afternoon"])
;