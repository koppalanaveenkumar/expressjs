var express = require('express');
var router = express.Router();
var auth = (req, res, next)=>{
    if(req.headers.token == 1234){
        next();
    }
    else{
        res.status(401).send("Token required")
    }
}
router.use(auth);
// http://localhost:9013/inbox
router.get('/route', (req, res)=>[
    res.send("Hello world!")
])

module.exports = router;