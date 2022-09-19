let text = ""
let isGuishown = false
function ridgeview() {
    $("#ghostsrooms").append("<p>Text</p>").click(function() {
        $(this).css("color", "blue")
        text = "Text"
        console.log(text)
    }).css("width", "10px")
    $("#ghostsrooms").append("<p>Text2</p>").click(function() {
        $(this).css("color", "blue")
        text = "Text2"
        console.log(text)
    }).css("width", "10px")
}

function getGui() {
    if (!isGuishown) {
        $("#Roomgui").hide()
    }
    if (isGuishown){
      $("#Roomgui").show()
        }
}
$(document).ready(function() {
    $("#Roomgui").hide()
    $("#Ghostrooms").click(function() {
        if (!isGuishown) {
            isGuishown = true
        }
        else {
            isGuishown = false
        }
        console.log(isGuishown)
        getGui()
    })

    console.log(isGuishown)
    $("#Foyer").click(function() {
        correctRoom = "Foyer"
        console.log(correctRoom)
        $(this).css("color", "blue")
    })
})

// nothing in this file works besides the click event and the show gui works, why!?
// the gui isn't being hidden
// why is get getGui called 3 times