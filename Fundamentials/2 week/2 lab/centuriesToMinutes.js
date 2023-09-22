function centuriesToMinutes(centuries) {

    let cenToYears = centuries * 100;
    let yearsToDays = Math.trunc(cenToYears * 365.2422);
    let daysToHours = yearsToDays * 24;
    let hoursToMins = daysToHours * 60;

    console.log(`${centuries} centuries = ${cenToYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMins} minutes`);

}

centuriesToMinutes(1);
centuriesToMinutes(5);