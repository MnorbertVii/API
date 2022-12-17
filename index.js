'use strict'

//require express

const express = require("express");

//import db connection

require("./config/db");

//import jsonwebtoken

const jwt = require ('jsonwebtoken');

//create express app

const app = express();

//define port to run express app

const port = process.env.PORT || 1000;

//use express middleware on express app

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//add endpoint

app.get('/', (req,res) =>{
    res.send("hello World");
});

// Token Verification 
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], 'RESTfulAPIs', (err, decode) => {
    if (err) req.user = undefined;
    req.user = decode;
    next();
        });
    } else {
req.user = undefined;
next();
    }
});
//API endpoint

//listen to the server 

module.exports = app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`);
});

//import API route

var articleRoutes = require ('./api/routes/articleRoutes'); //importing article route

const userRoutes = require ('./api/routes/userRoutes');   //importing user route

articleRoutes(app);
userRoutes (app);
    
app.use((req, res) => {
    res.status(404).json({
      message: "Route / page doesn't exist.",
    });
  });




