function echoType(input) {

    console.log(typeof (input));
    if (typeof (input) == "string") {
        console.log("Hello, JavaScript!");
    } else if (typeof (input) == "number") {
        console.log(input);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}


echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
