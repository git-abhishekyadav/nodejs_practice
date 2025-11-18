const EventEmitter = require("events");

class MyCustomerEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }

    greet(name) {
        this.emit("greeting", `${this.greeting}, ${name}`)
    }
}

const customEmitter = new MyCustomerEmitter();

customEmitter.on("greeting",(input) => {
    console.log(`Greeting event`,input);
});

customEmitter.greet("ABhishek Yadav");