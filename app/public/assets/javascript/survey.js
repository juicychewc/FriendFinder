$(document).ready(function () {
    $("#submit").on("click", function (event) {
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

        $.post('/api/friends', newFriend).then(function (data) {

            $("#matchedUserName").text(data.matchedFriendName);
            $("#matchedUserImage").attr("src", data.matchedFriendPhoto);
            $(".modal").modal({
                dismissible: true
            });
            $(".modal").modal("open");
        }); // post
    }); // submit
}); // doc ready