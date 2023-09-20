// 1. Име на сериал – текст
// 2. Продължителност на епизод – цяло число в диапазона [10… 90]
// 3. Продължителност на почивката – цяло число в диапазона [10… 120]

// Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.

// Ако времето е достатъчно да изгледате епизода:
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// · Ако времето не Ви е достатъчно:
// "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
// Времето да се закръгли до най-близкото цяло число нагоре.
function pets(input){


    let serialName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunch = breakDuration/8;
    let relax = breakDuration/4;
    let totalTime = episodeDuration+lunch+relax;

    if (totalTime<=breakDuration){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(breakDuration-totalTime)} minutes free time.`);
    }else{ 
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(totalTime-breakDuration)} more minutes.`);
    }
    }
    
    pets(["Teen Wolf", "48", "60"]);