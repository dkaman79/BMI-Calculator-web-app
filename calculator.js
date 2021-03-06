//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    
    res.send("The calculation of the two numbers is: " + result);
});



app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

    var Height = parseFloat(req.body.height);
    var Weight = parseFloat(req.body.weight);
    var bmi = Weight/(Height*Height);
    
    res.send("The BMI of the person is " + bmi);
});





app.listen("3000", function() {
    console.log("Server started on port at 3000");
});