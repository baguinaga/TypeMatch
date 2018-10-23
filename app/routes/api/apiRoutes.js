const quizData = require("../../data/quizData");
const math = require("mathjs")

module.exports = function(app) {

  //api route, returns all users in DB
  app.get("/api/quiz", function(req, res) {
    res.json(quizData);
  });

  //api post route, adds user and returns type and use match
  app.post("/api/quiz", function(req, res) {
    const newUser = req.body;

    const userMatch = () => {
      userStd = []
      quizData.forEach(user => {
        userStd.push(user.score, newUser.score)
      });
      return quizData[Math.min(userStd)];
    }

    quizData.push(newUser);
    // send back type and or closest match
    res.json(newUser)
  });
}