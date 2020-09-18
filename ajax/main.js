var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            renderHTML(data);
        } else {
            console.log("We connected to server, but it returned an error.");
        }
    };

    request.onerror = function() {
        console.log("Connection error");
    }
    request.send();
    pageCounter++;

    if (pageCounter > 3) {
        btn.style.pointerEvents = "none";
    }
})

function renderHTML(data) {
    var htmlString = "";

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += " and " + data[i].foods.likes[j];
            }
        }

        htmlString += " and dislikes ";

        for (let j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += " and " + data[i].foods.dislikes[j];
            }
        }

        htmlString += "</p>"
    }

    animalContainer.insertAdjacentHTML("beforeend", htmlString);
}