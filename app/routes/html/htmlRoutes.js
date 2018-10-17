const path = require("path");

module.exports = function(app) {

  //home route
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"../../public/home.html"));
  });

  //quiz(short-form) route
  app.get("/quiz", function(req,res){
    res.sendFile(path.join(__dirname,"../../public/quiz.html"));
  });

  //404 page, set to home.html
  app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"../../public/home.html"));
  });
}