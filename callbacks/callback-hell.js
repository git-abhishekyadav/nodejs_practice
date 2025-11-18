// setTimeout(()=>{
//     setTimeout(() => {
//         setTimeout(() => {
//             console.log("CallbackHell");
//         },1000);
//     },1000);
// },1000);


const fs = require("fs");

fs.writeFile("input.txt", "Example for callback hell",(err) => {
    if(err) throw err;
    console.log("File written successfully");

    fs.readFile('input.txt', 'utf-8',(err,data) => {
        if(err) throw err;
        console.log("Read",data);

        fs.appendFile('input.txt', "\nAppend CallBack",(err) => {
            if(err) throw err;
            console.log("File appended");

            fs.readFile('input.txt', 'utf-8',(err,data) => {
                if(err) throw err;
                console.log('Final read', data);
            })
        })
    });
    
});
