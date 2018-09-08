$(".submit").on("click", function (event) {
    event.preventDefault();

    var questionsAnswers = $("#surveyQuestions").serializeArray();
    var answersArray = [];
    for (i = 0; i < questionsAnswers.length; i++) {
        answersArray.push(questionsAnswers[i].value);
    }

    var newFriend = {
        friendName: $("#userName").val().trim(),
        answers: answersArray
    }

    $.post("/api/friends", newFriend, function (data) {
        if (data) {
            console.log("display matched friends");
        }
    });
});