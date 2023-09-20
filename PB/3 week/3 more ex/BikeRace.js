// Група	    trail	cross-country	downhill	road
// juniors	    5.50	    8	        12.25	    20
// seniors	    7	        9.50	    13.75	    21.50


function bikeRace(input) {
    let junior = Number(input[0]);
    let senior = Number(input[1]);
    let track = input[2];
    let sum = 0;

    if (track === "trail") {

        sum = (junior * 5.5 + senior * 7) * 0.95;

    } else if (track === "cross-country") {
        if (junior + senior >= 50) {
            sum = (junior * 8 * 0.75 + senior * 9.5 * 0.75) * 0.95;
        } else {
            sum = (junior * 8 + senior * 9.5) * 0.95;
        }
    } else if (track === "downhill") {



        sum = (junior * 12.25 + senior * 13.75) * 0.95;



    } else if (track === "road") {

        sum = (junior * 20 + senior * 21.5) * 0.95;

    }


    console.log(sum.toFixed(2));
}

bikeRace(["10", "20", "trail"]);
console.log("-----------------------------------------");
bikeRace(["21", "26", "cross-country"]);
console.log("-----------------------------------------");
bikeRace(["30", "25", "cross-country"]);
console.log("-----------------------------------------");
bikeRace(["10", "10", "downhill"]);
console.log("-----------------------------------------");
bikeRace(["3", "40", "road"])
