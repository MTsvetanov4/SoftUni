function uchebniMateriali(input){
    let pensPack=5.8;
    let pensPackCount=Number(input[0]);
    let markersPack=7.2;
    let markersPackCount=Number(input[1]);
    let preparat=1.2;
    let preparatLiters=Number(input[2]);
    let percentDiscount=Number(input[3])/100;
    let total=pensPackCount*pensPack+markersPackCount*markersPack+preparatLiters*preparat;
    let totalAfterDis= total - (total*percentDiscount);
    console.log(totalAfterDis);
    
    }