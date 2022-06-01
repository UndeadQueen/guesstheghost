const User = $("input[name=User]");
const ghostType = $("input[name=typeguess]");
const ghostRoom = $("input[name=roomguess]");
let correctGhost = '';
let correctUser = [""]
const Values = [$(User), $(ghostType), $(ghostRoom)]
// 
function getGhostType() {
    switch (ghostType) {
        case $("input[class=Shade][type=radio]"):
            $("ul").filter("Shade").css("background-color: yellow")
            break;
        case $("input[class=Banshee][type=radio]"):
            $("ul").filter("Banshee").css("background-color: yellow")
            break;
        case $("input[type=radio][class=Polterguist]"):
            $("ul").filter("Polterguist").css("background-color: yellow")
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
            if ($(User).val().length <= 0) {
                // alert("please fill out the required areas")
                // log("please fill out the required areas")
                $(User).css("background-color", "red")
            } if ($(ghostRoom).val().length <= 0) {
                // alert("please fill out the required areas")
                // log("please fill out the required areas")
                $(ghostRoom).css("background-color", "red")
            } if ($(ghostType).val().length <= 0) {
                // alert("please fill out the required areas")
                // log("please fill out the required areas")
                $(ghostType).css("background-color", "red")
            }
             if ($(User).val() && $(ghostRoom).val() && $(ghostType).val()) {
                $("#list").append(function() {
                    $("#list").append("<p>" + User.val() +" | "+ ghostRoom.val() + " | " + ghostType.val() + "</p>").addClass("userslist")
                    $("input[type=text").val("")
                })
                $(User).css("background-color", "white")
                $(ghostType).css("background-color", "white")
                $(ghostRoom).css("background-color", "white")
            }

        // log("Hello world")
        // $("#list").append(function() {
        // $("#list").append("<p>" + $("input[name=User]").val() +" | "+ $("input[name=ghostroom]").val() + " | " + $("input[name=ghosttype]").val() + "</p>").addClass("userslist"); 
        // $("input[type=text]").val("")
    })
//});
$("#remove").click(function () { 
    $("#list").empty();
    $("#correctghost").empty()
    $("input[type=radio]").prop("checked", false);
    });
    $("input[name=ghosttype]").click(function() {
        getGhostType();
    })
    $("#ghosts").click(function() {
        if ($("#list:contains('Shade')").length > 0 && $("#list:contains('Foyer')").length > 0) {
            $(".userslist").find(":contains('Shade')").css("background-color", "yellow")
            $(".userslist").find(":contains('Foyer')").css("background-color", "yellow")
        }
    })
});