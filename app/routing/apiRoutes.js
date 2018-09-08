var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var matchedFriendName;
        var scoreDifference = 9001;
        var user = req.body;
        // var userAnswers = user.answers;
        for (i = 0; i < friends.length; i++) {
            var difference = 0;
            for (let ii = 0; ii < userScore.length; ii++) {
                difference += Math.abs(friends[i].scores[ii] - userScore[ii])
            }
            if (difference < scoreDifference) {
                scoreDifference = difference;
                matchedFriendName = friends[i].userName;
            }
        }
        friends.push(user);
    })
}    
