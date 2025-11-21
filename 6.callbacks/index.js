

function greet (name, callbackFn) {
    console.log("Hello",name);
    callbackFn("Good morning");
}


function message(message) {
    console.log("message:",message);
}

greet("abhishek",message);