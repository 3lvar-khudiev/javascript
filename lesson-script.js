//-------------- Calculate circle ----------------

// function calculateAndPrintCircle() {
//     var r = prompt("Enter radius");
//     var length = (2 * Math.PI * r).toFixed(2);
//     var area = (Math.PI * Math.pow(r, 2)).toFixed(2);

//     printCircle(length, area);
// }

// function printCircle(length, area) {
//     alert("Length is - " + length + "\n" +
//         "Area is - " + area);
// }

// calculateAndPrintCircle();



//-------------- Calculate note ------------------

// var note1 = prompt("Enter note1");
// var note2 = prompt("Enter note2");

// function resultNote(note1, note2) {
//     var resultNote = parseInt(note1 * 0.4 + note2 * 0.6);
//     var note = ", your note: "+ resultNote;

//     if (resultNote >= 50) {
//         alert("Congrats!" + note);
//     } else {
//         alert("Sorry, please try again" + note);
//     }
// }

// resultNote(note1, note2);



//------------------- Arrays ---------------------

// var numArr = [1, 2, 3, 4, 5];
// var strArr = ["one", "two", "three", "four", "five"];
// var mixArr = [true, 2, 3, "four", "five"];

// console.log("numArr: " + numArr);
// console.log("strArr: " + strArr);
// console.log("mixArr: " + mixArr);

// mixArr.push("six");
// console.log("\nmixArr push: " + mixArr);

// mixArr.unshift(0);
// console.log("mixArr unshift: " + mixArr);

// mixArr.pop();
// console.log("mixArr pop: " + mixArr);

// mixArr.shift();
// console.log("mixArr shift: " + mixArr);

// console.log("mixArr indexOf(\"five\") = " + mixArr.indexOf("five") + "\n\n");


// var myArr = [2, 4, 4, 5];
// var sum = 0, multiply = 1;

// for (var i = 0; i < myArr.length; i++) {
//     sum += myArr[i];
//     multiply *= myArr[i];
// }

// console.log(myArr);
// console.log("Sum: " + sum + "\nMultiply: " + multiply);



//------------------ Objects ---------------------

// var player1 = {
//     firstName: "FirstName1",
//     lastName: "LastName1",
//     age: 30
// }

// console.log(player1.firstName);
// console.log(player1.lastName);
// console.log(player1.age);

// var variable1 = "firstName";
// console.log(player1[variable1]);

// player1.age = 34;
// console.log(player1);

// player1["age"] = 37;
// console.log(player1);


// var player2 = new Object();
// player2.firstName = "FirstName2";
// player2.lastName = "LastName2";
// player1.age = 24;

// console.log(player2);


// var player3 = {
//     firstName: "FirstName3",
//     lastName: "LastName3",
//     age: 35,
//     childs: ["Child1", "Child2", "Child3"],
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(player3);


// var library = [
//     {
//         title: "book1",
//         author: "author1",
//         status: true
//     },
//     {
//         title: "book2",
//         author: "author2",
//         status: false
//     },
//     {
//         title: "book3",
//         author: "author3",
//         status: true
//     }
// ];

// for (let i = 0; i < library.length; i++) {
//     var book = library[i].title + ", author: " + library[i].author + ".";

//     if (library[i].status) {
//         console.log(book + " read")
//     } else {
//         console.log(book + " not read");
//     }
// }



//---------------- Constructors ------------------

/* var player1 = {                            // without constructor
    firstName: "FirstName1",
    lastName: "LastName1",
    age: 25
}
console.log(player1)

var player2 = {
    firstName: "FirstName2",
    lastName: "LastName2",
    age: 28
}
console.log(player2) */

// function Player(firstName, lastName, age) {   // with constructor
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// var player1 = new Player("firstName1", "lastName1", 25);
// var player2 = new Player("firstName2", "lastName2", 28);

// var players = [
//     new Player("firstName1", "lastName1", 25),
//     new Player("firstName2", "lastName2", 28)
// ];

// console.log(players[0].firstName);



//-------------------- Slide ---------------------

// var i = 0;
// var images = ['http://lorempixel.com/400/200',
//     'http://lorempixel.com/400/200',
//     'http://lorempixel.com/400/200'];

// var duration = 2000;

// function slideImg() {
//     document.slide.src = images[i];

//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout("slideImg()", duration);
// }

// window.onload = slideImg();



//------------------ Document --------------------

// *** getElementById()

// var myElement = document.getElementById("myHeader");
// console.log(myElement);

// myElement.textContent = "New Jumbotron1";
// myElement.innerText = "New Jumbotron2";
// myElement.innerHTML = "<h2>Small header</h2>";
// myElement.style.backgroundColor = "#babd8d";



// *** getElementByClassName()

// var myClass = document.getElementsByClassName("nav-link");

// console.log(myClass);
// console.log(myClass[1]);

// myClass[2].textContent = "Haqqimizda";
// myClass[2].style.borderBottom = "1px solid red";



