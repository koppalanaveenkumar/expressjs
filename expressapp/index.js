// ExpressJS: It is a serve side JS framework for developing web applications specific to webservices(RESTFUL);
// RESTFUL : Representational state transfer
// http protocl (Hypertext Transfer Protocol): request, response
// Features ExpressJS : Light weight, it is to create restful API with express, less configration(Package.json);
// Install ExpressJS : npm i express

var express = require('express');
var app = express();
// Middleware
app.use(express.json());
var users = [
    {
        name: "Naveen",
        age: 24
    },
    {
        name: "Akhila",
        age: 22
    },
];

// GET provide resources from user
// http://localhost:9013/allUsers;
app.get('/allUsers', (req, res) => {
    res.send(users);
})
// POST - used to send data to servers
// http://localhost:9013/addUser;
app.post('/addUser', (req, res)=>{
    var user = req.body;
    users.push(user);
    res.status(200).send("added sucefully");
})
app.listen(9013,()=>{
    console.log("Server started")
})