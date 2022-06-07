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
    $(".Workshop").css("color", "black")
    $(".TBedroom").css("color", "black")
    $(".UpstairsHway").css("color", "black")
    $(".Nursery").css("color", "black")
    $(".Utility").css("color", "black")
    $(".MBedroom").css("color", "black")
    $(".UBedroom").css("color", "black")
    $(".UBathroom").css("color", "black")
    $(".Storage").css("color", "black")
}

function clearghostguess() {
    $(".Shadetext").css("color", "black")
    $(".Demontext").css("color", "black")
    $(".Phantomtext").css("color", "black")
    $(".Polterguisttext").css("color", "black")
    $(".Bansheetext").css("color", "black")
    $(".Jinntext").css("color", "black")
    $(".Maretext").css("color", "black")
    $(".Yokaitext").css("color", "black")
    $(".Mylingtext").css("color", "black")
    $(".Raijutext").css("color", "black")
    $(".Wraithtext").css("color", "black")
    $(".Revenanttext").css("color", "black")
    $(".Yureitext").css("color", "black")
    $(".Hantutext").css("color", "black")
    $(".Obaketext").css("color", "black")
    $(".Spirittext").css("color", "black")
    $(".Onryotext").css("color", "black")
    $(".Goryotext").css("color", "black")
    $(".Twinstext").css("color", "black")
    $(".Mimictext").css("color", "black")
    $(".Onitext").css("color", "black")
}



$(document).ready(function () {
    $("#remove").click(function () { 
        $("#list").empty();
        $("#correctghost").empty()
        $("input[type=radio]").prop("checked", false);
        correctGhost = ""
        correctRoom = ""
        clearroomguess()
        clearghostguess()
        });

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

$(".Shadetext").click(function(){
    clearghostguess()
    correctGhost = "Shade"
    $(this).css("color", "blue")
})
$(".Demontext").click(function(){
    clearghostguess()
    correctGhost = "Demon"
    $(this).css("color", "blue")
})
$(".Wraithtext").click(function() {
    clearghostguess()
    correctGhost = "Wraith"
    $(this).css("color", "blue")
})
$(".Mylingtext").click(function() {
    clearghostguess()
    correctGhost = "Myling"
    $(this).css("color", "blue")
})
$(".Phantomtext").click(function() {
    clearghostguess()
    correctGhost = "Phantom"
    $(this).css("color", "blue")
})
$(".Spirittext").click(function() {
    clearghostguess()
    correctGhost = "Spirit"
    $(this).css("color", "blue")
})
$(".Polterguisttext").click(function() {
    clearghostguess()
    correctGhost = "Polterguist"
    $(this).css("color", "blue")
})
$(".Yokaitext").click(function() {
    clearghostguess()
    correctGhost = "Yokai"
    $(this).css("color", "blue")
})
$(".Raijutext").click(function() {
    clearghostguess()
    correctGhost = "Raiju"
    $(this).css("color", "blue")
})
$(".Wraithtext").click(function() {
    clearghostguess()
    correctGhost = "Wraith"
    $(this).css("color", "blue")
})
$(".Revenanttext").click(function() {
    clearghostguess()
    correctGhost = "Revenant"
    $(this).css("color", "blue")
})
$(".Yureitext").click(function () {
    clearghostguess()
    correctGhost = "Yurei"
    $(this).css("color", "blue")
})
$(".Hantutext").click(function() {
    clearghostguess()
    correctGhost = "Hantu"
    $(this).css("color", "blue")
})
$(".Onryotext").click(function() {
    clearghostguess()
    correctGhost = "Onryo"
    $(this).css("color", "blue")
})
$(".Obaketext").click(function() {
    clearghostguess()
    correctGhost = "Obake"
    $(this).css("color", "blue")
})
$(".Phantomtext").click(function() {
    clearghostguess()
    correctGhost = "Phantom"
    $(this).css("color", "blue")
})
$(".Jinntext").click(function() {
    clearghostguess()
    correctGhost = "Jinn"
    $(this).css("color", "blue")
})
$(".Goryotext").click(function() {
    clearghostguess()
    correctGhost = "Goryo"
    $(this).css("color", "blue")
})
$(".Mimictext").click(function() {
    clearghostguess()
    correctGhost = "Mimic"
    $(this).css("color", "blue")
})
$(".Twinstext").click(function() {
    clearghostguess()
    correctGhost = "Twins"
    $(this).css("color", "blue")
})
$(".Maretext").click(function() {
    clearghostguess()
    correctGhost = "Mare"
    $(this).css("color", "blue")
})
$(".Bansheetext").click(function() {
    clearghostguess()
    correctGhost = "Banshee"
    $(this).css("color", "blue")
})
$(".Onitext").click(function() {
    clearghostguess()
    correctGhost = "Oni"
    $(this).css("color", "blue")
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
$(".Workshop").click(function() {
    clearroomguess()
    correctRoom = "Workshop"
    $(this).css("color", "blue")
})
$(".TBedroom").click(function() {
    clearroomguess()
    correctRoom = "Twin bedroom"
    $(this).css("color", "blue")
})
$(".UpstairsHway").click(function() {
    clearroomguess()
    correctRoom = "Upstairs hallway"
    $(this).css("color", "blue")
})
$(".UBathroom").click(function() {
    clearroomguess()
    correctRoom = "Upstairs bathroom"
    $(this).css("color", "blue")
})
$(".Utility").click(function() {
    clearroomguess()
    correctRoom = "Utility"
    $(this).css("color", "blue")
})
$(".MBedroom").click(function () {
    clearroomguess()
    correctRoom = "Master bedroom"
    $(this).css("color", "blue") 
})
$(".UBathroom").click(function() {
    clearroomguess()
    correctRoom = "Upstairs bathroom"
    $(this).css("color", "blue")
})
$(".Storage").click(function() {
    clearroomguess()
    correctRoom = "Storage"
    $(this).css("color", "blue")
})
$(".Nursery").click(function() {
    clearroomguess()
    correctRoom = "Nursery"
    $(this).css("color", "blue")
})
$(".UBedroom").click(function() {
    clearroomguess()
    correctRoom = "Upstairs bedroom"
    $(this).css("color", "blue")
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