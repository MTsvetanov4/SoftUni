function flowers(input) {
    let harizantemi = Number(input[0]);
    let roses = Number(input[1]);
    let laleta = Number(input[2]);
    let season = input[3];
    let weekend = input[4];
    let sum = 0;

    switch (weekend) {

        case "Y":

            if (season === "Spring") {

                if (laleta > 7) {

                    sum = harizantemi * 2 + roses * 4.1 + laleta * 2.5;
                    sum += sum * 0.15;
                    sum -= sum * 0.05;

                } else {

                    sum = harizantemi * 2 + roses * 4.1 + laleta * 2.5;
                    sum += sum * 0.15;

                }

            } else if (season === "Summer") {

                sum = harizantemi * 2 + roses * 4.1 + laleta * 2.5;
                sum += sum * 0.15;

            } else if (season === "Autumn") {

                sum = harizantemi * 3.75 + roses * 4.5 + laleta * 4.15;
                sum += sum * 0.15;

            } else if (season === "Winter") {

                if (roses >= 10) {

                    sum = harizantemi * 3.75 + roses * 4.5 + laleta * 4.15;
                    sum += sum * 0.15;
                    sum -= sum * 0.1;

                } else {

                    sum = harizantemi * 3.75 + roses * 4.5 + laleta * 4.15;
                    sum += sum * 0.15;

                }

            } break;

        case "N":

            if (season === "Spring") {

                if (laleta > 7) {

                    sum = harizantemi * 2 + roses * 4.1 + laleta * 2.5;
                    sum -= sum * 0.05;

                } else {

                    sum = harizantemi * 2 + roses * 4.1 + laleta * 2.5;

                }

            } else if (season === "Summer") {

                sum = harizantemi * 2 + roses * 4.1 + laleta * 2.5;

            } else if (season === "Autumn") {

                sum = harizantemi * 3.75 + roses * 4.5 + laleta * 4.15;

            } else if (season === "Winter") {

                if (roses >= 10) {

                    sum = harizantemi * 3.75 + roses * 4.5 + laleta * 4.15;
                    sum -= sum * 0.1;

                } else {

                    sum = harizantemi * 3.75 + roses * 4.5 + laleta * 4.15;

                }

            } break;
    }

    if (harizantemi + roses + laleta > 20) {

        sum -= sum * 0.2;

    }

    sum += 2;
    console.log(sum.toFixed(2));

}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);
flowers(["3", "10", "9", "Winter", "Y"]);
flowers(["10", "10", "10", "Autumn", "Y"]);