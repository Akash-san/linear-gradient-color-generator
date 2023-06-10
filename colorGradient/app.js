var colorPalette1 = document.getElementsByClassName('colorPalette1')[0];
var colorPalette2 = document.getElementsByClassName('colorPalette2')[0];
var colorPalette3 = document.getElementsByClassName('colorPalette3')[0];
var gradiantText = document.getElementsByClassName('content')[0];
var body = document.getElementById('gradiant');

function displayGradient() {
    //     body.style.background = `linear-gradient( ${direction},${colorPalette1.value} ,${colorPalette2.value},${colorPalette3.value})`
    //     gradientText.innerHTML = body.style.background + ";"
    // }
    if (direction) {
        body.style.background = `linear-gradient( ${direction},${colorPalette1.value} ,${colorPalette2.value},${colorPalette3.value})`
        gradiantText.innerHTML = body.style.background + ";"
        gradiantText.style.display = "block";
    } else {
        gradiantText.style.display = "none";
    }
}

function changeDirection(newDirection) {
    direction = newDirection;
    displayGradient();
}
colorPalette1.addEventListener("input", function () {
    displayGradient();
});
colorPalette2.addEventListener("input", function () {
    displayGradient();
});
colorPalette3.addEventListener("input", function () {
    displayGradient();
});


