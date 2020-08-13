var num1 = document.querySelector("#numberOne");
var num2 = document.querySelector("#numberTwo");

var sum = document.querySelector("#resultSum");
var subtract = document.querySelector("#resultSubtract");
var multiply = document.querySelector("#resultMultiply");
var division = document.querySelector("#resultDivision");

num1.addEventListener("input", calculate);
num2.addEventListener("input", calculate);

function calculate() {
    var one = Number(num1.value) || 0;
    var two = Number(num2.value) || 0;

    sum.innerHTML = (one + two);
    subtract.innerHTML = (one - two);
    multiply.innerHTML = (one * two);
    division.innerHTML = (one / two);
}

calculate();


// ---------------------------------------------------------------------------------------

var titles = document.querySelector("#accordion").getElementsByTagName("h2");

for (i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", displayAccordion);
}

function displayAccordion() {
    content = this.nextSibling.nextSibling;
    var t = this.textContent;

    if (content.style.display != "block") {
        this.textContent = this.textContent.replace("﹢", "－");
        this.style.backgroundColor = "#565c6182";
        this.style.borderLeft = "2px solid";
        content.style.display = "block";
    } else {
        this.textContent = this.textContent.replace("－", "﹢");
        this.style.backgroundColor = "#8897a282";
        this.style.borderLeft = "none";
        content.style.display = "none";
    }
}


// ---------------------------------------------------------------------------------------

var square = document.querySelector("#square");
var rectangle = document.querySelector("#rectangle");

square.addEventListener("click", clickSquare);
rectangle.addEventListener("click", clickRectangle); // 3th arg - boolean (true = over others)

function clickSquare( /* event (default) */ ) {
    event.stopPropagation();

    console.log("square clicked");
    console.log(event.target); // log this element
}

function clickRectangle( /* event (default) */ ) {

    console.log("rectangle clicked");
    console.log(event.target); // log this element
}


// ---------------------------------------------------------------------------------------

var thumb1 = document.getElementById("thumb1");
var thumb2 = document.getElementById("thumb2");
var thumb3 = document.getElementById("thumb3");

thumb1.addEventListener("click", showImage);
thumb2.addEventListener("click", showImage);
thumb3.addEventListener("click", showImage);

function showImage() {
    var allBigImages = document.querySelectorAll("#image1, #image2, #image3");

    var imgId = this.attributes["data-pic"].value;
    var picture = document.getElementById(imgId);

    if (picture.className === "hide") {

        for (i = 0; i < allBigImages.length; i++) {
            allBigImages[i].className = "hide";
        }

        console.log("picture class \"hide\" --> \"\"");
        picture.className = "";
    } else {
        console.log("picture class \"\" --> \"hide\"");
        picture.className = "hide";
    }
}