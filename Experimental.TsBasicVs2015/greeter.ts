class Greeter {
    constructor(public message: string) {
    }

    greet(): string {
        return "Hello " + this.message;
    }
}

//new Greeter("World").greet();