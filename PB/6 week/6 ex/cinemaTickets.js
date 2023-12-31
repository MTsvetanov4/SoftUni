function cinemaTickets(input) {

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {

        let movieName = command;
        let placesAvailable = Number(input[index]);
        index++;
        let command1 = input[index];
        index++;
        let placesTaken = 0;

        while (command1 !== "End") {

            let ticketType = command1;
            placesTaken++;

            if (ticketType === "student") {

                studentTickets++;

            } else if (ticketType === "standard") {

                standardTickets++;

            } else if (ticketType === "kid") {

                kidTickets++;

            }

            if (placesTaken === placesAvailable) {
                break;
            }

            command1 = input[index];
            index++;

        }

        let percentTaken = (placesTaken / placesAvailable) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;

    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    let kidTicketsPercent = (kidTickets / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
console.log("----------------------------------------");
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);