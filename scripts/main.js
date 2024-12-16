const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.png') {
        myImage.setAttribute('src', 'images/pycharm.ico');
    } else if (mySrc === 'images/pycharm.ico') {
        myImage.setAttribute('src', 'images/rider.ico');
    } else {
        myImage.setAttribute('src', 'images/firefox.png');
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    while (!myName) {
        myName = prompt("Please enter your name.");
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}