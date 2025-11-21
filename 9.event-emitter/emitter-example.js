const EventEmitter = require("events");

class SendEmail extends EventEmitter {
    sendEmail(user, email) {
        console.log("User SIgnup SUceessfull");

        this.emit("userSingedup",{user, email});
        
    }
}

const userSignup = new SendEmail();

userSignup.on("userSingedup",(user) => {
    console.log("sending Email to",user.email);
});

userSignup.sendEmail("ABhish","abhish@gmail.com")