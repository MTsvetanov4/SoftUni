function histogram(input){
nums = Number(input[0]);
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
for (let i=1; i<=nums; i++){
    let curNum = Number(input[i]);
  if (curNum <200){
    p1++;
  }else if(curNum<=399){
    p2++;
}else if(curNum<=599){
    p3++;
}else if(curNum<=799){
    p4++;
}else{
    p5++;
}


}
let p1p = (p1/nums)*100;
let p2p = p2/nums*100;
let p3p = p3/nums*100;
let p4p = p4/nums*100;
let p5p = p5/nums*100;

    console.log(`${p1p.toFixed(2)}%`);
    console.log(`${p2p.toFixed(2)}%`);
    console.log(`${p3p.toFixed(2)}%`);
    console.log(`${p4p.toFixed(2)}%`);
    console.log(`${p5p.toFixed(2)}%`);
  
 
}
histogram(["3",

"1",

"2",

"999"])