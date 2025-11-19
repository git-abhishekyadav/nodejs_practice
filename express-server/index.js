const express = require("express");

const app = express();

app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.send("Hello WOrld");
});

app.use((err,req,res,next) => {
    if(err) {
        res.status(500).send("Internal Server Error"); 
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to SErver on port ${PORT}`);
});