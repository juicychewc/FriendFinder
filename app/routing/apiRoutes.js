var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var inputAnswers = user.answers;
        
        var scoreDifference = 9001;
                
        for (i = 0; i < friends.length; i++) {
            var difference = 0;
            for (let ii = 0; ii < inputAnswers.length; ii++) {
                difference += Math.abs(friends[i].answers[ii] - inputAnswers[ii])
            }
            if (difference < scoreDifference) {
                scoreDifference = difference;
                matchedFriendName = friends[i].friendName;
                matchedFriendPhoto = friends[i].photo;
            }
        }
        friends.push(user);

        res.json({matchedFriendName: matchedFriendName, matchedFriendPhoto: matchedFriendPhoto });
    })
}    
