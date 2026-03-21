// Select elements
let heading = document.querySelector("h1");
let input = document.getElementById("input");
let paragraph = document.querySelector("p");
let box = document.querySelector(".Box");

// Store default values (for reset)
let defaultText = heading.innerText;
let defaultBg = box.style.backgroundColor;
let defaultSize = window.getComputedStyle(heading).fontSize;
let isHidden = false;

// 🔹 1. Change Heading
function changeHeading() {
    let newText = input.value;

    if (newText === "") {
        alert("Please enter some text!");
    } else {
        heading.innerText = newText;
        input.value = ""; // clear input
    }
}

// 🔹 2. Change Background
function changeBackground() {
    let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

// 🔹 3. Increase Font Size
function increaseSize() {
    let currentSize = window.getComputedStyle(heading).fontSize;
    let newSize = parseFloat(currentSize) + 5;
    
    heading.style.fontSize = newSize + "px";
}

// 🔹 4. Show / Hide Paragraph
function paragraphHide() {
    if (isHidden) {
        paragraph.style.display = "block";
        isHidden = false;
    } else {
        paragraph.style.display = "none";
        isHidden = true;
    }
}

// 🔹 5. Reset Everything
function reset() {
    heading.innerText = defaultText;
    box.style.backgroundColor = "white";
    heading.style.fontSize = defaultSize;
    paragraph.style.display = "block";
    isHidden = false;
}