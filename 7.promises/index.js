const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(console.log);



Promise.resolve().then(() => console.log("promise"));

function divideFn(num1,num2) {
    return new Promise((resolve, reject) => {
        if(num2===0) {
            reject("Cannot divide by 0");
        }

        resolve(num1/num2);
    });
}

    divideFn(100,0).then((res) => {
            console.log("result",res);

        }).catch((err) => {
            console.log("error",err);

        });