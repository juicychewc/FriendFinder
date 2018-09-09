$(document).ready(function () {

    $(".submit").on("click", function (event) {
        event.preventDefault();

        var questionsAnswers = $("#surveyQuestions").serializeArray();
        var answersArray = [];
        for (i = 0; i < questionsAnswers.length; i++) {
            answersArray.push(questionsAnswers[i].value);
        }

        var newFriend = {
            friendName: $("#userName").val().trim(),
            photo: $("#photoLink").val().trim(),
            answers: answersArray
        }

        var matchedFriendName;
        var matchedFriendPhoto;

        app.post("/api/friends", function (req, res) {
            var scoreDifference = 9001;
            var user = req.body;
            var inputAnswers = user.answers;
            for (i = 0; i < friends.length; i++) {
                var difference = 0;
                for (let ii = 0; ii < inputAnswers.length; ii++) {
                    difference += Math.abs(friends[i].answers[ii] - inputAnswers[ii])
                }
                if (difference < scoreDifference) {
                    scoreDifference = difference;
                    matchedFriendName = friends[i].friendName;
                    matchedFriendPhoto = friends[i].photo;
                    return matchedFriendName;
                    return matchedFriendPhoto;

                }
            }
        })

        $("#matchedUserName").text(matchedFriendName);
        $("#matchedUserImage").attr("src", matchedFriendPhoto);
        $(".modal").modal({
            dismissible: true,
        });
        $(".modal").modal("open");

        friends.push(newFriend);
    });
})