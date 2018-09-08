var friends = require("../../../data/friends")

$(".submit").on("click", function (event) {
    event.preventDefault();

    var questionsAnswers = $("#surveyQuestions").serializeArray();
    var answersArray = [];
    for (i = 0; i < questionsAnswers.length; i++) {
        answersArray.push(questionsAnswers[i].value);
    }

    var newFriend = {
        friendName: $("#userName").val().trim(),
        //photo link would be in a name:value pair here but no functionality yet
        answers: answersArray
    }

    $.post("/api/friends", newFriend, function (data) {
        
    });
});

