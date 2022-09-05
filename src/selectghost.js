
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
function ghosttypes() {
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
    $(".ghostnames").click(function() {
        console.log("ghost selected")
        console.log(correctGhost)
    })
}

$(document).ready(function() {
    ghosttypes()
})