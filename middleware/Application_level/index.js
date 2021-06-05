// Example 1:
var express = require('express');
var app = express();
// Application level middleware
var auth = (req, res, next)=>{
    console.log('middleware 1 called')
    if(req.headers.token == 1234){
        next();
    }
    else{
        res.send("invalid token")
    }
}
app.use(auth);
app.get('/user', (req, res)=>{
    res.send({name: 'Naveen'})
})

app.listen(9013, ()=>{
    console.log("Server started")
})

// Example 2: 
var express = require('express');
var app = express();
app.use(express.json());
var authmiddleware = (req, res, next)=>{
    if(req.headers.token == 1234){
        next();
    }
    else{
        res.send("Need token")
    }
}
app.use(authmiddleware);

app.get('/getUser', (req, res)=>{
    res.send([
        {
            name: "Naveen"
        },
        {
            name: "Akhila"
        }
    ])
});

app.get('/product', (req, res)=>{
    res.send([
        {
            pid: 1
        },
        {
            pid: 2
        }
    ])
})

app.listen(9013, ()=>{
    console.log("Server started")
})
