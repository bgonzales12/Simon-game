const boxes = $(".box");
const text = $("#text");
const accent = "#FFDEAA";
let round = 10;
let playerFail = false;
let simonList = [];
let playerList = [];

boxes.on("mousedown", (event) => {
    $(event.target).css("filter", "brightness(50%)");
    $(event.target).css("border-color", accent);
});
boxes.on("mouseup", (event) => {
    $(event.target).css("filter", "brightness(100%)");
    $(event.target).css("border-color", "black");
});

$(document).on("keypress", () => {
    alert("game start");
    
    for (let i = 1; i <= round; i++) {
        console.log(i);
        simonList.push(Math.ceil(Math.random() * 4));
        console.log(simonList);
    }
});