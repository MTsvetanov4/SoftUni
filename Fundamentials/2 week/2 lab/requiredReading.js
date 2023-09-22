function requiredReading(pagesOfCurBook, readPagesPerHour, days) {

    let requiredHours = pagesOfCurBook / readPagesPerHour / days;

    console.log(requiredHours);

}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);