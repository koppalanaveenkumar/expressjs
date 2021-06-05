// Used to apply middlware at router

var express = require('express');
var app = express();
app.use(express.json());
var productRouter = require('./routes/product.route')
app.use(productRouter);
app.listen(9013, ()=>{
    console.log("Server started")
})
