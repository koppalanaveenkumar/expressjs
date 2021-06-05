var express = require('express');
var app = express();
app.use(express.json());

var userRouter = require('../routing/routes/user.router')
app.use(userRouter);
app.listen(9013, ()=>{
    console.log("Server started")
})