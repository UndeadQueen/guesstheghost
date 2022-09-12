const User = $("input[name=User]");
const ghostType = $("input[name=typeguess]");
const ghostRoom = $("input[name=roomguess]");
let Isguiopened
let Isopened
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
    
}
Isguiopened = false
function getghostgui() {
    if (Isguiopened === false) {
        $("#ghostgui").show()
    }
    else {
        $("#ghostgui").hide()
    }
}
Isopened = false
function Getroomgui() {
    if (Isopened === false) {
        $("#roomgui").show()
    }
    else {
        $("#roomgui").hide()
    }
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

$(document).ready(function() {
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
$("#ghostgui").hide()
$("#roomgui").hide()
$("#ghosttypes").click(function() {
    getghostgui()
   if(Isguiopened === true) {
    Isguiopened = false
   }
   else if (Isguiopened === false) {
    Isguiopened = true
   }
})
$("#roomguibutton").click(function() {
    Getroomgui()
    if (Isopened === true) {
        Isopened = false
    }
    else if (Isopened === false) {
        Isopened = true
    }
})
getGhostrooms()
})