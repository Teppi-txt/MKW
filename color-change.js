var colorSchemes = ["regular", "dark", "yellow", "blue"]
var counter = 0;

function changeColor(lengthMs) {
    if (counter > colorSchemes.length - 1) {
        counter = 0;
    }

    $("#color-changing-feature").attr("class", "feature-display " + colorSchemes[counter]);
    $("#color-display").html(colorSchemes[counter]);

    counter++;
    console.log(1);
    setTimeout(() => {
        //whatever
        changeColor(lengthMs)
    }, lengthMs);
}


changeColor(1500)

