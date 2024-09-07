var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/gigachad.jpg") {
        myImage.setAttribute("src", "images/gigachad2.jpg");
    } else {
        myImage.setAttribute("src", "images/gigachad.jpg");
    }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Добро пожаловать, " + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Добро пожаловать, " + storedName;
}
myButton.onclick = function () {
    setUserName();
};
