function loadingBar(num){

    let symbols = Math.round(num/10);
    let dots = 0;
 
    if(symbols<10){
        let bar = "[";
        dots = 10-symbols;
        bar += "%".repeat(symbols)
        bar += ".".repeat(dots)
        bar +="]"
        console.log(symbols+"0% "+bar);
        console.log("Still loading...");

    }
    else{
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        
    }

}

loadingBar(39)
loadingBar(90)
loadingBar(100)