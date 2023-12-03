const boxes = $(".box");
const text = $("#text");
const accent = "#FFDEAA";
let round = 10;
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

// Game starth
$(document).on("keypress", () => {
    alert("game start");
    $("#text").text(`Round ${round}`);

    for (let i = 1; i <= round; i++) {
        console.log(i);
        simonList.push(Math.ceil(Math.random() * 4));
        console.log(simonList);
    }


});

