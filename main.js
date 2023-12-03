const boxes = $(".box");
const text = $("#text");
const accent = "#FFDEAA";
const boxIDS = ["one", "two", "three", "four"];
let round = 0;
let playerFail = false;
let simonList = [];
let playerList = [];

// Dim and change border color of boxes on click
boxes.on("mousedown", (event) => {
    $(event.target).css("filter", "brightness(50%)");
    $(event.target).css("border-color", accent);
});
boxes.on("mouseup", (event) => {
    $(event.target).css("filter", "brightness(100%)");
    $(event.target).css("border-color", "black");
});

boxes.on("click", (event) => {
    const playerChosenColour = event.target.id;
    playerList.push(playerChosenColour);
    console.log(playerList);
    checkAnswer(playerList.length - 1);
});

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = boxIDS[randomNumber];
    simonList.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(400).fadeOut(400).fadeIn(400);
    round++;
    $("#text").text(`Round ${round}`);
    console.log(simonList);
}

function checkAnswer(currentLevel) {
    console.log(currentLevel);
    if (simonList[currentLevel] === playerList[currentLevel]) {
        if (simonList.length === playerList.length) {
            console.log("success");
            $("#text").text("Success!");
            setTimeout(() => {
                nextSequence();
            }, 1000);
            playerList = [];
        }
    } else {
        console.log("wrong");
        $("#text").text("Game Over, Press Any Key to Restart");
        round = 0;
        playerFail = true;
    }
}

// Game start
$(document).on("keypress", () => {
    // alert("game start");
    nextSequence();
});

