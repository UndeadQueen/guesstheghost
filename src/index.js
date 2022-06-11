const User = $("input[name=User]");
const ghostType = $("input[name=typeguess]");
const ghostRoom = $("input[name=roomguess]");
let correctGhost;
let correctRoom;
function uppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
function removeguess(string) {
    $(string).click(function() {
        $(this).remove()
    })
}
function log(args) {
    console.log(args)
}
function clearroomguess() {
    $(".Foyer").css("color", "black")
    $(".Livingroom").css("color", "black")
    $(".Kitchen").css("color", "black")
    $(".DiningRoom").css("color", "black")
    $(".Hallway").css("color", "black")
    $(".Workshop").css("color", "black")
    $(".Toilet").css("color", "black")
    $(".UpstairsHway").css("color", "black")
    $(".Bathroom").css("color", "black")
    $(".Utility").css("color", "black")
    $(".MBedroom").css("color", "black")
    $(".SBathroom").css("color", "black")
    $(".GBedroom").css("color", "black")
    $(".BBedroom").css("color", "black")
    $(".Attic").css("color", "black")
}
$(document).ready(function () {
    $(".submitbutton").click(function () {
            if ($(User).val().length <= 0) {
                $(User).css("background-color", "red")
            } if ($(ghostRoom).val().length <= 0) {
                $(ghostRoom).css("background-color", "red")
            } if ($(ghostType).val().length <= 0) {
                $(ghostType).css("background-color", "red")
            }
             if ($(User).val() && $(ghostRoom).val() && $(ghostType).val()) {
                $("#list").append(function() {
                    removeguess($("#list").append("<p>" + User.val() +" | "+ uppercase(ghostRoom.val()) + " | " + uppercase(ghostType.val()) + "</p>").addClass("userslist"))
                    $("input[type=text").val("")
                })
                $(User).css("background-color", "white")
                $(ghostType).css("background-color", "white")
                $(ghostRoom).css("background-color", "white")
            }
    })
//});
$("#remove").click(function () { 
    $("#list").empty();
    $("#correctghost").empty()
    $("input[type=radio]").prop("checked", false);
    correctGhost = ""
    correctRoom = ""
    clearroomguess()
    });
    $("#ghosts").click(function() {
        if ($('#list:contains('+ correctGhost +')').length > 0) {
            $(".userslist").find(':contains('+ correctGhost +')').css("background-color", "yellow")
            log("ghost is currently " + correctGhost)
        }
        if ($('#list:contains("'+ correctRoom +'")').length > 0) {
            $(".userslist").find(':contains("'+ correctRoom +'")').css("background-color", "yellow")
            log("room is currently " +  correctRoom)
        }
    })
    //$("body").addClass("backgroundimage").css("background-image", background)
    $("input.Shade").click(function(){
        correctGhost = "Shade"
    })
    $("input.Demon").click(function(){
        correctGhost = "Demon"
    })
    $("input.Wraith").click(function() {
        correctGhost = "Wraith"
    })
    $("input.Myling").click(function() {
        correctGhost = "Myling"
    })
    $("input.Phantom").click(function() {
        correctGhost = "Phantom"
    })
    $("input.Spirit").click(function() {
        correctGhost = "Spirit"
    })
    $("input.Polterguist").click(function() {
        correctGhost = "Polterguist"
    })
    $("input.Yokai").click(function() {
        correctGhost = "Yokai"
    })
    $("input.Raiju").click(function() {
        correctGhost = "Raiju"
    })
    $("input.Wraith").click(function() {
        correctGhost = "Wraith"
    })
    $("input.Revenant").click(function() {
        correctGhost = "Revenant"
    })
    $("input.Yurei").click(function () {
        correctGhost = "Yurei"
    })
    $("input.Hantu").click(function() {
        correctGhost = "Hantu"
    })
    $("input.Onryo").click(function() {
        correctGhost = "Onryo"
    })
    $("input.Obake").click(function() {
        correctGhost = "Obake"
    })
    $("input.Phantom").click(function() {
        correctGhost = "Phantom"
    })
    $("input.Jinn").click(function() {
        correctGhost = "Jinn"
    })
    $("input.Goryo").click(function() {
        correctGhost = "Goryo"
    })
    $("input.Mimic").click(function() {
        correctGhost = "Mimic"
    })
    $("input.Twins").click(function() {
        correctGhost = "Twins"
    })
    $("input.Mare").click(function() {
        correctGhost = "Mare"
    })
    $("input.Banshee").click(function() {
        correctGhost = "Banshee"
    })
    $("input.Oni").click(function() {
        correctGhost = "Oni"
    })
    $(".Foyer").click(function() {
        clearroomguess()
        correctRoom = "Foyer"
        $(this).css("color", "blue")
    })
    $(".Livingroom").click(function() {
        clearroomguess()
        correctRoom = "Living room"
        $(this).css("color", "blue")
    })
    $(".Kitchen").click(function() {
        clearroomguess()
        correctRoom = "Kitchen"
        $(this).css("color", "blue")
    })
    $(".DiningRoom").click(function() {
        clearroomguess()
        correctRoom = "Dining room"
        $(this).css("color", "blue")
    })
    $(".Hallway").click(function() {
        clearroomguess()
        correctRoom = "Hallway"
        $(this).css("color", "blue")
    })
    $(".Workshop").click(function() {
        clearroomguess()
        correctRoom = "Workshop"
        $(this).css("color", "blue")
    })
    $(".Toilet").click(function() {
        clearroomguess()
        correctRoom = "Toilet"
        $(this).css("color", "blue")
    })
    $(".UpstairsHway").click(function() {
        clearroomguess()
        correctRoom = "Upstairs hallway"
        $(this).css("color", "blue")
    })
    $(".Bathroom").click(function() {
        clearroomguess()
        correctRoom = "Bathroom"
        $(this).css("color", "blue")
    })
    $(".Utility").click(function() {
        clearroomguess()
        correctRoom = "Utility"
        $(this).css("color", "blue")
    })
    $(".MBedroom").click(function() {
        clearroomguess()
        correctRoom = "Master bedroom"
        $(this).css("color", "blue")
    })
    $(".SBathroom").click(function () {
        clearroomguess()
        correctRoom = "Side bathroom"
        $(this).css("color", "blue")
    })
    $(".GBedroom").click(function() {
        clearroomguess()
        correctRoom = "Girls bedroom"
        $(this).css("color", "blue")
    })
    $(".BBedroom").click(function() {
        clearroomguess()
        correctRoom = "Boys bedroom"
        $(this).css("color", "blue")
    })
    $(".Attic").click(function() {
        clearroomguess()
        correctRoom = "Attic"
        $(this).css("color", "blue")
    })
    $(".bleasdale").click(function () {
        window.location.href = "./bleasdale.html"
    })
    $(".grafton").click(function() {
        window.location.href = "./grafton.html"
    })
    $(".willow").click(function() {
        window.location.href = "./willow.html"
    })
});

function main() {
    window.location.href = "index.html"
}
function bleasdale() {
    window.location.href = "bleasdale.html"
}
function grafton() {
    window.location.href = "grafton.html"
}
function willow(){
    window.location.href = "willow.html"
}