// *** getElementByTagName()

// var myElements = document.getElementsByTagName("h4");
// console.log(myElements);

// for (let i = 0; i < myElements.length; i++) {
//     myElements[i].textContent = "H4 Header";
// }



// *** querySelector()

// var myElement = document.querySelector("#myHeader");
// console.log(myElement);
// myElement.style.color = "red";

// div-lerin 1-ci child-i
// var myElement = document.querySelector("body > div > main > div.row.marketing > div:nth-child(1) > h4:nth-child(1)");
// console.log(myElement);                                                                         // h4-lerin 1-ci child-i
// myElement.style.color = "red";


// var myElements = document.querySelectorAll(".nav-item");
// console.log(myElements);

// for (let i = 0; i < myElements.length; i++) {
//     myElements[i].style.border = "10px solid black";
// }


// var myNode = document.querySelector("#myHeader");

// myNode.setAttribute("id", "newId");
// myNode.removeAttribute("id");

// myNode.classList.add("new-class");
// myNode.classList.remove("new-class");

// myNode.classList.toggle("hidden"); // true
// myNode.classList.toggle("hidden"); // false


//------------------ create element --------------------

// window.onload = function() {
//     var beforeButton = document.querySelector("#exampleButton");
//     beforeButton.addEventListener("click", function() {

//         var newNode = document.createElement("p");

//         newNode.innerHTML = "<strong>New Paragraph Element</strong>";
//         newNode.setAttribute("id", "myNode");

//         var myArr = document.getElementsByClassName("col-lg-6");
//         myArr[0].insertBefore(newNode, myArr[0].firstElementChild)
//     });
// }


//------------------- events ----------------------

// var myElement = document.querySelector('button');

// myElement.addEventListener("click", function () {
//     alert("inline function")
// });

// myElement.addEventListener("click", func1);
// myElement.addEventListener("click", func2);

// function func1() {
//     alert("function1");
// };

// function func2() {
//     alert("function2");
// };


// ---------------------------------------------------------------------------------------

// var num1 = document.querySelector("#numberOne");
// var num2 = document.querySelector("#numberTwo");

// var sum = document.querySelector("#resultSum");
// var subtract = document.querySelector("#resultSubtract");
// var multiply = document.querySelector("#resultMultiply");
// var division = document.querySelector("#resultDivision");

// num1.addEventListener("input", calculate);
// num2.addEventListener("input", calculate);

// function calculate() {
//     var one = Number(num1.value) || 0;
//     var two = Number(num2.value) || 0;

//     sum.innerHTML = (one + two);
//     subtract.innerHTML = (one - two);
//     multiply.innerHTML = (one * two);
//     division.innerHTML = (one / two);
// }

// calculate();


// ---------------------------------------------------------------------------------------

// var titles = document.querySelector("#accordion").getElementsByTagName("h2");

// for (i = 0; i < titles.length; i++) {
//     titles[i].addEventListener("click", displayAccordion);
// }

// function displayAccordion() {
//     content = this.nextSibling.nextSibling;
//     var t = this.textContent;
    
//     if (content.style.display != "block") {
//         this.textContent = this.textContent.replace("﹢", "－");
//         this.style.backgroundColor = "#565c6182";
//         this.style.borderLeft = "2px solid";
//         content.style.display = "block";
//     } else {
//         this.textContent = this.textContent.replace("－", "﹢");
//         this.style.backgroundColor = "#8897a282";
//         this.style.borderLeft = "none";
//         content.style.display = "none";
//     }
// }


// ---------------------------------------------------------------------------------------

// var square = document.querySelector("#square");
// var rectangle = document.querySelector("#rectangle");

// square.addEventListener("click", clickSquare);
// rectangle.addEventListener("click", clickRectangle); // 3th arg - boolean (true = over others)

// function clickSquare(/* event (default) */) {
//     event.stopPropagation();
    
//     console.log("square clicked");
//     console.log(event.target); // log this element
// }

// function clickRectangle(/* event (default) */) {
    
//     console.log("rectangle clicked");
//     console.log(event.target); // log this element
// }


// ---------------------------------------------------------------------------------------

// var thumb1 = document.getElementById("thumb1");
// var thumb2 = document.getElementById("thumb2");
// var thumb3 = document.getElementById("thumb3");

// thumb1.addEventListener("click", showImage);
// thumb2.addEventListener("click", showImage);
// thumb3.addEventListener("click", showImage);

// function showImage() {
//     var allBigImages = document.querySelectorAll("#image1, #image2, #image3");

//     var imgId = this.attributes["data-pic"].value;
//     var picture = document.getElementById(imgId);

//     if (picture.className === "hide") {

//         for (i = 0; i < allBigImages.length; i++) {
//             allBigImages[i].className = "hide";
//         }

//         console.log("picture class \"hide\" --> \"\"");
//         picture.className = "";
//     } else {
//         console.log("picture class \"\" --> \"hide\"");
//         picture.className = "hide";
//     }
// }