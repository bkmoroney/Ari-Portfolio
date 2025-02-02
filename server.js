const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000), function(){
  console.log("Server started on port 3000");
};

//localhost.3000
    //in web address