
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
        correctRoom = "Foyer"
        $(this).css("color", "blue")
    })
    $(".Livingroom").click(function() {
        correctRoom = "Living room"
        $(this).css("color", "blue")
    })
    $(".Kitchen").click(function() {
        correctRoom = "Kitchen"
        $(this).css("color", "blue")
    })
    $(".DiningRoom").click(function() {
        correctRoom = "Dining room"
        $(this).css("color", "blue")
    })
    $(".Hallway").click(function() {
        correctRoom = "Hallway"
        $(this).css("color", "blue")
    })
    $(".Workshop").click(function() {
        correctRoom = "Workshop"
        $(this).css("color", "blue")
    })
    $(".Toilet").click(function() {
        correctRoom = "Toilet"
        $(this).css("color", "blue")
    })
    $(".UpstairsHway").click(function() {
        correctRoom = "Upstairs hallway"
        $(this).css("color", "blue")
    })
    $(".Bathroom").click(function() {
        correctRoom = "Bathroom"
        $(this).css("color", "blue")
    })
    $(".Utility").click(function() {
        correctRoom = "Utility"
        $(this).css("color", "blue")
    })
    $(".MBedroom").click(function() {
        correctRoom = "Master bedroom"
        $(this).css("color", "blue")
    })
    $(".SBathroom").click(function () {
        correctRoom = "Side bathroom"
        $(this).css("color", "blue")
    })
    $(".GBedroom").click(function() {
        correctRoom = "Girls bedroom"
        $(this).css("color", "blue")
    })
    $(".BBedroom").click(function() {
        correctRoom = "Boys bedroom"
        $(this).css("color", "blue")
    })
    $(".Attic").click(function() {
        correctRoom = "Attic"
        $(this).css("color", "blue")
    })
});
