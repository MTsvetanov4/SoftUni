function spiceMustFlow(curYield) {

    let spice = 0;
    let days = 0;

    while (curYield >= 100) {

        days++;
        spice += curYield - 26;
        curYield -= 10;

    }

    if (spice >= 26) {

        spice -= 26;

    }

    console.log(days);
    console.log(spice);

}

spiceMustFlow(111);
spiceMustFlow(450);