const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

myFirstEmitter.on("greet", (name) => {
    console.log("Hello", name);
});

myFirstEmitter.emit("greet","Abhishek");


myFirstEmitter.emit("greet","Yadav");
