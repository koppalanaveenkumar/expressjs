var express = require('express')
var router = express.Router();
var message = [
    {
        message: 'Hello Akhila',
        from: 'Naveen'
    },
    {
        message: 'Hai Naveen',
        from: 'Akhila'
    },
    {
        message: 'Bye Akhila',
        from: 'Naveen'
    },
]
// http://localhost:9013/homepage
router.get('/homepage', (req, res) => {
    res.send("You are in homepage")
})
http://localhost:9013/login
router.post('/login', (req, res)=>{
    var user = req.body;
    
        if(user.username == "abc" && user.password == "abc"){
            res.send({token:1234})
        }
        else if(user.password == "abc"){
            res.send("user id wrong");
        }
        else
        if(user.username == "abc"){
            res.send("password wrong");
        }
        else{
            res.send("Entered details wrong")
        }

})
http://localhost:9013/messages/:token
router.get('/messages/:token', (req, res)=>{
    var token = req.params.token;
    if(token == 1234){
        res.send(message)
    }
    else{
        res.status(404).send("Enter correct token");
    }
})

module.exports = router;