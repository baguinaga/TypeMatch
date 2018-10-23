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

    const userMatch = (newUser) => {
      const difference = []
      quizData.forEach(user => {
        let scoreDiff = 0;
        for(let i = 0 ; i < 8 ; i++) {
          scoreDiff += Math.abs(user.score[i] - newUser.score[i]);
        }
        difference.push(scoreDiff);
      });
      lowestDiff = difference.indexOf(Math.min(...difference));
      return quizData[lowestDiff];
    }

    const match = userMatch(newUser);

    quizData.push(newUser);
    res.json(match);
  });
}