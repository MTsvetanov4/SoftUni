function spaceship(input){
   
 let shipWidth = Number(input[0]);
let shipLength = Number(input[1]);
let shipHeight = Number(input[2]);
let srednaVisochinaNaAvstronavtite = Number(input[3]);
let v = shipWidth * shipLength * shipHeight;
let vStaq = (srednaVisochinaNaAvstronavtite+0.4)*2*2;
let mqstoZaChovek = Math.floor(v/vStaq);

if(mqstoZaChovek <3 ){
    console.log("The spacecraft is too small.");
    }else if(mqstoZaChovek>10){
        console.log("The spacecraft is too big.");
    }else{
        console.log(`The spacecraft holds ${mqstoZaChovek} astronauts.` );
    }

}
spaceship(["3",
"3",
"4",
"1.68"]);
