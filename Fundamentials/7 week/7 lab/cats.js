function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }


    for (let catAsString of arr) {
        let tokens = catAsString.split(" ");
        let name = tokens[0];
        let age = tokens[1];

        let cat = new Cat(name, age);
        cat.meow();

    }


}
cats(['Mellow 2', 'Tom 5'])