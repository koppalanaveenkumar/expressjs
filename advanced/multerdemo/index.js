var express = require('express');
var path = require('path');
var app = express();

var multer = require('multer');
var upload = multer({dest: 'uploads/'})
var options = {
    root: path.join(__dirname)
}

app.get('/', (req, res)=>{
    res.sendFile('./index.html', options)
})

app.post('/upload', upload.single('avatar'), (req, res)=>{
    console.log(req.file);
})

app.listen(9011, ()=>{
    console.log("Server started")
})