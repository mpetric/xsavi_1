$("#shakeit").click(function () {
    var leftlength = 75 + Math.floor(Math.random() * 50);
    var rightlength = 75 + Math.floor(Math.random() * 50);
    var imagerotate = Math.random() * 360;

    $("#leftleg").css("height", leftlength);
    $("#rightleg").css("height", rightlength);
    $("#image").rotate(imagerotate);
    if ((imagerotate <= 20 && Math.abs(leftlength - rightlength) <= 12) || (imagerotate >= 340 && Math.abs(leftlength - rightlength) <= 12)) {
        $("body").css("background-color", "#497641");
        $("h2").text("Robot Status: Ready to Operate");
    } else {
        $("body").css("background-color", "#972E2E")
        $("h2").text("Robot Status: All Shook Up");
    }
    console.log(imagerotate);
    console.log(Math.abs(leftlength - rightlength));
});

//adding line for git update test

