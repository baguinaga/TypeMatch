const quizData = require("../../data/quizData");

module.exports = function(app) {

  //api route, returns all users in DB
  app.get("/api/quiz", function(req, res) {
    res.json(quizData);
  });

  //api post route, adds user and returns type and use match
  app.post("/api/quiz", function(req, res) {
    const newUser = req.body;
    quizData.push(newUser);
    // api call response/ logic
    // send back type and or closest match
    res.json(newUser)
  });
}