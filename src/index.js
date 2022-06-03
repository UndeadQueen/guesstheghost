const GhostType = ["Phantom",
"Shade",
"Polterguist",
"Demon",
"Banshee", 
"Jinn", 
"Mare", 
"Yokai", 
"Myling", 
"Raiju", 
"Wraith", 
"Revenant", 
"Yurei", 
"Hantu", 
"Obake",
"Spirit",
"Onryo",
"Phantom",
"Goryo",
"The Twins",
"The mimic",
"Oni"]
const User = $("input[name=User]");
const ghostType = $("input[name=typeguess]");
const ghostRoom = $("input[name=roomguess]");
const Ghosts = JSON.stringify(GhostType);
let correctGhost;
let correctRoom;

function uppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
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
                    $("#list").append("<p>" + User.val() +" | "+ uppercase(ghostRoom.val()) + " | " + uppercase(ghostType.val()) + "</p>").addClass("userslist")
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
    });
    $("#ghosts").click(function() {
        try {
        if ($('#list:contains('+ correctGhost +')').length > 0) {
            $(".userslist").find(':contains('+ correctGhost +')').css("background-color", "yellow")
            log("ghost is currently " + correctGhost)
        }
        if ($('#list:contains("'+ correctRoom +'")').length > 0) {
            $(".userslist").find(':contains("'+ correctRoom +'")').css("background-color", "yellow")
            log("room is currently " +  correctRoom)
        }
    } catch (err) {
        console.log(err)
    }
    })
    $("input.Shade").click(function () {
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
});
