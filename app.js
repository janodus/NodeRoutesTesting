var express = require("express");
var app = express();


//======================ROUTES========================
app.get("/", function(req, res){
  res.send("Hi There");
});

app.get("/bye", function(req,res){
  res.send("Good bye!");
});

app.get("/dog", function(req,res){
  console.log("someone made a REQUEST to /DOG!")
  res.send("meow!");
});

//======================SERVER========================

// Tell express which port to listen tonode
app.listen(process.env.PORT, process.env.IP, function(){console.log("Server has been started.")});