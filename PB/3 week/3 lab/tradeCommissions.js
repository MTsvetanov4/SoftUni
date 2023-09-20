function tradeCommissions(input){
let city = input[0];
let sales = Number(input[1]);
let commissions = 0;

switch(city){
    case "Sofia" : 
    if (0 <= sales && sales <= 500 ){
    commissions = sales * 0.05;
    console.log(commissions.toFixed(2));
    }else if (500<sales && sales <= 1000){
        commissions = sales * 0.07;
    console.log(commissions.toFixed(2));
    }else if (1000<sales && sales <= 10000){
        commissions = sales * 0.08;
    console.log(commissions.toFixed(2));
    }else if (sales > 10000){
        commissions = sales * 0.12;
    console.log(commissions.toFixed(2));
    }else if (sales < 0){
        console.log("error");
    }
    break;
    case "Varna" :
        if (0 <= sales && sales <= 500 ){
            commissions = sales * 0.045;
            console.log(commissions.toFixed(2));
            }else if (500<sales && sales <= 1000){
                commissions = sales * 0.075;
            console.log(commissions.toFixed(2));
            }else if (1000<sales && sales <= 10000){
                commissions = sales * 0.1;
            console.log(commissions.toFixed(2));
            }else if (sales > 10000){
                commissions = sales * 0.13;
            console.log(commissions.toFixed(2));
            }else if (sales < 0){
                console.log("error");
            }break;
    case "Plovdiv" :
        if (0 <= sales && sales <= 500 ){
            commissions = sales * 0.055;
            console.log(commissions.toFixed(2));
            }else if (500<sales && sales <= 1000){
                commissions = sales * 0.08;
            console.log(commissions.toFixed(2));
            }else if (1000<sales && sales <= 10000){
                commissions = sales * 0.12;
            console.log(commissions.toFixed(2));
            }else if (sales > 10000){
                commissions = sales * 0.145;
            console.log(commissions.toFixed(2));
            }else if (sales < 0){
                console.log("error");
            }break;
    default : console.log("error");break;
}

}
tradeCommissions(["Sofia", "1500"]);