var express = require('express');

var app = express();


app.get('/', function(req, res){
    res.send(
        "<h1> demo docker</h1>"
        +"<hr/>"
        +"<h4 style='font-family: consolos'>Rushikesh Sapate</h4>"
        +"<h4>Sanket Bansod</h4>"
    )
})
app.get('/aboutus', function(req, res){
    res.send(
        "<h1> demo docker</h1>"
        +"<hr/>"
        +"<h4 style='font-family: consolos'>We are cdac students experimentring with docker</h4>"
        +"<h4>asjfbgsdiyfgsadfhbsadmaf;kjmdnfh  </h4>"
    )
})

app.listen(6969);
console.log("listen on " + port);