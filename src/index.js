let User = [""];
let ghostType = [""];
let ghostRoom = [""];
let correctGhost = '';
let correctUser = [""]
// 
function getGhostType() {
    switch (ghostType) {
        case $("input[class=Shade]"):
            $("ul").filter("Shade")
            break;
        case $("input[class=Banshee]"):
            $("ul").filter("Banshee")
            break;
        case "Polterguist":
            $("ul").filter("Polterguist")
            break;
        case "Jinn":
            $("ul").filter("Jinn")
            break;
        case "Mare":
            $("ul").filter("Mare");
            break;
        case "Demon":

            break;
        case "Yokai":

            break;
        case "Myling":

            break;
        case "Raiju":
            break;

        case "Wraith":
            break;
        case "Revenant":
            break;
        case "Yurei":
            break;

        case "Hantu":
            break;
        case "Obake":
            break;
        case "Phantom":
            break;
        case "Oni":
            break;
        case "Goryo":
            break;
        case "The Twins":
            break;
        case "The Mimic":
            break;
        case "Spirit":
            break;
        case "Onryo":
            break;
    }
    return ghostType;
}
function getGhostRoom() {
    switch (ghostRoom) {
        case value:

            break;

    }
    return ghostRoom;
}
function getCorrectGhost(iscorrectGhost) {

}
function log(args) {
    console.log(args)
}
$(document).ready(function () {
    $(".submitbutton").click(function () {
        log("Hello world")
        $("#list").append(function() {
        $("ul").append("<li>" + $("input[name=User]").val() +" | "+ $("input[name=ghostroom]").val() + " | " + $("input[name=ghosttype]").val() + "</li>"); 
        $("input[type=text]").val("")
    })
});
$("#remove").click(function () { 
    $("#list").empty();
    $("input[type=radio]").prop("checked", false);
    });
    $("input[name=ghosttype]").click(function() {
        getGhostType();
    })
});

