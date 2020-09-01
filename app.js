const express = require("express");

const app = express();

app.get("/isApiWork", (req,res)=>{
    const result = "Api server is working";
    res.json({ result: result });
});

app.listen(3000, ()=>{
    console.log("App started on port 3000");
});