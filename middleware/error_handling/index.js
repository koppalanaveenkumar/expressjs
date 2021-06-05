var express = require('express');
var app = express();
app.use(express.json());

app.get('/user', (req, res) => {
    throw new Error("App crashed");
    res.send({Name: "Naveen"})
})
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send("Something went wrong")
})

app.listen(9013, ()=>{
    console.log("Server started")
})