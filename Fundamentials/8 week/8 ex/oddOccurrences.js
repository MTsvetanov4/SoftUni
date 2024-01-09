function oddOccurrences(str) {

    let elementsToStr = str.toLowerCase().split(" ");
    let elements = [];
    let result = "";


    for (let element of elementsToStr) {

        if (elements.includes(element)) {
            let index = elements.indexOf(element);
            elements[index + 1]++;

        } else {
            elements.push(element);
            elements.push(1);
        }

    }

    for (let i = 0; i < elements.length; i++) {

        if (typeof elements[i] == "number") {
            if (elements[i] % 2 == 0) {
                elements.splice(i - 1, 2);
                i = 0;

            }
        }
    }


    for (let j = 0; j < elements.length; j += 2) {
        if (result.length < 1) {
            result += elements[j];
        } else {
            result += " " + elements[j];
        }
    }

    console.log(result);

}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')