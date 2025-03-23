$(document).ready(function () {
    $("#chat-icon").click(function () {
        $("#chat-container").fadeToggle();
    });

    $("#close-chat").click(function () {
        $("#chat-container").fadeOut();
    });
});